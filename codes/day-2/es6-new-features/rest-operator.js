const add = (a, b) => (a + b)
const addMany = (a, b, c) => (a + b + c)
const subtract = (a, b) => (a - b)

const call = (fn, ...args) => {
    fn(args[0], args[1])
}
call(add, 10, 20)
call(addMany, 10, 20, 30)

const split = (str, ...separators) => {

}
const sentence = "I am a JS consultant. Currently training for G7CR, at MG road"
split(sentence, ' ', ',', '.')
