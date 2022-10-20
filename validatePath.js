const path = require('path');
const fs = require('fs');

const pathIsAbsolute = (route) => path.isAbsolute(route) //true si es absoluta false si no lo es

const resolvePath = (route) => {
    if(pathIsAbsolute(route)){
        return route
    }

    return path.resolve(route)
}

const isDirectory = (route)=> fs.statSync(route).isDirectory();
const readDirectory = (route) => fs.readdirSync(route, "utf-8");
const filterMdFiles = (route, ext) => {
    const content = readDirectory(route);
    const filesMd = content.filter((file)=>{
      return path.extname(file) === ext
    })
    return filesMd
   }
//prueba
   const directory = process.argv[2]
   const extension = `.${process.argv[3]}`
   console.log(filterMdFiles(directory, extension))
//prueba


const isFile = (route)=> fs.statSync(route).isFile();
const readFiles =  (pathMdFiles) => {
    return new Promise((resolve, reject) => {
      fs.readFile(pathMdFiles, 'UTF-8', (err, data) => {
        if (err) {
          reject({error:err})
        } else {
          resolve(data)
        }
      })
    })
  }

 



