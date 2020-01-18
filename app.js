const chalk = require('chalk')
// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

const msg = 'Success!'

console.log(chalk.green(msg))
console.log(chalk.bold(msg))
console.log(chalk.inverse(msg))
console.log(chalk.green.inverse(msg))