const { mdLinks } = require('../index');
const { validateLinks } = require('../validateLinks')
const { getLinks } = require('../getLinks')
const { getMdFiles } = require('../getMdFiles')
const { isAFile } = require('../getPath')

const correctDirectoryPath = './otraprueba'
const wrongDirectoryPath = './otrapruebas'
const correctFilePath = './otraprueba/hi.md'
const wrongFilePath = './otraprueba/he.md'

const responseObjectStats = { Total: 5, Unique: 5 }

const responseValidateStats = { Total: 5, Unique: 5, Broken: 3 }
const validateStatsAFile = { Total: 3, Unique: 3, Broken: 1 }

const mdFiles = [
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\hayholi.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\holi.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\prueba2\\hello.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\prueba2\\prueba3\\hola.md'
]

const AnMdFiles = [
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md'

]

const withoutValidate = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'Test',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\hayholi.md'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'aquí',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\holi.md'
  }
]

const validatedLinksObject = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
    status: 500,
    message: 'fail'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'Test',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\hayholi.md',
    status: 404,
    message: 'fail'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'aquí',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\holi.md',
    status: 404,
    message: 'fail'
  }
]
const validateLinkAFile = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
    status: 500,
    message: 'fail'
  }
]

const withoutValidateFile = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md'
  }
]

// describe('getMdFiles: When file is valid', () => {
//   it('debe retornar array de archivos md', () => {
//     expect(getMdFiles(correctDirectoryPath)).toEqual(mdFiles)
//   });
//   it('debe retornar array de archivos md', () => {
//     expect(getMdFiles(correctFilePath)).toEqual(AnMdFiles)
//   });
//   it('debe retornar array vacío', () => {
//     expect(getMdFiles(wrongFilePath)).toEqual([])
//   });
// });

// describe('getLinks', () => {
//   it('debe retornar los links sin validar', () => {
//     return getLinks(mdFiles).then((res) => {
//       expect(res).toEqual(withoutValidate)
//     })
//   });

// });

// describe('validateLinks', () => {
//   it('debe retornar los links validados', () => {
//     return validateLinks(withoutValidate).then((res) => {
//       expect(res).toEqual(validatedLinksObject)
//     })
//   });

// });

describe('mdLinks', () => {
  it('debe retornar los links validados', () => {
    return mdLinks(correctDirectoryPath, { validate: true }).then((res) => {
      expect(res).toEqual(validatedLinksObject)
    })
  });
  it('debe retornar estadistica de links', () => {
    return mdLinks(correctDirectoryPath, { stats: true }).then((res) => {
      expect(res).toEqual(responseObjectStats)
    })
  });
  it('Debe retornar objeto con estadística de links validados', () => {
    return mdLinks(correctDirectoryPath, { validate: true, stats: true }).then((res) => {
      console.log("holaa")
      expect(res).toEqual(responseValidateStats)
    })
  });
  it('Debe retornar objeto links sin validación', () => {
    return mdLinks(correctDirectoryPath, { validate: false, stats: false }).then((res) => {
      expect(res).toEqual(withoutValidate)
    })
  });
  it('Debe retornar una array vacío', () => {
    return mdLinks(wrongDirectoryPath, { validate: true }).then((res) => {
      expect(res).toEqual([])
    })
  });
  it('Debe retornar objeto links sin validación', () => {
    return mdLinks(correctFilePath, { validate:false, stats: false }).then((res) => {
      expect(res).toEqual(withoutValidateFile)
    })
  });

});

// describe('isAFile', () => {
//   it('true si es archivo', () => {
//     expect(isAFile(correctFilePath)).toEqual(true)
//   });
//   // it('si no es archivo mostrar error', () => {
//   //   expect(isAFile(wrongFilePath)).toThrow("Ingrese una ruta válida")
//   // });
// });