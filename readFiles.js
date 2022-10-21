const getPath = require('./getPath.js')
const pathFile = process.argv[2]


//prueba

getPath.readFiles(pathFile) //pathFile es el nombre del archivo
.then((data) => { //data es el contenido del archivo
    console.log('Resuelta')
   //console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
//prueba

console.log(getPath.isMd(pathFile))