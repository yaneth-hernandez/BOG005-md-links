const { mdLinks } = require('./index')
const { cliResponse } = require('./cliResponse')

const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats')
}

mdLinks(process.argv[2], options)
    .then((res)=>{
       cliResponse(res, options)
    })
    .catch((error)=>{
        console.log(error)
    })
    