import { add } from "./calculator/add.js";
import { minus } from "./calculator/minus.js";
import { mult } from "./calculator/mult.js";
import { div } from "./calculator/div.js";

const firstTask = add(1,1);
const secondTask = minus(10, 3);
const thirdTask = mult(5, 5);
const fourthTask = div(8, 3);

console.log("Складання", firstTask);
console.log("Віднімання", secondTask);
console.log("Множення", thirdTask);
console.log("Ділення", fourthTask);