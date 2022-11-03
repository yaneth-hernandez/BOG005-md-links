# Markdown Links 4678

![md-links](https://sandmann.co/wp-content/uploads/Was-ist-Markdown-Cover.jpg)

Herramienta ejecutable en línea de comando (CLI), desarrollada en [Node.js](https://nodejs.org/es/), entorno de ejecución para JavaScript.

### 1. Instalación
`npm install <github-user>/md-links`

### 2. Uso
```js
const mdLinks = require("<github-user>/md-links");
```

### 3. Documentación

#### 1) JavaScript API

El módulo debe poder **importarse** en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

#### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.

* `options`: Un objeto con **únicamente** las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links encontrados.
  - `stats`: Booleano que determina si se desea obtener un output con información estadística general.

#### Valor de retorno

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

#### Ejemplo 

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### 2) CLI 

En **terminal** CLI:

`md-links <path-to-file> [options]`

Ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Valor de retorno

##### Options

##### `--validate`
```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

`--stats` `--validate` 

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
~~~~
## Autor
##### Yaneth Hernández
~~~~