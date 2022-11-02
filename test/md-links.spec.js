const { mdLinks } = require('../index');


const correctDirectoryPath = 'test/testFolder'
const wrongDirectoryPath = 'testFolderss'
const correctFilePath = 'test/testFolder/hi.md'


const responseObjectStats = { Total: 5, Unique: 5 }

const responseValidateStats = { Total: 5, Unique: 5, Broken: 3 }



const withoutValidate = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'Test',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\prueba1\\hayholi.md'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'aquí',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\prueba1\\holi.md'
  }
]

const validatedLinksObject = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md',
    status: 500,
    message: 'fail'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'Test',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\prueba1\\hayholi.md',
    status: 404,
    message: 'fail'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'aquí',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\prueba1\\holi.md',
    status: 404,
    message: 'fail'
  }
]

const withoutValidateFile = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\BOG005-md-links\\test\\testFolder\\hi.md'
  }
]

describe('mdLinks', () => {
  it('Debe retornar objeto con estadística de links validados', () => {
    return mdLinks(correctDirectoryPath, { validate: true, stats: true }).then((res) => {
      expect(res).toEqual(responseValidateStats)
    })
  });
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
    return mdLinks(correctFilePath, { validate: false, stats: false }).then((res) => {
      expect(res).toEqual(withoutValidateFile)
    })
  });
});
