const fetch = require("node-fetch");
//versión de la librería para petición: npm i node-fetch@2.6.7
//Compatible con require
const { createObjectLinks } = require('./getLinks')

const validateLinks = (links) => {
  const objectList = links.map(link =>
    fetch(link.href) //link válido
      .then(function (response) {
        return createObjectLinks(link, link.file, response)
      })
      .catch(function (error) {
        const objectError = createObjectLinks(link, link.file, error)
        objectError.status = 500
        objectError.message = error.code === 'ENOTFOUND' ? 'fail' : error.code
        return objectError
      })
  );
  return Promise.all(objectList)
}

module.exports = {
  validateLinks
}

