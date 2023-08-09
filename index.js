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

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzib = zlib.createGzip();
// const readableStream = fs.createReadStream("./greet.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });
// readableStream.pipe(gzib).pipe(fs.WriteStream("./niyas.txt.gz"));
// const writableStream = fs.createWriteStream("./niyas.txt");
// readableStream.pipe(writableStream);

///////////////// http module ////////
// const http = require("node:http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end("Dilshad");
// });
// server.listen(8080, () => {
//   console.log("server is running..........");
// });

////////passing json data //////////////

// const http = require("node:http");
// const server = http.createServer((req, res) => {
//   const me = { name: "Dilshad", age: 20 };
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(me));
// });
// server.listen(8080, () => {
//   console.log("setver is running.......");
// });

//////////////html routing ///////////////

// const http = require("node:http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/about") {
//     res.writeHead(200), { "Content-Type": "text/html" };
//     res.end("<h1>This is about</h1>");
//   } else {
//     res.writeHead(404);
//     res.end("page is not found");
//   }
// });
// server.listen(8080, () => {
//   console.log("sever is running.........");
// });

/////// crypto ////////
// const crypto = require("node:crypto");
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");

// console.log("hash:", Date.now() - start);

/////////// event loop ///////////////////////
// console.log("first");
// process.nextTick(() => console.log("this is next 1"));
// console.log("second");
// process.nextTick(() => console.log("this is next tick 2"));
// console.log("three");

// Promise.resolve().then(() => {
//   console.log("promise");
// });
// process.nextTick(() => console.log("nxt"));
// const fs = require("node:fs");
// fs.readFile(__filename, () => {
//   console.log("read file");
// });

// process.nextTick(() => console.log("next"));
// Promise.resolve().then(() => console.log("promise"));
// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => {
//   console.log("timeout");
// });
// for (let i = 0; i < 20000000; i++) {}

const uppercase = require("./upperCase");
uppercase("dilsmoanddgdg");
