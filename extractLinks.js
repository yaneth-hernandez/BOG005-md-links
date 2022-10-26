const { marked } = require('marked')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//console.log('Ver marked', marked)

/**
 * 
 * @param {String} link encontrado en el archivo
 * @param {String} file el archivo md que será leido
 * @returns {Object} con el contenido de los links
 */
const createObjectLinks = (link, file) => {
  return {
    href: link.href,
    text: link.text,
    file: file,
    status: '',
    ok: ''
  }
}

/**
 * 
 * @param {String} fileMd Archivo .md 
 * @param {String} fileData data extraida del archivo
 * @returns {Array} de objetos con información de los links
 */
const extractLinks = (fileMd, fileData) => {
  const getHtml = marked(fileData)
  //const regExp = new RegExp("((https?://)|(https?://)).?[a-zA-Z0-9-_.]+/([a-zA-Z0-9-_./?=#]?)+", "g")
  let linkList = []
  //console.log(getHtml)
  const dom = new JSDOM(getHtml)
  //console.log(dom)
  const links = dom.window.document.querySelectorAll('a')
  links.forEach((link) => {
    //if (regExp.test(link.href)) {
     // if (link.href.includes('http')) {
      //console.log(link.href)
      //console.log(link.text)
    //  linkList.push(createObjectLinks(link, fileMd))
      
   // }
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