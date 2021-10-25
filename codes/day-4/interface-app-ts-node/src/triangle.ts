import { IShape } from "./shape";

export class Triangle implements IShape {
    constructor(public base: number, public height: number) {

    }
    calculateArea(): number {
        return this.base * this.height * 0.5
    }
}