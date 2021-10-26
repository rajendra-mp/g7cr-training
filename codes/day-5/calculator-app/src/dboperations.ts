import { appendFile, readFile } from "fs"
import { readCallbackFnType, writeCallbackFnType } from "./types"

export const saveResult = (output: number, callback: writeCallbackFnType) => {
    appendFile('./data/results.txt', `${output.toString()}\r\n`, { encoding: 'utf-8' }, callback)
}

export const fetchResults = (callback: readCallbackFnType) => {
    readFile('./data/results.txt', { encoding: 'utf-8' }, callback)
}