const getPath = require('./getPath')
const path = require('path')
const fs = require('fs');


/**
 * @param {String} receivedRoute  
 * @returns {Array} con archivos .md
 */
const getMdFiles = (receivedRoute) => {
    const absolutePath = getPath.resolveAbsolutePath(receivedRoute)
    let mdFileList = []
    if (getPath.isADirectory(absolutePath)) {
        const mdFilesInDirectory = fs.readdirSync(absolutePath,"utf-8")
        mdFilesInDirectory.forEach((dir) => {
            let newPath = path.join(absolutePath, dir)
            mdFileList = mdFileList.concat(getMdFiles(newPath))
        })

    } else if (getPath.isAFile(absolutePath)) {
        path.extname(absolutePath) === '.md' ? mdFileList.push(absolutePath) : mdFileList
    }
    return mdFileList
}

//console.log('Encontró archivo:',getMdFiles(process.argv[2]))

module.exports = {
    getMdFiles
}

//Documentación, validar se un path existe: https://www.geeksforgeeks.org/node-js-fs-existssync-method/


//probar ruta absoluta linux:/mnt/d/Bootcamp_laboratoria/Proyectos/BOG005-md-links/otroprueba
//windows: d\Bootcamp_laboratoria\Proyectos\BOG005-md-links\otroprueba