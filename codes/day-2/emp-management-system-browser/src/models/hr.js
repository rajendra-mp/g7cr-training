import { employee } from "./employee"

function hr(name, id, basic, da, hra, gratuity) {
    employee.call(this, name, id, basic, da, hra)
    this.gratuityPay = gratuity
    this.calculateSalary = () => {
        // this.totalSalary = this.basicPay + this.daPay + this.hraPay + this.gratuityPay
        this.__proto__.calculateSalary.apply(this)
        this.totalSalary += this.gratuityPay
    }
}


export default hr
