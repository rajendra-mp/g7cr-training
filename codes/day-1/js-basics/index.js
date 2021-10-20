console.log(x) //undefined/ReferenceTypeError
x = 10
console.log(x) //10
for (var index = 0; index < 2; index++) {
    var x = 20
    console.log(x)  //20 (2)  
}
console.log(x) //20