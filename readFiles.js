const fs = require('fs');


module.exports =  (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'UTF-8', (err, data) => {
      if (err) {
        reject({error:err})
      } else {
        resolve(data)
      }
    })
  })
}