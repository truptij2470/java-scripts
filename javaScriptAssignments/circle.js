exports.calcArea = radius => Math.PI * Math.pow(radius, 2);
exports.calcCircumference = radius => 2 * Math.PI * radius;
exports.calcDiameter = radius => 2 * radius;

// rectangle
exports.calcArea = (length, breadth) => length * breadth;
exports.calcPerimeter = (length, breadth) => 2 * (length + breadth);

// triangle
exports.isEquilateral = (side1, side2, side3) => side1 === side2 && side2 === side3;
exports.calcPerimeter = (side1, side2, side3) => side1 + side2 + side3;
