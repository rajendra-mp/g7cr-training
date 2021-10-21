var obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    location: 'Bangalore'
}

//this how you most probably will copy the propertie and corresponding values from one object to another
// var copy = {}
// for (const propertyName in obj) {
//     let propertyValue = obj[propertyName]
//     copy[propertyName] = propertyValue
// }
// console.log(copy)

//this what ES6 offers: spread operator
//spreading object
var copy = { ...obj }
console.log(copy)

//spreading array
//1. array of value types
const arr1 = [1, 2, 3, 4]
const arr2 = [10, 20, 30, 40]
const copyArr = [...arr1, 100, 200, ...arr2]
console.log(copyArr)

const people = [
    {
        name: 'anil',
        id: 1
    },
    {
        name: 'sunil',
        id: 2
    }
]

//spreading array of references to other objects
const copyPeople = [...people]
console.log(people[0] === copyPeople[0])
//copyPeople.pop()
// console.log(people)
// console.log(copyPeople)

//this copying the reference of the array into another variable
const anotherCopy = people
anotherCopy.pop()
console.log(anotherCopy)
console.log(people)
