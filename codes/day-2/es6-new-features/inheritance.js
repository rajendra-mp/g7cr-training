const person = function (name, id) {
    this.name = name;
    this.id = id;
}
person.prototype.show = function () {
    return this.name + '' + this.id
}

const trainer = function (name, id, subjectToTeach) {
    person.call(this, name, id)
    this.subjectToTeach = subjectToTeach;
    this.show = function () {
        // return this.name + '' + this.id + '' + this.subjectToTeach
        let partialInfo = person.prototype.show.apply(this)
        //let partialInfo = this.__proto__.show.apply(this)
        return partialInfo + '' + this.subjectToTeach
    }
}
//Object.setPrototypeOf(trainer.prototype, person.prototype)

const joyTrainer = new trainer('joyd', 1, 'JS')
const anilTrainer = new trainer('anil', 2, 'C#')
// console.log(joyTrainer.__proto__)
// console.log(person.prototype)
console.log(joyTrainer.show())
console.log(anilTrainer.show())
console.log(anilTrainer.__proto__.constructor)