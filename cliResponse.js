const cliResponse = (res, options) => {
    if (options.validate && options.stats) {
        console.log(`Total: ${res.Total}\nUnique: ${res.Unique}\nBroken: ${res.Broken}`)
    } else if (options.validate) {
        res.forEach(element => {
            console.log(`${element.file} ${element.href} ${element.message} ${element.status} ${element.text}`)
        });
    } else if (options.stats) {
        console.log(`Total: ${res.Total}\nUnique: ${res.Unique}`)
    } else {
        res.forEach(element => {
            console.log(`${element.file} ${element.href} ${element.text}`)
        });
    }
}

module.exports = {
    cliResponse
}