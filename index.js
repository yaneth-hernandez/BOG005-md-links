const { getMdFiles } = require('./getMdFiles')
const { getLinks } = require('./getLinks')
const { validateLinks } = require('./validateLinks')

const mdLinks = (route) => {
    return new Promise((resolve, reject) => {
        const mdFiles = getMdFiles(route)
        getLinks(mdFiles) //es un promesa
            .then((links) => {
                console.log('Sin validate:', links)
                validateLinks(links)
            })
            .catch((error) => {
                reject(console.log(error))
            })
    })
}

mdLinks(process.argv[2])
