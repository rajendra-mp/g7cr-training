import { Router } from "express";
import { addContactHandler, deleteContactHandler, fetchContactsByNameHandler, getAllContactsHandler, getContactByIdHandler, updateContactHandler } from "../controller/contactscontroller";

const routerMiddleware = Router()

//configuraing endpoints

routerMiddleware.get('/contacts', getAllContactsHandler)
routerMiddleware.get('/contact/:id', getContactByIdHandler)
routerMiddleware.get('/searchcontacts', fetchContactsByNameHandler)

routerMiddleware.post('/contacts', addContactHandler)
routerMiddleware.patch('/update/:id', updateContactHandler)

routerMiddleware.delete('/contact/delete/:id', deleteContactHandler)

export default routerMiddleware