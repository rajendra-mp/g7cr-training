import { validate } from "class-validator";
import { Router } from "express";
import { addContactHandler, getAllContactsHandler } from "../controller/contactscontroller";
import { Contact } from "../models/contact";
import { contactValidationHandler } from "../validators/contactvalidator";

const routerMiddleware = Router()

//configuraing endpoints
routerMiddleware.get(
    '/contacts',    
    getAllContactsHandler)
//routerMiddleware.get()
//routerMiddleware.get()
routerMiddleware.post(
    '/contacts',
    contactValidationHandler,
    addContactHandler)
//registering an user
//validating an user
//routerMiddleware.put()
//routerMiddleware.delete()

export default routerMiddleware