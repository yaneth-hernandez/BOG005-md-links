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
        getLinks(mdFiles) //es un promesa
            .then((links) => {
                if (options.validate && options.stats) {
                    validateLinks(links)
                        .then((res) => {
                            const result = {
                                Total: res.length,
                                Unique: new Set(res).size,
                                Broken: res.filter(link => link.message !== 'ok').length,
                            }
                            resolve(result)
                            return;
                        })
                }
                if (options.validate) {
                    validateLinks(links)
                        .then(resolve)
                    return
                    // validateLinks(links)
                    // .then((res)=>{
                    //     //console.log(res)
                    //     resolve(res)
                    // })
                }
                if (options.stats) {
                    const result = {
                        Total: links.length,
                        Unique: new Set(links).size,
                    }
                    resolve(result)
                    return
                }
                resolve(links)
            })
            .catch((error) => {
                reject(console.log(error))
            })
    })
}

module.exports = {
    mdLinks
}