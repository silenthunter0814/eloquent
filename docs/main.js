import {dayName} from "../docs/dayname.js";
let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// → Today is Monday

document.write(`Today is ${dayName(now.getDay())}`);
