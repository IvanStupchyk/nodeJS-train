const fs = require('fs')
const path = require('path')
//file system

//для создания синхронной папки(not recommend)
// fs.mkdirSync()

//для создания асинхронной папки
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw err
//
//   console.log('folder has been created')
// })

//создание определенных файлов
// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello dude',
//   err => {
//     if (err) throw err
//
//     console.log('file has been created')
//
//     //добавить новый контент в файл
//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' new content',
//       err => {
//         if (err) throw err
//         console.log('file has been changed')
//
//         //считывание файла
//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw err
//             // console.log(Buffer.from(data).toString())
//             console.log(data)
//           }
//         )
//       }
//     )
//   }
// )


//считывание файла
// fs.readFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err
//     // console.log(Buffer.from(data).toString())
//     console.log(data)
//   }
// )


//переименовывание файла
// fs.rename(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   path.join(__dirname, 'notes', 'notes.txt'),
//   err => {
//     if (err) throw err
//
//     console.log('file has been renamed')
//   }
// )