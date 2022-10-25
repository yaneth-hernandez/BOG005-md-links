const path = require('path');
const fs = require('fs');

const pathIsAbsolute = (receivedRoute) => {
    return path.isAbsolute(receivedRoute) //true si es absoluta false si no lo es
}

/**
 * @param {String} route recibe la ruta, si es relativa la cambia
 * @returns {String} ruta obsoluta
 */
const resolveAbsolutePath = (route) => {
    if (pathIsAbsolute(route)) {
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

const readDirectory = (route) => {
    return fs.readdirSync(route, "utf-8");
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

/**
 * @param {String} file archivo
 * @returns {Boolean} true si el archivo es md false si no lo es
 */
const isMd = (file) => {
    return path.extname(file) === '.md' 
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
    readDirectory,
    isAFile,
    isMd,
    readFiles
} 