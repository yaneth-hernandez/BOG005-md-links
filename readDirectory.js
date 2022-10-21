const path = require('path');
const getPath = require('./getPath.js')

const getMdFilesFromDirectory = (route, ext) => {
    const directoryContent = getPath.readDirectory(route);
    const mdFiles = directoryContent.filter((file)=>{
      return path.extname(file) === ext
    })
    return mdFiles
   }

   //prueba
   const directory = process.argv[2]
   const extension = `.${process.argv[3]}`
   console.log(getMdFilesFromDirectory(directory, extension))
  //prueba
