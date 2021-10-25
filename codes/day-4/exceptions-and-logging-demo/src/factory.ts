import { Circle } from "./circle";
import { IShape } from "./shape";
import { Square } from "./square";
import { Triangle } from "./triangle";

//IOC container
export class Factory {
    create(choice: number, ...args: number[]): IShape {
        //dependency factor
        let shapeObjRef: IShape;
        switch (choice) {
            case 1:
                shapeObjRef = new Circle(args[0])
                break;

            case 2:
                shapeObjRef = new Triangle(args[0], args[1])
                break;

            case 3:
                shapeObjRef = new Square(args[0])
                break;

            default:
                break;
        }
        return shapeObjRef
    }
}