import { ShapeError } from "./business-exception";
import { IShape } from "./shape";

export class Square implements IShape {
    constructor(private side: number) {

    }
    public get Side(): number {
        return this.side
    }
    calculateArea(): number {
        if (this.side === 0)
            throw new ShapeError('error while calculating', "1")

        return this.Side * this.Side
    }

}