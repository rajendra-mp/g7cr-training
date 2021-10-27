import { readFile, writeFile } from "fs"
const FILE_PATH = process.env.FILE_PATH

export const readRecords = () => {
    const p = new Promise<any>(
        (resolveFn, rejectFn) => {
            readFile(FILE_PATH, (err, data) => {
                if (err) {
                    console.log(err)
                    rejectFn('could not get records...try later')
                }

                if (data) {
                    const all = JSON.parse(data.toString())
                    console.log(all)
                    resolveFn(all)
                }
            })
        }
    )
    return p
}

export const saveRecords = (contacts) => {
    const p = new Promise<string>(
        (resolveFn, rejectFn) => {
            writeFile(
                FILE_PATH,
                JSON.stringify(contacts),
                (err) => {
                    if (err) {
                        rejectFn('could not write..')

                    } else {
                        resolveFn('success')
                    }
                })
        }
    )
    return p
}