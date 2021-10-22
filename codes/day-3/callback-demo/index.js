function filterValues(inputArray, loginFnRef) {
    const result = []
    for (let index = 0; index < inputArray.length; index++) {
        const value = inputArray[index];
        let status = loginFnRef(value)
        if (status) {
            result.push(value)
        }
    }
    return result
}

//source of data
const numbers = [1, 2, 3, 4, 5]
//how to filter
// const isEven = function (data) {
//     return data % 2 === 0
// }
// const isEven = (data) => data % 2 === 0
// const isOdd = (data) => data % 2 !== 0

// const evenNumbers = filterValues(numbers, isOdd)
const evenNumbers = filterValues(numbers, (data) => data % 2 === 0)
console.log(evenNumbers)


class Product {
    constructor(name, id, price, description) {
        this.name = name
        this.id = id
        this.price = price
        this.description = description
    }
    toString() {
        return `Name:${this.name}, Price:${this.price}`
    }
}


const products = [
    new Product('dell xps', 3, 10000, 'new laptop from dell'),
    new Product('hp probook', 1, 20000, 'new laptop from hp'),
    new Product('one plus 7', 2, 5000, 'new mobile from one plus')
]

const filteredProducts = filterValues(products, function (p) {
    return p.price > 10000
})
const partialName = 'l'
const filteredProductsByName = filterValues(products, (p) => {
    return p.name.toLocaleLowerCase().indexOf(partialName.toLocaleLowerCase()) !== -1
})
//console.log(filteredProducts)
console.log(filteredProductsByName)
// const str = ''
// str.toLocaleLowerCase

const res1 = products.filter((p) => p.price > 10000)
const res2 = numbers.filter((a) => a % 2 === 0)
console.log(res1)
console.log(res2)
