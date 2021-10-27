import { expect } from "chai";
import { it } from "mocha"
import { Calculation } from "../src"

describe('testing calculation', () => {

    let calcObj: Calculation;
    before(() => {
        console.log('calculation created')
        calcObj = new Calculation()
    })

    after(() => {
        console.log('calculation nullified')
        calcObj = null
    })

    describe('testing add', () => {

        it('add:positive', () => {
            expect(calcObj.add(10, 20)).to.equal(30)
        })

    })

    describe('testing divide', () => {

        it('divide:positive', () => {
            expect(calcObj.divide(12, 3)).to.equal(4)
        })
    })
})