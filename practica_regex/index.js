const parrafo1 = document.querySelector('.parrafo1')
const parrafo2 = document.querySelector('.parrafo2')

//Eliminar números
let newparagraph1 = parrafo1.innerText.replace(/\d/g,'')
newparagraph1.innerText = newparagraph1.replace(/\s\s/g,' ')

const newparagraph2 = parrafo2.innerText.replace(/\w+/g,'creepypastas')

parrafo1.innerText = newparagraph1
parrafo2.innerText = newparagraph2


//http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=mix