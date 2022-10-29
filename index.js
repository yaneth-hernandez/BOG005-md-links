const { getMdFiles } = require('./getMdFiles')
const { getLinks } = require('./getLinks')
const { validateLinks } = require('./validateLinks')

const mdLinks = (route,validate) => {
    return new Promise((resolve, reject) => {
        const mdFiles = getMdFiles(route)
        getLinks(mdFiles) //es un promesa
            .then((links) => {
                validateLinks(links,validate)
                .then(resolve)
               
            })
            .catch((error) => {
                reject(console.log(error))
            })
    })
}

mdLinks(process.argv[2],process.argv[3])
.then(console.log)
