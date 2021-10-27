import * as express from 'express'
import { readFile, writeFile } from 'fs'
import * as dotenv from 'dotenv'
import { addContact, fetchContacts } from './manager/contactmanager'

dotenv.config()

const PORT = process.env.PORT

//creating express server
const app = express()

//creating json parser middleware
const jsonParserMiddleware = express.json()

//registering middleware with the express middleware pipeline
app.use(jsonParserMiddleware)

//configuraing endpoints
app.get('/contacts', (req, res) => {
    console.log('request received')
    fetchContacts()
        .then(
            (successData) => {
                res.statusCode = 200
                res.send(successData)
            },
            (failureReason) => {
                res.statusCode = 500
                res.send(failureReason)
            }
        )
})
app.post('/contacts', (req, res) => {
    const contactData = req.body
    addContact(contactData)
        .then(
            (successMessage) => {
                res.statusCode = 201
                res.send(successMessage)
            },
            (reason) => {
                res.statusCode = 500
                res.send(reason)
            }
        )
})

//starting the server, so that it can start listening to port 3002
app.listen(PORT, () => {
    console.log(`server is listenning on port ${PORT}`)
})
