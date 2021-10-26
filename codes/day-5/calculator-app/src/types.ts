export type writeCallbackFnType = (err: any) => void
export type readCallbackFnType = (err: any, data: any) => void
export type calculationOperationType = (x: number, y: number) => number

export enum OperationType {
    add,
    subtract,
    multiply,
    divide
}