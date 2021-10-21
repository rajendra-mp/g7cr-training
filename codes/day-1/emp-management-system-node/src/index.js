//manager methods here
const managerExports = require('./operations/employeeManager')
const employees = require('./repository/employees').employees

let firstRes = managerExports.addRecord('joy', 1, 1000, 2000, 3000)
let secondRes = managerExports.addRecord('anil', 1, 1500, 2500, 3500)
let thirdRes = managerExports.addRecord('anil', 2, 1500, 2500, 3500)
console.log(firstRes)
console.log(secondRes)
console.log(thirdRes)

console.log('repo after addition')
console.log(employees)


let updateRes = managerExports.updateRecord({ name: 'joydip', basicPay: 1200, daPay: 2300, hraPay: 3400, id: 1 })
console.log(updateRes)

console.log('repo after update')
console.log(employees)

let deleteRes = managerExports.deleteRecord(12)
let deletedResProper = managerExports.deleteRecord(2)
console.log(deleteRes)
console.log(deletedResProper)

console.log('repo after deletion')
console.log(employees)

let singleRes = managerExports.get(2)
let singleResProper = managerExports.get(1)
console.log(singleRes)
console.log(singleResProper)

console.log('repo after seletion')
console.log(employees)
