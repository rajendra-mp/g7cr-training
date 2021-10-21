// var obj = {
//     name: 'joydip',
//     id: 1
// }

const person = function (name, id) {
    this.name = name;
    this.id = id;
}
person.prototype.print = function () {
    return this.name + '' + this.id
}
var obj = new person('joydip', 1)

console.log(obj.hasOwnProperty('print'))
console.log(person.prototype.hasOwnProperty('print'))
console.log(Object.prototype.hasOwnProperty('print'))
const res = obj.print()
console.log(res)