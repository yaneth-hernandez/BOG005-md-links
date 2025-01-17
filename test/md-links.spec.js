const { mdLinks } = require('../index');
const { validateLinks } = require('../validateLinks')

jest.mock('../validateLinks', () => {
  return {
    __esModule: true,
    validateLinks: jest.fn()
  }
})

const correctDirectoryPath = 'test/testFolder'
const wrongDirectoryPath = 'testFolderss'
const correctFilePath = 'test/testFolder/hi.md'
const responseObjectStats = { Total: 5, Unique: 5 }
const responseValidateStats = { Total: 5, Unique: 5, Broken: 3 }

const withoutValidate = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'Test',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\prueba1\\hayholi.md'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'aquí',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\prueba1\\holi.md'
  }
]

const validatedLinksObject = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
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
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'Test',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\prueba1\\hayholi.md',
    status: 404,
    message: 'fail'
  },
  {
    href: 'https://www.figma.com/file/h4lVco0D8PiTlSNLkZ0wFR/Data-Lovers-Laboratoria-%7C-Alta-Fidelidad?node-id=0%3A1',
    text: 'aquí',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\prueba1\\holi.md',
    status: 404,
    message: 'fail'
  }
]

const withoutValidateFile = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'alexis',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md'
  },
  {
    href: 'https://0es.wikipedia.org/wiki/Markdown',
    text: 'kembeck',
    file: 'D:\\Bootcamp_laboratoria\\Proyectos\\markdown-links-yh\\test\\testFolder\\hi.md'
  }
]

describe('mdLinks', () => {
  it('Debe retornar objeto con estadística de links validados', () => {
    validateLinks.mockResolvedValue(
      [
        {message: 'fail', status: 400, href: '1'},
        {message: 'fail', status: 400, href: '2'},
        {message: 'fail', status: 400, href: '3'},
        {message: 'ok', status: 200, href: '4'},
        {message: 'ok', status: 200, href: '5'},
      ]
    )
    return mdLinks(correctDirectoryPath, { validate: true, stats: true }).then((res) => {
      expect(res).toEqual(responseValidateStats)
    })
  });
  it('debe retornar los links validados', () => {
    validateLinks.mockResolvedValue(validatedLinksObject)
    return mdLinks(correctDirectoryPath, { validate: true, stats: false  }).then((res) => {
      expect(res).toEqual(validatedLinksObject)
    })
  });
  it('debe retornar estadistica de links', () => {
    return mdLinks(correctDirectoryPath, { validate: false, stats: true }).then((res) => {
      expect(res).toEqual(responseObjectStats)
    })
  });

  it('Con directorio: Debe retornar objeto links sin validación', () => {
    return mdLinks(correctDirectoryPath, { validate: false, stats: false }).then((res) => {
      expect(res).toEqual(withoutValidate)
    })
  });
  it('Debe retornar una array vacío', () => {
    validateLinks.mockResolvedValue([])
    return mdLinks(wrongDirectoryPath, { validate: true }).then((res) => {
      expect(res).toEqual([])
    })
  });
  it('Con archivo: Debe retornar objeto links sin validación', () => {
    return mdLinks(correctFilePath, { validate: false, stats: false }).then((res) => {
      expect(res).toEqual(withoutValidateFile)
    })
  });
});
