import {dayName} from "./dayname.js";
import seasonNames from "./seasonname.js";

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// → Today is Monday

console.log(seasonNames);

