import { IShape } from "./shape";

export class Square implements IShape {
    constructor(private side: number) {

    }
    public get Side(): number {
        return this.side
    }
    calculateArea(): number {
        if (this.side === 0)
            throw new Error('error while calculating')

        return this.Side * this.Side
    }

}