const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { marked } = require('marked')

/**
 * @param {String} link encontrado en el archivo
 * @param {String} file el archivo md que será leido
 * @returns {Object} con el contenido de los links
 */
const createObjectLinks = (link, file) => {
  return {
    href: link.href,
    text: link.text,
    file: file,
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
    link.href.includes('http') ? linkList.push(createObjectLinks(link, fileMd)) : linkList
  })
  return linkList
}

/**
 * @param {String} pathMdFile recibe ruta de archivo .md
 * @returns {Promise} resolve si se cumple la promesa y reject si hay un error
 */
const readFiles = (pathMdFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathMdFile, 'UTF-8', (err, data) => {
      if (err) {
        reject({ error: err.message })
      } else {
        resolve(extractLinks(pathMdFile, data))
      }
    })
  })
}

/**
 * @param {String} listMdFiles que será leido de manera asíncrona
 * @return {Array} de objetos con contenido de links, y data  
 */
const getLinks = (listMdFiles) => {
  let promises = []
  promises = listMdFiles.map(mdFile => {
    return readFiles(mdFile)
  });

  return Promise.all(promises)
    .then((res) => res.flat())
}

module.exports = {
  getLinks
}