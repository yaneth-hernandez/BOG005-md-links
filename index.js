const { getMdFiles } = require('./getMdFiles')
const { getLinks } = require('./getLinks')
const { validateLinks } = require('./validateLinks')

const mdLinks = (route, validate) => {
    return new Promise((resolve, reject) => {
        const mdFiles = getMdFiles(route)
        getLinks(mdFiles) //es un promesa
            .then((links) => {
                if(validate === '--validate'){
                     validateLinks(links, validate)
                    .then(resolve)
                }else{
                    console.log(links)
                }
               
            })
            .catch((error) => {
                reject(console.log(error))
            })
    })
}

mdLinks(process.argv[2], process.argv[3])
    .then(console.log)
