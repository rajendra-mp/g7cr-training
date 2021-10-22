//asynchronous NodeJS method (built-in)
//calling the asynchronous function (output will be displayed after every other output)
setTimeout(() => {
    console.log('this is node api')
})

//asynchronous method (promise-based, but written using async keyword)
//will still return promise object
async function divide(a, b) {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('denominator should not be zero')
        throw err
    } else {
        return res
    }
}


//synchronous method
const add = (a, b) => (a + b)

//calling the asynchronous function (output will be displayed after add result but efore setTimeout() function output)
const divPromise = divide(10, 2)
// divide(10, 2).then(
//     ()=>{
//         await
//     }
// )

//avoiding then(), catch(), finally() method
//using await to extract the output out of the Promise object
//Note: await keyword should be used in the function declared with async only
const call = async () => {
    divide(18, 3)
        .then(
            async (res) => {
                const output = await divide(10, 0)
                console.log(output)
            },
            (e) => console.log(e)
        )
}
call().then()

//calling the synchronous function (output will be displaye first)
const addRes = add(10, 0)
console.log(addRes)
