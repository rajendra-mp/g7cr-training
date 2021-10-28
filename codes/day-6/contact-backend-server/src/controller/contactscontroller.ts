import { addContact, fetchContacts } from "../manager/contactmanager"

export const getAllContactsHandler = (req, res) => {
    console.log('request received')
    fetchContacts()
        .then(
            (successData) => {
                res.statusCode = 200
                res.send(successData)
            },
            (failureReason) => {
                res.statusCode = 500
                res.send(failureReason)
            }
        )
}

export const addContactHandler = (req, res) => {
    const contactData = req.body
    addContact(contactData)
        .then(
            (successMessage) => {
                res.statusCode = 201
                res.send(successMessage)
            },
            (reason) => {
                res.statusCode = 500
                res.send(reason)
            }
        )
}