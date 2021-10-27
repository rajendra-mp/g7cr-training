// console.log(process.argv.slice(2))
const dotenv = require('dotenv')
//const data = { NAME: 'joydip' }
//process.env.NAME='joydip'
dotenv.config()
console.log(process.env.NAME)