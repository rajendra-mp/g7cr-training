import { ResponseGenerator } from "../models/responsegenerator"

export const createResponse = (code: number, data?: any, err?: string): ResponseGenerator => {
    return {
        code: code,
        data: data,
        errormessage: err
    }
}