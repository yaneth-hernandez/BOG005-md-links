const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { marked } = require('marked')

/**
 * @param { HTMLAnchorElement {}} link un objeto con infirmación
 *  de cada link encontrado en el archivo
 * @param {String} file archivo .md
 * @param {Object} res respuesta a petición HTTP
 * @return {Object} objectLinks 
 */
const createObjectLinks = (link, file, res = null) => {
  const objectLinks = {}
  if (res !== null) {
    objectLinks.href = link.href
    objectLinks.text = link.text
    objectLinks.file = file
    objectLinks.status = res.status
    objectLinks.message = res.statusText === 'Not Found' ? 'fail' : 'ok'
  } else {
    objectLinks.href = link.href
    objectLinks.text = link.text
    objectLinks.file = file
  }
  return objectLinks
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
  getLinks,
  createObjectLinks
}