import { Router } from "express";
import { addContactHandler, getAllContactsHandler } from "../controller/contactscontroller";

const routerMiddleware = Router()

//configuraing endpoints
routerMiddleware.get('/contacts', getAllContactsHandler)
//routerMiddleware.get()
//routerMiddleware.get()
routerMiddleware.post('/contacts', addContactHandler)
//registering an user
//validating an user
//routerMiddleware.put()
//routerMiddleware.delete()

export default routerMiddleware