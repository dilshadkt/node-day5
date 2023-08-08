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

// const EventHandler = require("node:events");

// const emittor = new EventHandler();
// emittor.on("youwin", (status) => {
//   console.log(`you got it the ${status}`);
// });
// emittor.on("youwin", (status) => {
//   status === "Dilshad" ? console.log("hahhhahaha/.....") : console.log("nop");
// });
// console.log("newmaaan....");
// emittor.emit("youwin", "Dilsdhad");

///////////////  stream and buffer  //////////////////

// const buffer = new Buffer.from("Dilshad");

// console.log(buffer.toString());
// console.log(buffer.toJSON());

///fs module///////

// const fs = require("node:fs");

// fs.writeFileSync("./greet.txt", "Dilshad");
// fs.writeFile("./greet2.txt", "Dilshad", (error, data) => {
//   if (error) {
//     console.log("error occured");
//   } else {
//     console.log("filte writed");
//   }
// });

// const data = fs.readFileSync("./greet.txt", "utf-8");
// // console.log(data);
// const data2 = fs.readFile("./greet2.txt", "utf-8", (error, data) => {
//   if (data) {
//     console.log(data);
//   }
// });
// const fs = require("node:fs/promises");

// fs.readFile("./greet.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

////////////// stream  ///////////////

// const fs = require("node:fs");
// const readableStream = fs.createReadStream("./greet.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// const writableStream = fs.createWriteStream("./dilshad.txt");

// // readableStream.on("data", (chunk) => {
// //   console.log(chunk);
// //   writableStream.write(chunk);
// // });

// readableStream.pipe(writableStream);

/////////////glib & zlib ////////////

const fs = require("node:fs");
const zlib = require("node:zlib");

const gzib = zlib.createGzip();
const readableStream = fs.createReadStream("./greet.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});
readableStream.pipe(gzib).pipe(fs.WriteStream("./niyas.txt.gz"));
const writableStream = fs.createWriteStream("./niyas.txt");
readableStream.pipe(writableStream);
