// Message
const message = 'Hello, Node.js!'
console.log(message);
// Math module
const maths=require('./modules/math');
// String Utils module
const strUtils=require('./modules/stringUtils');
// Date Utils module
const dateUtils=require('./modules/dateUtils');


// Math module
console.log("\n--- Math ---");
console.log("\nSum is " +maths.add(6,2));
console.log("Subtraction is " +maths.subtract(6,2));
console.log("Multiplication is " +maths.multiply(6,2));
console.log("Division is " +maths.divide(6,2));

// String Utils module
console.log("\n--- String Utils ---");
console.log("\nUppercase: " + strUtils.uppercase("Linux on paras!"));
console.log("Reversed text: " + strUtils.reverse("Linux on paras!")); 

// Date Utils module
console.log("\n--- Date Utils ---");
console.log("\nCurrent date: " +dateUtils.date());
console.log("ISO format: " +dateUtils.format());

// Logataan vielä mitä moduulit palauttavat
console.log("\n\nLOG:\n\nInside dateUtils variable : ");
console.log(dateUtils);
console.log("\nInside stringUtils variable : ");
console.log(strUtils);
console.log("\nInside maths variable : ");
console.log(maths);