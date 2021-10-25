import { log } from "./sample";

export class ShapeError implements Error {
    name: string;
    message: string;
    stack?: string;
    contextId: string;
    constructor(_message: string, _id: string = null) {
        this.message = _message
        this.name = 'ShapeError'
        this.contextId = _id
        log('', this)
            .then(
                (data) => {
                    console.log(data)
                }
            )

        console.log('thats all')
    }
}