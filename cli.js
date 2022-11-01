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

    //https://www.youtube.com/watch?v=BkotrAFtBM0

    //solo validate { validate: true, stats: false }
    //solo stats { validate: false, stats: true }
    //validate y stat { validate: true, stats: true }