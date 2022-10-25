const getPath = require('./getPath')
const path = require('path')

const getMdFiles = (receivedRoute) => {
    const absolutePath = getPath.resolveAbsolutePath(receivedRoute)
    let mdFileList = []
    if (getPath.isADirectory(absolutePath)) {
        const mdFilesInDirectory = getPath.readDirectory(absolutePath)
        mdFilesInDirectory.forEach((dir) => {
            let newPath = path.join(absolutePath, dir)
            mdFileList = mdFileList.concat(getMdFiles(newPath))
        })

    } else if (getPath.isAFile(absolutePath)) {
        getPath.isMd(absolutePath) ? mdFileList.push(absolutePath) : mdFileList
    }
    return mdFileList
}

//console.log('Encontró archivo:',getMdFiles(process.argv[2]))

module.exports = {
    getMdFiles
}

//Documentación, validar se un path existe: https://www.geeksforgeeks.org/node-js-fs-existssync-method/


//probar ruta absoluta:/mnt/d/Bootcamp_laboratoria/Proyectos/BOG005-md-links/otroprueba