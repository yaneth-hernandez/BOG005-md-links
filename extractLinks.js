const { marked } = require('marked')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs')

//console.log('Ver marked', marked)


const extractLinks = (contentFile) => {
    const readFile = fs.readFileSync(contentFile, {encoding:'utf8', flag:'r'})
    const getHtml = marked(readFile)
    console.log(getHtml)
    const dom = new JSDOM(readFile)
    console.log(dom)
    // const links = dom.window.document.getElementsByTagName('a')
    // return links

};

// const extractLinks = (link) => {
//    const regExp =  new RegExp("((https?://)|(https?://)).?[a-zA-Z0-9-_.]+/([a-zA-Z0-9-_./?=#]?)+","g")
//    let linkResult = []
//     if(link){
//         linkResult = link.match(regExp)
//         console.log(linkResult)
//     } else {
//         console.log('No hay link')
//     }
// };


const createObjectLinks = (link) => {
    return { 
      href: link.href, 
      text: link.text, 
      file:pathFile, 
      status:'', 
      ok:'' 
    }
}

console.log(extractLinks(process.argv[2]))