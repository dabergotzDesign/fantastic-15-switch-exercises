// 1. Color Analyzer
// Create a algorithm that takes a string in its parameters. Console log a different statement for each color (red, blue, green, yellow).
//     Example: analyzeColor("Red") -> "Red is a primary color".
let analyseColor = "red";
switch (analyseColor) {
  case "red":
    analyseColor = `${analyseColor} is a primary color`;
    break;
  case "blue":
    analyseColor = `${analyseColor} is a primary color`;
    break;
  case "green":
    analyseColor = `${analyseColor} is a secondary color`;
    break;
  case "yellow":
    analyseColor = `${analyseColor} is a primary color`;
    break;
  default:
    analyseColor = `define color`;
}
console.log(analyseColor);

// 2. Grading
// Create a function that takes a grade in its parameters. Console log comments depending on the grade.
//     Example: grade("A") -> "Good job!", grade("F") -> "Failed"
let grades = "A";
switch (grades) {
  case "A":
    grades = `you got an ${grades}. Good Job!`;
    break;

  case "B":
    grades = `you got a ${grades}. Good.`;
    break;

  case "C":
    grades = `you got a ${grades}. Fine.`;
    break;

  case "D":
    grades = `you got a ${grades}. Hmm.`;
    break;

  case "F":
    grades = `you got a ${grades}. Failed.`;
    break;
}
console.log(grades);

// 3. What month is it?
// Create a function using the new Date().getMonth() method and switch case in order to return the month of the year. Return "It's the month of May!"
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
currMonth = new Date().getMonth();
let _month = currMonth;
switch (_month) {
  case currMonth:
    _month = `It's the month of ${months[currMonth]}`;
    break;

  default:
    _month = "what month is right now?";
    break;
}
console.log(_month);

// 4. Fruits
// Create a function that takes a string in its parameters. Console log a different statement for each fruit (e.g. banana, orange, strawberry, apple).
//     Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!"
let fruits = "banana";
switch (fruits) {
  case "banana":
    fruits = `Minions eat Bananas, though you should too`;
    break;

  case "orange":
    fruits = `Great choice! An Orange is full of vitamin C`;
    break;

  case "strawberry":
    fruits = `( ͡° ͜ʖ ͡°)`;
    break;

  case "apple":
    fruits = `unlike white apples, these one are healthy`;
    break;

  default:
    fruits = "not a fruit";
}
console.log(fruits);
