//import repository, employee here
// const employeesExports = require('../repository/employees')
// const employeeExports = require('../models/employee')

// const employees = employeesExports.employees
// const employee = employeeExports.employee


function exists(empId) {
    for (let index = 0; index < employees.length; index++) {
        const emp = employees[index];
        if (emp.id === empId) {
            return true
        }
    }
    return false
}

export function addRecord(name, id, basic, da, hra) {
    if (!exists(id)) {
        let newEmp = new employee(name, id, basic, da, hra)
        employees.push(newEmp)
        return newEmp
    }
    return undefined
}

export function deleteRecord(empId) {
    let deleted;
    if (exists(empId)) {
        let indexPos = -1
        for (let index = 0; index < employees.length; index++) {
            const emp = employees[index];
            if (empId === emp.id) {
                indexPos = index
            }
        }
        let all = employees.splice(indexPos, 1)
        deleted = all[0]
    }
    return deleted
}

export function updateRecord(empObj) {
    let found = undefined
    if (exists(empObj.id)) {
        for (let index = 0; index < employees.length; index++) {
            const emp = employees[index];
            if (empObj.id === emp.id) {
                found = emp
                break;
            }
        }
        found.name = empObj.name
        found.basicPay = empObj.basicPay
        found.daPay = empObj.daPay;
        found.hraPay = empObj.hraPay
        return empObj
    }
    return found
}

export function getAll() {
    return employees;
}

export function get(empId) {
    let found;
    if (exists) {
        for (let index = 0; index < employees.length; index++) {
            const emp = employees[index];
            if (empId === emp.id) {
                found = emp
            }
        }
    }
    return found
}

// module.exports = {
//     addRecord,
//     deleteRecord,
//     updateRecord,
//     get,
//     getAll
// }