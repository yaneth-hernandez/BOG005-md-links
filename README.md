# Markdown Links

![md-links](https://sandmann.co/wp-content/uploads/Was-ist-Markdown-Cover.jpg)

Herramienta ejecutable en línea de comando (CLI), desarrollada en [Node.js](https://nodejs.org/es/), entorno de ejecución para JavaScript, para validar dentro de archivos .md los links existentes.
Asegúrate de tener creado un package.json en donde instalarás esta librería.

### 1. Instalación
`npm i markdown-links-yh`

### 2. Uso

#### 1) API

El módulo debe poder **importarse** en otros scripts de Node.js de la siguiente manera:

```js
const mdLinks = require("markdown-links-yh");
```

#### `mdLinks(path, options)`

#### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.

* `options`: Un objeto con **únicamente** las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links encontrados.
  - `stats`: Booleano que determina si se desea obtener un output con información estadística general.

#### Valor de retorno

Con `validate:false` :

```js
[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md'
  },
]
```
Con `validate:true` :

```js
[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md',
    status: 200,
    message: 'ok'
  }, 
     {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md',
    status: 500,
    message: 'fail'
  },
]
```
Con `validate:true stats:true` :

```js
{ Total: 5, Unique: 5, Broken: 3 }
```
Con `validate:false stats:true` :

```js
{ Total: 5, Unique: 5 }
```

#### Ejemplo 

```js
const mdLinks = require("markdown-links-yh");
const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats')
}

mdLinks("./some/example.md", options)
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
Ejecútalo ejecutando en consola: node `<nombre del archivo donde lo has requerido>` `argumento path`,  `argumento options`

### 2) CLI 

En **terminal** CLI: Asegurate de que tus archivos .js estén configurados para ejecutarse con node.js.

Instala de manera global

`npm i markdown-links-yh -g`

Ejecuta el comando `mdLinks` directamente en consola, de acuerdo al siguiente ejemplo:

```sh
$ mdLinks ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Valor de retorno

##### Options

##### `--validate`
```sh
$ mdLinks ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

```sh
$ mdLinks ./some/example.md --stats
Total: 3
Unique: 3
```

`--stats` `--validate` 

```sh
$ mdLinks ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
~~~~
## Autor
##### Yaneth Hernández
~~~~