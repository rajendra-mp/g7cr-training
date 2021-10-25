import { IShape } from "./shape";

export class Circle implements IShape {
    constructor(public radius: number) {

    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }
}