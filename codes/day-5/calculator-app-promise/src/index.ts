import { fetchResults, saveResult } from "./dboperations";
import { add, divide, multiply, subtract } from "./operations";

const addpromise = saveResult(add(12, 3))
const subpromise = saveResult(subtract(12, 3))
const multipromise = saveResult(multiply(12, 3))
const divpromise = saveResult(divide(12, 3))

addpromise
    .then(
        function (result) {
            console.log(result)
            fetchResults()
                .then(
                    function (data) {
                        console.log(data)
                    },
                    function (e) {
                        console.log(e)
                    }
                )
        },
        function (error) {
            console.log(error)
        }
    )



