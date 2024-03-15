var literalNotation = [1, 2, 4, 6, 8, 9];
console.log(literalNotation);

var objectNotation = {
  1: "one",
  2: "two",
  4: "four",
  6: "six",
  8: "eight",
  9: "nine",
};
console.log(objectNotation);

var initialize = ["abdullah", "adil", "amna", "ayesha", "abaan"];
console.log(initialize);

var number = [23, 54, 67, 98, 98, 54, 87];
console.log(number);

var boolean = ["true", "false", "true", "true", "false"];
console.log(boolean);

var mixed = [3, 5, "one", "five", 44, 10, "true", "false"];
console.log(mixed);

var qualification = [
  "SSC",
  "HSC",
  "BSC",
  "BS",
  "BCOM",
  "MS",
  "M.phil.,",
  "PHD",
];
document.write(
  qualification[0],
  "<br>",
  qualification[1],
  "<br>",
  qualification[2],
  "<br>",
  qualification[3],
  "<br>",
  qualification[4],
  "<br>",
  qualification[5],
  "<br>",
  qualification[6],
  "<br>",
  qualification[7],
  "<br>"
);

var student = ["michael", "john", "tony"];
var score = [320, 230, 480];
var totalmarks = 500;
var percentage1 = (score[0] * 100) / totalmarks;
document.write(
  `score of ${student[0]} is ${score[0]}. percentage: ${percentage1}% <br>`
);

var percentage2 = (score[1] * 100) / totalmarks;
document.write(
  `score of ${student[1]} is ${score[1]}. percentage: ${percentage2}% <br>`
);

var percentage3 = (score[2] * 100) / totalmarks;
document.write(
  `score of ${student[2]} is ${score[2]}. percentage: ${percentage3}% <br>`
);

var color = ["red", "blue", "yellow", "green", "orange"];
document.write(color);
var beginning = prompt("what color do you want yo add to the beginning?");
color.unshift(beginning);
console.log(color);
document.write("<br>", color);

var end = prompt("what color do you want yo add to the end?");
color.push(end);
console.log(color);
document.write("<br>", color);

color.splice(1, 0, "violet", "olive");
console.log(color);
document.write("<br>", color);

color.shift();
console.log(color);
document.write("<br>", color);

color.pop();
console.log(color);
document.write("<br>", color);
