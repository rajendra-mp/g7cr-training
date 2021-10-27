import { DIVIDE_BY_ZERO_ERROR_MESSAGE } from "./constants/appconstants"

// export class DivideError implements Error{
//     name: string
//     message: string
//     stack?: string

// }
export class Calculation {
    divide(a: number, b: number) {
        if (b === 0)
            throw new Error(DIVIDE_BY_ZERO_ERROR_MESSAGE)

        return a / b
    }
    add(a: number, b: number) {
        //this.sayHello()
        return (a + b)
    }
    sayHello(){

    }
}
// const divide = (a: number, b: number) => {
//     if (b === 0)
//         throw new Error(DIVIDE_BY_ZERO_ERROR_MESSAGE)

//     return a / b
// }
