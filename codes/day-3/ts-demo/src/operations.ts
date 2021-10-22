import { DBType, dbType, operationType } from "./types"


export function call(fnRef: operationType, a, b) {
    console.log(fnRef(a, b))
}

export function add(a: number, b: number): number {
    return (a + b)
}

export function addMany(a: number, b: number, c: number): number {
    return (a + b + c)
}

export function chooseDb(db: dbType) {
    console.log(db)
}

export function chooseAppDb(db: DBType) {
    console.log(db)
}