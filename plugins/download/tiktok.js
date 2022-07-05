global.Api = new (require('./path/to/neoxrApi'))('jntZZE')

global.Api.tiktok('https://vt.tiktok.com/ZSe22y3dA').then(result => {
   console.log(result)
}).catch(error => {
   console.log(error)
})
