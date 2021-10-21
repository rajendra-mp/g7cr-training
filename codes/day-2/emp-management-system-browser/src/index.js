//manager methods here
/*
import { addRecord, deleteRecord, updateRecord, get, getAll } from './operations/employeeManager'
import { employees } from "./repository/employees";


let firstRes = addRecord('joy', 1, 1000, 2000, 3000)
let secondRes = addRecord('anil', 1, 1500, 2500, 3500)
let thirdRes = addRecord('anil', 2, 1500, 2500, 3500)
console.log(firstRes)
console.log(secondRes)
console.log(thirdRes)

console.log('repo after addition')
// console.log(employees)

const records = getAll()
for (let index = 0; index < records.length; index++) {
    const emp = records[index];
    calculate(emp.calculateSalary)
    // let fnRef = emp.calculateSalary
    // fnRef = fnRef.bind(emp)
    // calculate(fnRef)
    console.log(emp)
}

function calculate(empFnRef) {
    empFnRef()
}


/*
let updateRes = updateRecord({ name: 'joydip', basicPay: 1200, daPay: 2300, hraPay: 3400, id: 1 })
console.log(updateRes)

console.log('repo after update')
console.log(employees)

let deleteRes = deleteRecord(12)
let deletedResProper = deleteRecord(2)
console.log(deleteRes)
console.log(deletedResProper)

console.log('repo after deletion')
console.log(employees)

let singleRes = get(2)
let singleResProper = get(1)
console.log(singleRes)
console.log(singleResProper)

console.log('repo after seletion')
console.log(employees)
*/

import developer from "./models/developer";
import hr from "./models/hr";
import { employee } from './models/employee'

//debugger
Object.setPrototypeOf(developer.prototype, employee.prototype)
Object.setPrototypeOf(hr.prototype, employee.prototype)
const hrObj = new hr('abc', 1, 1000, 2000, 3000, 4000)
hrObj.calculateSalary()
console.log(hrObj.totalSalary)