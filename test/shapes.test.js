// create quick test for shapes

const { Triangle, Circle, Square } = require("../lib/shapes");

describe("Shapes", () => {
    test("Triangle render", () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />')
    });

    test("Square render", () => {
        const square = new Square();
        square.setColor("blue");
        expect(square.render()).toEqual('<rect x="40" width="220" height="120" fill="blue" />');
    });

    test("Circle render", () => {
        const circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual('circle cx="150" cy="100" r="80" fill="blue" />');
    });
});
