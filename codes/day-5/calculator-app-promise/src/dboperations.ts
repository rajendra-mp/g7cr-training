import { appendFile, readFile } from "fs"

export const saveResult = (output: number) => {
    const p = new Promise(
        //Promise lib passes two callback functions as arguments to this executor function
        //one (1st) to update the promise into 'fulfilled' state
        //the other one (2nd) to update the promise into 'rejected' state
        function (resolveFn, rejectFnRef) {
            appendFile(
                './data/results.txt',
                `${output.toString()}\r\n`,
                { encoding: 'utf-8' },
                (err) => {
                    if (err) {
                        rejectFnRef(err)
                    }
                    resolveFn('written')
                }
            )
        }
    )
    return p
}

export const fetchResults = (): Promise<string> => {
    // const p = new Promise(
    //     function (resolveFn, rejectFn) {
    //         readFile('./data/results.txt', { encoding: 'utf-8' }, (err, data) => {
    //             if (err) {
    //                 rejectFn(err.message)
    //             }

    //             if (data) {
    //                 resolveFn(data.toString())
    //             }
    //         })
    //     }
    // )
    const p = new Promise<string>(
        function (resolveFn, rejectFn) {
            readFile(
                './data/results.txt',
                { encoding: 'utf-8' },
                (err, data) => {
                    if (err)
                        rejectFn(err)

                    if (data)
                        resolveFn(data.toString())
                })

        }
    )
    return p
}