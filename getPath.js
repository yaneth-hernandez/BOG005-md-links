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
 * @param {String} route recibe ruta
 * @returns {Boolean} true||false en caso de que haya o no directorio
 */
const isADirectory = (route) => {
    try {
        return fs.statSync(route).isDirectory();
    } catch (error) {
        throw error.message, 'Ingrese una ruta de directorio válida'
    }
}

/**
 * @param {String} route recibe ruta
 * @returns {Boolean} true||false en caso de que haya o no archivo
 */
const isAFile = (route) => {
    try {
        return fs.statSync(route).isFile();
    } catch (error) {
        throw error.message, 'Ingrese una ruta de archivo válida'
    }
}

module.exports = {
    resolveAbsolutePath,
    isADirectory,
    isAFile,
} 