import { validate, ValidatorConstraint } from "class-validator";
import { Router } from "express";
import { body, checkSchema, validationResult } from "express-validator";
import { addContactHandler, getAllContactsHandler } from "../controller/contactscontroller";
import { Contact } from "../models/contact";
import { contactValidationHandler } from "../validators/contactvalidator";

const routerMiddleware = Router()

//configuraing endpoints
routerMiddleware.get(
    '/contacts',
    getAllContactsHandler)
routerMiddleware.get(
    '/contacts/:x',
    checkSchema({
        x: {
            in: ['params'],
            isInt: true,
            errorMessage: 'id should be number'
        }
    }),
    (req, res) => {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            res.statusCode = 500
            res.send(result.array())
        } else {
            console.log(req.params)
            res.send(req.params.x)
        }
    })
routerMiddleware.get('/contact', (req, res) => {
    console.log(req.query)
    res.send(req.query.id)
})
routerMiddleware.post(
    '/contacts',
    addContactHandler)
//registering an user
//validating an user
//routerMiddleware.put()
//routerMiddleware.delete()

export default routerMiddleware