//https://www.npmjs.com/package/axios

const getPath = require('./getPath.js')
const pathFile = process.argv[2]
const extractLinks = require('./extractLinks.js')

const getLinks = (fileMd) => {
  getPath.readFiles(fileMd) //pathFile es el nombre del archivo md
  .then((fileData) => { //data es el contenido del archivo
      console.log('Resuelta')
     // console.log('Esta es la data:',fileData)
     console.log('AQUI HAY LINKS',extractLinks.extractLinks(fileMd, fileData))
     //return 'AQUI LINKS',extractLinks.extractLinks(fileMd, fileData)
    })
    .catch((err) => {
      console.log(err)
    })
}

console.log('tengolinks',getLinks(pathFile))