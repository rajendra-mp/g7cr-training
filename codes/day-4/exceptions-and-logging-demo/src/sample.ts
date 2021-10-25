import { ShapeError } from "./business-exception";
import { writeFile } from 'fs'

export async function log(filePath: string, error: ShapeError) {
    // setTimeout(() => {
    writeFile('data.txt', error.message, (err) => {
        if (err)
            console.log(err)

        console.log('done')
    })
    // }, 2000)
    return 20
}