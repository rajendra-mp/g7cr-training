import { ShapeError } from "./business-exception";
import { Factory } from "./factory";
import { IShape } from "./shape";

//dependent (on shape objects)
export class ShapeManager {
    shapeObjRef: IShape;
    choice: number;
    constructor(_choice: number, ...args: number[]) {
        this.choice = _choice
        //dependency injection
        try {
            this.shapeObjRef = new Factory().create(this.choice, ...args)
        } catch (error) {
            throw error
        }

    }
    printArea() {
        let area: number;
        try {
            area = this.shapeObjRef.calculateArea()
            console.log(area)
        } catch (error) {
            let e = error as ShapeError
            console.log('in manager', e.message)
            throw e
        }
    }
}