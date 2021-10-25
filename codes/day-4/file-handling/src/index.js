const fs = require('fs')
fs.readFile('data.json', (err, data) => {
    if (err)
        console.log(err.message, err.stack)

    if (data) {
        console.log(JSON.parse(data))
    }
})

fs.writeFile(
    'data.json',
    JSON.stringify({ name: 'joy', id: 1 }),
    (err) => {
        if (err)
            console.log(err.message, err.stack)

        console.log('done')
    })