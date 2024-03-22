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

var scoresofstudent = [320, 230, 480, 120];
document.write("<br> scoreofstudent" + scoresofstudent + "<br>");
scoresofstudent.sort();
document.write("ascendingorder" + scoresofstudent + "<br>");

var citieslist = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
document.write(" cities list<br>" + citieslist + "<br>");
var selectedcitieslist = ["islamabad", "quetta"];
document.write("selectedcitieslist<br>" + selectedcitieslist + "<br>");

var cat = ["this ", "is", "my", "cat"];
document.write(cat[0], cat[1], cat[2], cat[3]);

var fifo = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h3>Devices FIFO</h3>");
document.write(fifo, "<br>");

document.write("OUT: <br>");
var fifoShift = fifo.shift();
document.write(fifoShift, "<br>");

document.write("OUT: <br>");
var fifoShift = fifo.shift();
document.write(fifoShift, "<br>");

document.write("OUT: <br>");
var fifoShift = fifo.shift();
document.write(fifoShift, "<br>");

document.write("OUT: <br>");
var fifoShift = fifo.shift();
document.write(fifoShift, "<br>");

var lifo = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h3>Devices LIFO</h3>");
document.write(lifo, "<br>");

document.write("OUT: <br>");
var lifopop = lifo.pop();
document.write(lifopop, "<br>");

document.write("OUT: <br>");
var lifopop = lifo.pop();
document.write(lifopop, "<br>");

document.write("OUT: <br>");
var lifoPop = lifo.pop();
document.write(lifoPop, "<br>");

document.write("OUT: <br>");
var lifoPop = lifo.pop();
document.write(lifoPop, "<br>");

var mobilephone = ["apple", "samsung", "motorola", "nokia", "sony&haier"];
document.write("<h3>mobilephone</h3>");
document.write(
  mobilephone[0],
  "<br>",
  mobilephone[1],
  "<br>",
  mobilephone[2],
  "<br>",
  mobilephone[3],
  "<br>",
  mobilephone[4]
);
