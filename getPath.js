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

/**
 * 
 * @param {String} route recibe ruta
 * @returns {Boolean} true||false en caso de que haya o no directorio
 */
const isADirectory = (route) => {
    try {
        return fs.statSync(route).isDirectory();
    } catch (error) {
        if (error) {
            console.log(error.message, '\n' + 'Ruta no válida')

        }

    }

}

/**
 * 
 * @param {String} route recibe ruta
 * @returns {Boolean} true||false en caso de que haya o no archivo
 */
const isAFile = (route) => {
    try {
        return fs.statSync(route).isFile();
    } catch (error) {
        if (error) {
            console.log(error.message, '\n' + 'Ruta no válida')
        }
    }

}
/**
 * 
 * @param {String} pathMdFiles recibe ruta de archivo .md
 * @returns {Promise} resolve si se cumple la promesa y reject si hay un error
 */
const readFiles = (pathMdFiles) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathMdFiles, 'UTF-8', (err, data) => {
            if (err) {
                reject({ error: err.message })
            } else {
                resolve(data)
            }
        })
    })
}

//console.log(resolveAbsolutePath(process.argv[2]))

module.exports = {
    resolveAbsolutePath,
    isADirectory,
    isAFile,
    readFiles
} 