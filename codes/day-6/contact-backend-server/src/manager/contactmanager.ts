import { readRecords, saveRecords } from "../dao/contactsDao"
import { Contact } from "../models/contact"

export const fetchContacts = async (): Promise<Contact[]> => {
    console.log('fetch called')
    const all = await readRecords()
    if (all.length === 0) {
        return Promise.reject('no records found')
    } else {
        return all
    }
}

export const addContact = async (contactData: Contact): Promise<string> => {
    const all = await readRecords()
    if (all.find(c => c.id === contactData.id)) {
        return 'record exists'
    } else {
        all.push(contactData)
        return saveRecords(all)
    }
}