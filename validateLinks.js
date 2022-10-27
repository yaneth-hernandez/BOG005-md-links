const fetch =require("node-fetch");
//versión de la librería para petición: npm i node-fetch@2.6.7
//Compatible con require


//fetch('https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e') //link no válido
fetch('https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback') //link válido
  .then(function (response) {
    // handle success
    console.log('Aquí la respuestas',response.status,'\n', response.statusText);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('Voy al siguiente paso');
  });
  

  /*2) CLI (Command Line Interface - Interfaz de Línea de Comando)
El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente manera a través de la terminal:

Options
--validate
Si pasamos la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona
 o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
*/