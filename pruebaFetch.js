const fetch =require("node-fetch");
//versión de la librería para petición: npm i node-fetch@2.6.7
//Compatible con require
fetch('https://www.hayHoli.org/wiki/Markdown') //link no válido
//fetch('https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e') //link no válido
//fetch('https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback') //link válido
  .then(function (response) {
    // handle success
    console.log('Aquí la respuestas',response,'\n', response);
  })
  .catch(function (error) {
    // handle error
    console.log('CAE EN EL ERROR',error);
  })
  