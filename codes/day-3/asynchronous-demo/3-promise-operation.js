//asynchronous NodeJS method (built-in)
//calling the asynchronous function (output will be displayed after every other output)
setTimeout(() => {
    console.log('this is node api')
})

//asynchronous method (promise-based)
function divide(a, b) {
    const promise = new Promise(
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res === Infinity) {
                rejectFn('denominator should not be zero')
            } else {
                resolveFn(res)
            }
        }
    )
    return promise
}
//synchronous method
const add = (a, b) => (a + b)

//calling the asynchronous function (output will be displayed after add result but efore setTimeout() function output)
const divPromise = divide(10, 2)
divPromise
    .then(
        (data) => {
            console.log(data)
        }
    )
    .catch(err => console.log(err))
    .finally(() => { })

//calling the synchronous function (output will be displaye first)
const addRes = add(10, 0)
console.log(addRes)
