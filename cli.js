const { mdLinks } = require('./index')


const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats')
}

mdLinks(process.argv[2], options)

    // .then(console.log)
    .then((res)=>{
        console.log(res)
        //getStats(res, process.argv)
    })
    .catch((error)=>{
        console.log(error)
    })

    //https://www.youtube.com/watch?v=BkotrAFtBM0