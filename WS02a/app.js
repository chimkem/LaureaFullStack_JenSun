const message = 'Hello, Node.js!'
console.log(message);

const maths=require('./modules/math');

console.log("\nInside maths variable : ");
console.log(maths);
console.log("\nSum is " +maths.add(7,7));
console.log("Subtraction is " +maths.subtract(7,7));
console.log("Multiplication is " +maths.multiply(7,7));
console.log("Division is " +maths.divide(7,7));

