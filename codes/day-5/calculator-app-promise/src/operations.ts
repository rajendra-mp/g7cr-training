import { calculationOperationType } from "./types"

export const add: calculationOperationType = (a: number, b: number) => a + b
export const subtract: calculationOperationType = (a: number, b: number) => a - b
export const multiply: calculationOperationType = (a: number, b: number) => a * b
export const divide: calculationOperationType = (a: number, b: number) => a / b