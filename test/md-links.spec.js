const { mdLinks } = require('../index');
const { validateLinks } = require('../validateLinks')
const { getLinks } = require('../getLinks')
const { getMdFiles } = require('../getMdFiles')

const correctRoute = './otraprueba'
const wrongRoute = './otrapruebas'

const objectStats = { Total: 5, Unique: 5 }

const objectValidateStats = { Total: 5, Unique: 5, Broken: 3 }

const mdFiles = [
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\hi.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\hayholi.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\holi.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\prueba2\\hello.md',
  'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\otraprueba\\prueba1\\prueba2\\prueba3\\hola.md'
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

describe('getMdFiles: When file is valid', () => {
  it('debe retornar array de archivos md', () => {
      expect(getMdFiles(correctRoute)).toEqual(mdFiles)
  });
});

describe('getLinks', () => {
  it('debe retornar los links sin validar', () => {
    return getLinks(mdFiles).then((res) => {
      expect(res).toEqual(withoutValidate)
    })
  });

});

describe('validateLinks', () => {
  it('debe retornar los links validados', () => {
    return validateLinks(withoutValidate).then((res) => {
      expect(res).toEqual(validatedLinksObject)
    })
  });

});

describe('mdLinks', () => {
  it('debe retornar los links validados', () => {
    return mdLinks(correctRoute, { validate: true }).then((res) => {
      expect(res).toEqual(validatedLinksObject)
    })
  });
});

describe('mdLinks', () => {
  it('debe retornar los links validados', () => {
    return mdLinks(correctRoute, { stats: true }).then((res) => {
      expect(res).toEqual(objectStats)
    })
  });
});

describe('mdLinks', () => {
  it('debe retornar los links validados', () => {
    return mdLinks(correctRoute, { validate:true, stats: true }).then((res) => {
      expect(res).toEqual(objectValidateStats)
    })
  });
});

describe('mdLinks', () => {
  it('debe retornar los links validados', () => {
    return mdLinks(correctRoute, { }).then((res) => {
      expect(res).toEqual(withoutValidate)
    })
  });
});

describe('mdLinks', () => {
  it('debe retornar los links validados', () => {
    return mdLinks(wrongRoute, { }).then((res) => {
      expect(res).toEqual([])
    })
  });
});