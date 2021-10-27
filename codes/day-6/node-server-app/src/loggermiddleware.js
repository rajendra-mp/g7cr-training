const logger = (req, res, next) => {
    console.log('logged')
    next()
}
// const logger = () => {
//     const consoleLogger = (req, res, next) => {
//         console.log('logged')
//         next()
//     }
//     const fileLogger = (req, res, next) => {
//         next()
//     }
//     return {
//         logger1: consoleLogger,
//         logger2: fileLogger
//     }
// }
module.exports = { logger }