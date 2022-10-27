//https://www.npmjs.com/package/axios

const getPath = require('./getPath.js')
const extractLinks = require('./extractLinks.js')

/**
 * 
 * @param {String} listMdFiles que será leido de manera asíncrona
 * @return {Array} de objetos con contenido de links, y data  
 */

// const getLinks = (listMdFiles) => {
// listMdFiles.forEach(mdFile => {
//   getPath.readFiles(mdFile) 
//   .then((fileData) => { 
//      console.log(extractLinks.extractLinks(mdFile, fileData))
//     })
//     .catch((err) => {
//       console.log(err.error,'\n'+ 'Ingrese una ruta válida')
      
//     })
// });
// }

const getLinks = (listMdFiles) => {
  return new Promise((resolve, reject)=>{
    listMdFiles.forEach(mdFile => {
      getPath.readFiles(mdFile) 
      .then((fileData) => { 
         //console.log(extractLinks.extractLinks(mdFile, fileData))
         resolve(extractLinks.extractLinks(mdFile, fileData))
        })
        .catch((err) => {
          //console.log(err.error,'\n'+ 'Ingrese una ruta válida')
          reject(err.error)
        })
    });
  })
  
  }

module.exports = {
  getLinks
}




