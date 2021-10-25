import { Circle } from "./circle";
import { IShape } from "./shape";
import { Triangle } from "./triangle";

const circleObj = new Circle(12)
const traingleObj = new Triangle(12, 3)

// const circleArea = circleObj.calculateCircleArea()
// const triangleArea = traingleObj.calculateTriangleArea()

// console.log(`Area of circle is ${circleArea}`)
// console.log(`Area of triangle is ${triangleArea}`)

function printArea(shapeObjRef: IShape) {
    // if (shapeObjRef instanceof Circle) {
    //     const c = shapeObjRef as Circle
    //     const circleArea = c.calculateCircleArea()
    //     console.log(`Area of circle is ${circleArea}`)
    // }
    // if (shapeObjRef instanceof Triangle) {
    //     const t = shapeObjRef as Triangle
    //     const triangleArea = t.calculateTriangleArea()
    //     console.log(`Area of triangle is ${triangleArea}`)
    // }
    const area = shapeObjRef.calculateArea()
    console.log(area)
}

printArea(circleObj)
printArea(traingleObj)