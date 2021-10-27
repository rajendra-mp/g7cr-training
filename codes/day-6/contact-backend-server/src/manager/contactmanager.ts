import { readRecords, saveRecords } from "../dao/contactsDao"

export const fetchContacts = async () => {
    console.log('fetch called')
    const all = await readRecords()
    if (all.length === 0) {    
        return Promise.reject('no records found')
    } else {
        return Promise.resolve(all)
    }
}
export const addContact = async (contactData: any) => {
    const all = await readRecords()
    if (all.find(c => c.id === contactData.id)) {
        return Promise.reject('record exists')
    } else {
        all.push(contactData)
        return saveRecords(all)
    }
}