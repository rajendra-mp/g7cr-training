//1. object-literal syntax
var joydipPerson = {
    id: 1,
    name: 'joydip',
    salary: 1000,
    print: function () {
        return this.id + '' + this.name + '' + this.salary
    }
}
var result = joydipPerson.print()
console.log(result)

var people = [{
    id: 1,
    name: 'joydip',
    salary: 1000,
    print: function () {
        return this.id + '' + this.name + '' + this.salary
    }
}, {
    id: 1,
    name: 'joydip',
    salary: 1000,
    print: function () {
        return this.id + '' + this.name + '' + this.salary
    }
}]