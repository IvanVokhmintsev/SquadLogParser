const Tail = require('tail').Tail

const parseLine = require('./parseLine')
const { fileName } = require('./config.json')

const tail = new Tail(fileName)

tail.on('line', newLine => {
  const result = parseLine()
  if (result) {
    //
  }
})

tail.on('error', error => {
  console.log('ERROR: ', error)
})

// fs.readFile('file.log', (err, data) => {
//   if (err) throw err
//   const lines = data.toString().split('\n')
//   for (const line of lines) {
//     const result = parseLine(line)
//     if (!result) continue
//     if (result.eventType === 'playerDied') {
//       console.log(result)
//     }
//   }
// })
