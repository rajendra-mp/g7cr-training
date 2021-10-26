import { fetchResults, saveResult } from "./dboperations";
import { add, divide, multiply, subtract } from "./operations";
import { OperationType, readCallbackFnType, writeCallbackFnType } from "./types";


// let choice: OperationType;

// switch (choice) {
//     case OperationType.add:

//         break;

//     case OperationType.subtract:

//         break;
//     case OperationType.multiply:
//         break;

//     case OperationType.divide:
//         break;
//     default:
//         break;
// }

const writeCallback: writeCallbackFnType = function (err: any) {
    if (err)
        console.log(err)

    console.log('result written')
}
saveResult(add(12, 3), writeCallback)
saveResult(subtract(12, 3), writeCallback)
saveResult(multiply(12, 3), writeCallback)
saveResult(divide(12, 3), writeCallback)

const readCallback: readCallbackFnType = (err: any, data: any) => {
    if (err)
        console.log(err)

    if (data)
        console.log(data)
}

fetchResults(readCallback)
