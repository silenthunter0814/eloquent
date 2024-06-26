import {dayName} from "./dayname.js";
import seasonNames from "./seasonname.js";
import {parse} from "ini";

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// → Today is Monday

console.log(seasonNames);

console.log(parse("x = 10\ny = 20"));
// → {x: "10", y: "20"}
