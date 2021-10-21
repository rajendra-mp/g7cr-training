var obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    location: 'Bangalore'
}
// const nameValue = obj.name
// const idValue = obj.id

const { name: nameValue, id: idValue } = obj
console.log(nameValue)
console.log(idValue)