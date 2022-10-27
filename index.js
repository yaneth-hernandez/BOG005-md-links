const getMdFiles = require('./getMdFiles')
const getLinks = require('./getLinks')

const mdLinks= (route)=>{
    return new Promise((resolve,reject)=>{
        const mdFiles = getMdFiles.getMdFiles(route)
        console.log(mdFiles)
        getLinks.getLinks(mdFiles)
        .then((res)=>{
            resolve(console.log(res))
            //console.log('Promesa cumplida',res)
        })
        .catch((error)=>{
            reject(console.log(error))
        })
    })
}

mdLinks(process.argv[2])

//1.- Si getLinks lee los archivos y extrae los links, Por qué no extrae links de cada archivo extraido de manera recursiva??
