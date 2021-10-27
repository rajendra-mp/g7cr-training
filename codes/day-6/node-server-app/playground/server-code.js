const { createServer } = require('http')

const server = createServer(
    (req, res) => {
        console.log('request arrived')
        console.log(req)
        // res.setHeader('Content-type', 'application/json')
        // res.end(JSON.stringify({ name: 'anil' }))
        res.setHeader('Content-type', 'text/html')
        res.end(`<div>Hello</div>`)
    }
)

server.listen(3000, () => {
    console.log('server listening to port 3000')
})