import { validate } from "class-validator";
import { checkSchema, validationResult } from "express-validator";
export const contactValidationHandler = (req, res) => {
    // validate(<Contact>req.body, {
    //     whitelist: true
    // })
    return checkSchema({
        id: {
            in: ['params', 'body', 'query'],
            isInt: true,
            errorMessage: 'id should be a number'
        },
        name: {
            in: ['params', 'body', 'query'],
            isString: true,
            isLength: {
                options: {
                    min: 1
                }
            },
            errorMessage: 'name should be string'
        },
        email: {
            in: ['params', 'body', 'query'],
            isEmail: true,
            errorMessage: 'should be in email format'
        },
        mobile: {
            in: ['params', 'body', 'query'],
            isMobilePhone: {
                options: "en-IN"
            },
            errorMessage: 'should be a mobile number'
        },
        location: {
            in: ['params', 'body', 'query'],
            isString: true,
            errorMessage: 'should be string'
        },
        imagePath: {
            in: ['params', 'body', 'query'],
            isString: true,
            errorMessage: 'should be string'
        }
    })
}