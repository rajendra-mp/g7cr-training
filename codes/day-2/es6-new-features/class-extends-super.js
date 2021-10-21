class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    show() {
        return this.name + '' + this.id
    }
}
// console.log(Person.prototype.hasOwnProperty('name'))
class Trainer extends Person {
    constructor(name, id, subjectToTeach) {
        super(name, id)
        this.subjectToTeach = subjectToTeach;
    }
    show() {
        return super.show() + '' + this.subjectToTeach
    }
}
const joyTrainer = new Trainer('joyd', 1, 'JS')
const anilTrainer = new Trainer('anil', 2, 'C#')

console.log(joyTrainer.show())
console.log(anilTrainer.show())
console.log(anilTrainer.__proto__.constructor)

const utility = {
    readData: function () {
        console.log('reading data')
    },
    writeData: function () {
        console.log('writing data')
    },
}
// class utility {
//     readData() {
//         console.log('reading data')
//     }
//     writeData() {
//         console.log('writing data')
//     }
// }
class Resource {
    appendData() {
        console.log('resource append')
    }
}
class FileOperation extends Resource {
    constructor() {
        super()
        this.path = "";
    }
    appendData() {
        super.appendData()
        console.log('append')
    }
}
Object.assign(FileOperation.prototype, utility)
//console.log(FileOperation.prototype)

const fileOp = new FileOperation()
fileOp.appendData()
fileOp.readData()
fileOp.writeData()