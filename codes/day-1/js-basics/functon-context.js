var x = 1000
function outer() {
    var a = 10
    console.log(a)
    //console.log(a + b)
    console.log(this.outerData)
    this.outerData = 100
    console.log(this)
    console.log(this.outerData)
    function inner() {
        console.log(this)
        console.log(this.innerData)
        // var y = 200
        // this.innerData = y
        this.innerData = 200
        console.log(this.innerData)
        var b = 20
        console.log(b)
        console.log(a + b + x)
        console.log(this.innerData + this.outerData)
    }
    //return inner
    return 'Hi'
}
var fnRef = outer()

console.log(this)
//fnRef()

function change(choice) {
    var x_ord = 10
    var y_ord = 20
    var fnRef;
    switch (choice) {
        case 1:
            fnRef = function (x, y) {

            }

            break;

        case 2:
            fnRef = function (color) {

            }
            break;

        default:
            break;
    }
    return fnRef
}

var changeFnRef = change(1)
changeFnRef(10, 20)