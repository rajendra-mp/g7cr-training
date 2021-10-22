//callback version: this is not asynchronous
function divide(a, b, callback) {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('denominator should not be zero')
        callback(err, undefined)
    } else {
        // return res
        callback(undefined, res)
    }
}
function getResultOrError(err, data) {
    if (err) {
        console.log(err)
    }
    if (data) {
        console.log(data)
    }
}
divide(10, 2, getResultOrError)