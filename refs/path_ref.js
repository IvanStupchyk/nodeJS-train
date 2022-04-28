const path = require('path')

//абсолютный путь
console.log(__filename)

//забирает название файла из абсолютного пути
console.log(path.basename(__filename))

//в какой папке находится файл
console.log(path.dirname(__filename))

//расширение файла
console.log(path.extname(__filename))

//для работы, как с объектом
console.log(path.parse(__filename))

//для генерации определенного пути
console.log(path.join(__dirname, 'test', 'second.html'))

console.log(path.resolve(__dirname, 'test', '/second.html'))