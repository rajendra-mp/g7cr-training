export function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.basicPay = basic
    this.hraPay = hra
    this.daPay = da
    this.totalSalary = 0
}
employee.prototype.calculateSalary = function () {
    this.totalSalary = this.basicPay + this.daPay + this.hraPay
}
