const message = 'Hello, Node.js!'
console.log(message);
// Math module
const maths=require('./modules/math');
// String Utils module
const strUtils=require('./modules/stringUtils');
// Math module
console.log("\nInside maths variable : ");
console.log(maths);
console.log("\nSum is " +maths.add(7,7));
console.log("Subtraction is " +maths.subtract(7,7));
console.log("Multiplication is " +maths.multiply(7,7));
console.log("Division is " +maths.divide(7,7));

// String Utils module
console.log("\nInside stringUtils variable : ");
console.log(strUtils);
console.log("Capslock incoming...: " + strUtils.uppercase("hello"));
console.log("Reversing...: " + strUtils.reverse("Hellurei")); 
