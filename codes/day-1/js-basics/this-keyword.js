'use strict'
// function simple() {
//     var a = 10
//     console.log(this)
// }
// simple()

//2. constructor function
function person(name, id, salary) {
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.print = function () {
        return this.personName + '' + this.personId + '' + this.personSalary
    }
    // return this
}
var joyPerson = new person('joy', 1, 1000)
console.log(joyPerson.personName)
console.log(joyPerson['personSalary'])
var anujPerson = new person('anuj', 2, 2000)
console.log(anujPerson)

// class Person {
//     constructor(name, id, salary) {
//         this.personName = name
//         this.personId = id
//         this.personSalary = salary

//         // return this
//     }
//     print = function () {
//         return this.personName + '' + this.personId + '' + this.personSalary
//     }
// }