import * as express from 'express'
import * as dotenv from 'dotenv'
import routerMiddleware from './routes/apiroutes'

dotenv.config()
const PORT = process.env.PORT

//creating express server
const app = express()

//creating json parser middleware
const jsonParserMiddleware = express.json()

//registering middleware with the express middleware pipeline
app.use(jsonParserMiddleware)
app.use(routerMiddleware)

//starting the server, so that it can start listening to port 3002
app.listen(PORT, () => {
    console.log(`server is listenning on port ${PORT}`)
})
