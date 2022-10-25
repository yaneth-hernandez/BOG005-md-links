//https://www.npmjs.com/package/axios

const getPath = require('./getPath.js')
const pathFile = process.argv[2]
const getMdFiles = require('./getMdFiles.js')



//prueba

getPath.readFiles(pathFile) //pathFile es el nombre del archivo md
.then((fileData) => { //data es el contenido del archivo
    console.log('Resuelta')
    console.log('Esta es la data:',fileData)
  })
  .catch((err) => {
    console.log(err)
  })
//prueba

console.log(getPath.readFiles(pathFile))

