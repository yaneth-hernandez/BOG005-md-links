const path = require('path');
const fs = require('fs');


/**
 * @param {String} route recibe la ruta, si es relativa la cambia
 * @returns {String} ruta obsoluta
 */
const resolveAbsolutePath = (route) => {
    if (path.isAbsolute(route)) {
        return route
    }
    return path.resolve(route)
}

const isADirectory = (route) => {
    try{
        return fs.statSync(route).isDirectory();
    } catch(error){
        if(error.errno === -2){
            return false
        }
    }
    
}

const isAFile = (route) => {
    try{
        return fs.statSync(route).isFile();
    }catch(error){
        if(error.errno === -2){
            return false
        }
    }
    
}

const readFiles = (pathMdFiles) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathMdFiles, 'UTF-8', (err, data) => {
            if (err) {
                reject({ error: err })
            } else {
                resolve(data)
            }
        })
    })
}

console.log(resolveAbsolutePath(process.argv[2]))

module.exports = {
    resolveAbsolutePath,
    isADirectory,
    isAFile,
    readFiles
} 