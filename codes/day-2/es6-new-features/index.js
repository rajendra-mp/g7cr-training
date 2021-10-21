var obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    location: 'Bangalore'
}
// const nameValue = obj.name
// const idValue = obj.id

const { name: nameValue, id: idValue } = obj
console.log(nameValue)
console.log(idValue)

// var copy = {}
// for (const propertyName in obj) {
//     let propertyValue = obj[propertyName]
//     copy[propertyName] = propertyValue
// }
// console.log(copy)
var copy = { ...obj }
console.log(copy)

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
/*
const copyPeople = [...people]
copyPeople.pop()

// console.log(people[0] === copyPeople[0])
console.log(people)
console.log(copyPeople)
*/
const anotherCopy = people
anotherCopy.pop()
console.log(anotherCopy)
console.log(people)

