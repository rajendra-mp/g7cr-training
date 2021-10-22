const add = (a, b) => (a + b)
const sub = (a, b) => (a - b)
setTimeout(
    () => {
        console.log('timeout function')
    }
)
const addRes = add(10,20)
console.log(addRes)

const subRes = sub(10,5)
console.log(subRes)