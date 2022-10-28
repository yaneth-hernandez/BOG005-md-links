const fetch =require("node-fetch");
//versión de la librería para petición: npm i node-fetch@2.6.7
//Compatible con require
const { createObjectLinks } = require('./getLinks')

 
const validateLinks = (links) => {
links.forEach(link => {
  fetch(link.href) //link válido
  .then(function (response) {
    let object = createObjectLinks(link, link.file,response)
    console.log('SOLO LINKS',link);
    console.log('OBJETO',object);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
});
  
}

//validateLinks(process.argv[2], process.argv[3])

  /*2) CLI (Command Line Interface - Interfaz de Línea de Comando)
El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente manera a través de la terminal:

Options
--validate
Si pasamos la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona
 o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
*/
module.exports = {
  validateLinks
}