export function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.basicPay = basic
    this.hraPay = hra
    this.daPay = da
    this.calculateSalary = function () {
        return this.basicPay + this.daPay + this.hraPay
    }
}

// module.exports = {
//     employee: employee
// }
