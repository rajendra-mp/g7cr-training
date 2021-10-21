'use strict'
// function outer() {
//     this.outerData = 10
//     const ref = this
//     const inner = function () {
//         this.innerData = 20
//         console.log(ref.outerData + this.innerData)
//     }
//     inner()
// }
// outer()

// function outer() {
//     this.outerData = 10   
//     let inner = function () {
//         this.innerData = 20
//         console.log(this.outerData + this.innerData)
//     }
//     inner = inner.bind(this)
//     inner()
// }
// outer()

function outer() {
    this.outerData = 10
    let inner = () => {
        this.innerData = 20
        console.log(this.outerData + this.innerData)
    }
    inner()
}
outer()
function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.basicPay = basic
    this.hraPay = hra
    this.daPay = da
    this.totalSalary = 0
    this.calculateSalary = () => {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay
    }
}

var obj = {
    id: 1,
    name: 'sunil',
    print: () => {
        console.log(this)
        console.log(this.name)
    }
}
obj.print()
let fnRef = obj.print.bind(obj);
fnRef()


// function add(a, b) {
//     console.log(a + b)
// }
const add = (a, b) => {
    return (a + b)
}


