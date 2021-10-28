// console.log(process.argv.slice(2))
const dotenv = require('dotenv')
    //const data = { NAME: 'joydip' }
    //process.env.NAME='joydip'
dotenv.config()
console.log(process.env.NAME)


// /*Swagger*/
// const options = {
//     swaggerDefinition: {
//         openapi: '3.0.1',
//         info: {
//             title: "Library API",
//             version: "1.0.0",
//             description: "A simple Express Library API"
//         },
//         basePath: '/',
//         components: {
//             securitySchemes: {
//                 bearerAuth: {
//                     type: 'http',
//                     scheme: 'bearer',
//                     bearerFormat: 'JWT',
//                 }
//             }
//         },
//         security: [{
//             bearerAuth: []
//         }]
//     },
//     apis: ["./routes/*.js"]
// };
// const specs = swaggerJsDoc(options);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));