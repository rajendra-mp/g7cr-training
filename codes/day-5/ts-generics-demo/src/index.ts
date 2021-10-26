class Collection<T> {
    private values: T[];
    constructor() {
        this.values = new Array()
    }
    add(newValue: T): void {
        this.values.push(newValue)
    }
    removeFrom(index: number): T {
        return undefined
    }
    get(): T[] {
        return this.values
    }
}

const strings = new Collection<string>()
strings.add('AHSAXNASBX')
strings.add('axnabx')

const numbers = new Collection<number>()


function add<TInput1, TInput2, TResult>(a: TInput1, b: TInput2): TResult {
    return undefined
}
add<number, number, string>(10, 20)

interface Operations<T> {
    addRecord(newRecord: T): boolean;
    fetchAll(): T[];
}
interface Employee {
    name: string;
    id: number;
    salary: number;
}
class EmployeeManager implements Operations<Employee>{
    addRecord(newRecord: Employee): boolean {
        throw new Error("Method not implemented.");
    }
    fetchAll(): Employee[] {
        throw new Error("Method not implemented.");
    }

}
interface Product {
    name: string;
    id: number;
    price: number;
}

class ProductManager implements Operations<Product>{
    addRecord(newRecord: Product): boolean {
        throw new Error("Method not implemented.");
    }
    fetchAll(): Product[] {
        throw new Error("Method not implemented.");
    }
}

type stateType = 'fulfilled' | 'rejected' | 'pending'
class MyPromise<T>{
    private state: stateType;
    private result: T;
    constructor(callback: (resolve: any, reject: any) => void) {
        this.state = 'pending'
        this.result = undefined
        callback(Promise.resolve, Promise.reject)
    }
}

function filterValues<T>(arr: T[], logicFnRef: (arg: T) => boolean): T[] {
    //const result = new Array<T>()
    const result: T[] = []
    for (let index = 0; index < arr.length; index++) {
        const value = arr[index];
        if (logicFnRef(value))
            result.push(value)
    }
    return result
}
const numberValues = [1, 2, 3, 4, 5]
filterValues(numberValues, function (num: number) {
    return num % 2 === 0
})

const names = ['anil', 'sunil', 'mahesh']
filterValues(names, function (name: string) {
    return true
})