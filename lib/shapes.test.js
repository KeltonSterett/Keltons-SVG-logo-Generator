const {Square,Triangle, Circle} = require('./shapes.js');

// test for a square with a red background
describe("Square test", () => {
    test("test for a square with a red background", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="red"/>'
      );
    });
  });

//   test for a triangle with a blue background
describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150,40 73,200 227,200" fill="blue"/>'
      );
    });
  });

//   test for a circle with a green background
describe("Circle test", () => {
    test("test for a circle with a green background", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="150" r="80" fill="green"/>'
      );
    });
  }
);