const add = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}


const call = function () {
    console.log(10)
}

module.exports = {
    utilities: {
        add,
        subtract
    },
    others: {
        call
    }
}