const { resolveAbsolutePath, isADirectory, isAFile, } = require('./getPath')
const path = require('path')
const fs = require('fs');

/**
 * @param {String} receivedRoute  
 * @returns {Array} con archivos .md
 */
const getMdFiles = (receivedRoute) => {
    const absolutePath = resolveAbsolutePath(receivedRoute)
    let mdFileList = []
    try {
        if (path.extname(absolutePath) === '.md') {
            isAFile(absolutePath)
            mdFileList.push(absolutePath)
        }
        else {
            isADirectory(absolutePath)
            const mdFilesInDirectory = fs.readdirSync(absolutePath, "utf-8")
            mdFilesInDirectory.forEach((dir) => {
                let newPath = path.join(absolutePath, dir)
                mdFileList = mdFileList.concat(getMdFiles(newPath))
            })
        }
    } catch (error) {
        console.log(error)
    }
    return mdFileList
}


module.exports = {
    getMdFiles
}
