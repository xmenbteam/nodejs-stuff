import * as stream from "stream";
import * as assert from "node:assert/strict";

// function* gen() {
//   yield "One line\n";
//   yield "Another line\n";
// }

// const readableStream = stream.Readable.from(gen(), { encoding: "utf8" });

// try {
//   assert.equal(
//     await readableToString(readableStream),
//     "One line\nAnother line\n"
//   );
//   console.log("is euqal!");
// } catch (err) {
//   console.error(err);
// }

// function* foo(index) {
//   while (index < 2) {
//     yield index;
//     index++;
//   }
// }

// const iterator = foo(0);

// console.log(iterator.next());
// // expected output: 0

// console.log(iterator.next());
// // expected output: 1

// function* serveMeAMeal(i) {
//   //   if (yield) console.log("HERE", yield);

//   const string = "Had enough yet?!";
//   yield i;
//   yield i + 10;
//   yield string;
//   yield i ** 10;
//   yield string.toUpperCase();
//   return "Go away youre bothering me";
// }

// const served = serveMeAMeal(3);
// // const moreServed = serveMeAMeal(7);

// console.log(served.next());
// // console.log(moreServed.next());
// console.log(served.next());
// const nexter = served.next();
// nexter.done = true;
// // console.log(moreServed.next());
// console.log(served.next());
// // console.log(moreServed.next());
// console.log(served.next());
// // console.log(moreServed.next());
// console.log(served.next());
// // console.log(moreServed.next());
// // console.log(served.next());
// // console.log(moreServed.next());
// // console.log(served.next());
// // console.log(moreServed.next());
