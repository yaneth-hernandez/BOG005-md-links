const { marked } = require('marked')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//console.log('Ver marked', marked)

/**
 * @param {String} link encontrado en el archivo
 * @param {String} file el archivo md que será leido
 * @returns {Object} con el contenido de los links
 */

const createObjectLinks = (link, file) => {
  //colocar validación de respuesta http
  return {
    href: link.href,
    text: link.text,
    file: file,
    status: '',
    ok: ''
  } 
}


/**
 * @param {String} fileMd Archivo .md 
 * @param {String} fileData data extraida del archivo
 * @returns {Array} de objetos con información de los links
 */
const extractLinks = (fileMd, fileData) => {
  let linkList = []
  const getHtml = marked(fileData)
  const dom = new JSDOM(getHtml)
  const links = dom.window.document.querySelectorAll('a')
  links.forEach((link) => {
    link.href.includes('http') ? linkList.push(createObjectLinks(link, fileMd)):linkList
  })
  return linkList
};


// const param = process.argv[2]
// const readFile = fs.readFileSync(param, {encoding:'utf8', flag:'r'})
// console.log(extractLinks(param,readFile))

module.exports = {
  extractLinks
}



