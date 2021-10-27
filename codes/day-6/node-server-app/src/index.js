const express = require('express')
//const { json } = require('body-parser')
const { logger } = require('./loggermiddleware')

const app = express()
const jsonParser = express.json()
app.use(jsonParser)
//app.use(logger)

app.get('/', (req, res) => {
    res.json({ name: 'anil' })
})
app.post('/', logger, (req, res) => {
    console.log(req.body)
    res.send('hello')
})
app.listen(3001, () => {
    console.log('server running on port 3001')
})