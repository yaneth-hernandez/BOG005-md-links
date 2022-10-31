const fetch = require("node-fetch");
//versión de la librería para petición: npm i node-fetch@2.6.7
//Compatible con require
const { createObjectLinks } = require('./getLinks')

const validateLinks = (links, validate) => {
  const objectList = links.map(link =>
    fetch(link.href) //link válido
      .then(function (response) {
        if (validate !== '--validate') {
          return link
        } else {
          //console.log(createObjectLinks(link, link.file, response));
          return createObjectLinks(link, link.file, response)
        }
      })
      .catch(function (error) {
        // handle error
        //console.log(error.code);
        //   console.log('el link con error',link.href)
        const objectError = createObjectLinks(link, link.file, error)
        objectError.status = 502
        objectError.message = error.code === 'ENOTFOUND' ? 'fail' : error.code
        return objectError
        //return createObjectLinks(link, link.file, error)
      })
  );
  return Promise.all(objectList)
}

/*const withOutValidate = (links, validate) => {
  const objectList = links.map(link =>
    fetch(link.href) //link válido
      .then(function (response) {
        if (validate !== '--validate') {
          return link
        } else {
          //console.log(createObjectLinks(link, link.file, response));
          return createObjectLinks(link, link.file, response)
        }
      })
      .catch(function (error) {
        // handle error
       console.log(error);
      //  console.log(link.href)
      })
  );
  return Promise.all(objectList)
}*/




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

