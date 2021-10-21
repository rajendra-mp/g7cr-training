import { employee } from './employee'
function developer(name, id, basic, da, hra, incentive) {
    employee.call(this, name, id, basic, da, hra)

    this.incentivePay = incentive

    this.calculateSalary = () => {
        // employee.prototype.calculateSalary.apply(this)
        // this.totalSalary += this.incentivePay
        this.__proto__.calculateSalary.apply(this)
        this.totalSalary += this.incentivePay
    }
}

//new developer()

export default developer
