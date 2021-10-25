export interface IEmployee {
    name: string;
    id: number;
    basicPay: number;
    daPay: number;
    hraPay: number;
    totalSalary: number;
    calculateSalary(): void;
}

export class Employee implements IEmployee {
    name: string;
    id: number;
    basicPay: number;
    daPay: number;
    hraPay: number;
    totalSalary: number;
    constructor(_name: string, _id: number, _basic: number, _da: number, _hra: number) {
        this.name = _name;
        this.id = _id;
        this.basicPay = _basic;
        this.daPay = _da;
        this.hraPay = _hra
        this.totalSalary = 0
    }
    calculateSalary(): void {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay
    }
}

export class Developer extends Employee {
    constructor(_name: string, _id: number, _basic: number, _da: number, _hra: number, public incentivePay: number) {
        super(_name, _id, _basic, _da, _hra)
    }
    calculateSalary(): void {
        super.calculateSalary()
        this.totalSalary += this.incentivePay
    }
}