const { getMdFiles } = require('./getMdFiles')
const { getLinks } = require('./getLinks')
const { validateLinks } = require('./validateLinks')

/**
 * @param {String} route 
 * @param {Boolean} options 
 * @returns {Promise}
 */

const mdLinks = (route, options) => {
    return new Promise((resolve, reject) => {
        const mdFiles = getMdFiles(route)
        getLinks(mdFiles) 
            .then((links) => {
                let allLinks = links.flat()
                if (options.validate && options.stats) {
                    validateLinks(allLinks) 
                        .then((res) => {
                            const result = {
                                Total: res.length,
                                Unique: new Set(res).size,
                                Broken: res.filter(link => link.message !== 'ok').length,
                            }
                            resolve(result)
                        })
                        .catch((error) => {
                            result.Broken = error.message
                            reject(result)
                        })
                        return
                }
                if (options.validate) {
                    validateLinks(allLinks)
                        .then(resolve)
                        .catch((error) => {
                            reject(console.log(error))
                        })
                    return
                }
                if (options.stats) {
                    const result = {
                        Total: allLinks.length,
                        Unique: new Set(allLinks).size,
                    }
                    resolve(result)
                    return
                }
                resolve(allLinks)
                return
            })
            .catch((error) => {
                reject(console.log(error))
            })
    })
}

module.exports = {
    mdLinks
}