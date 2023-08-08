// console.log("hello world");
// const add = require("./add");
// const sum = add(2, 5);
// const sum2 = add(100, 200);
// console.log(sum);
// console.log(sum2);

//////// IFE (imidiate invoke funciton) ///////////
// (function Heros() {
//   const supeHero = "batman";
//   console.log(supeHero);
// })();
// (function Heros() {
//   const supeHero = "superman";
//   console.log(supeHero);
// })();

// require("./batman");
// require("./superman");  each module have its own privat scop
// ( function (){})()
// const student = require("./obj");

// console.log(student.getName());
// student.setName("shamil");
// console.log(student.getName());
// const student2 = require("./obj");
// console.log(student2.getName());

// const { add, sub } = require("./math");
// // const { add, sub } = math;
// console.log(add(2, 3));
// console.log(sub(2, 3));

/////////////// importing json data /////////////
// const data = require("./sample.json");
// console.log(data.place);

///////////// enable watch mode //////////
// node --watch index
/// path module ///
// const path = require("node:path");
// // console.log(path.basename(__dirname));
// // console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.isAbsolute(__filename));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));

//////////// event module ////////////////

const EventHandler = require("node:events");

const emittor = new EventHandler();
emittor.on("youwin", (status) => {
  console.log(`you got it the ${status}`);
});
emittor.on("youwin", (status) => {
  status === "Dilshad" ? console.log("hahhhahaha/.....") : console.log("nop");
});
console.log("newmaaan....");
emittor.emit("youwin", "Dilsdhad");
