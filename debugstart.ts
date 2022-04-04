import { parse } from './parser';

// console.log("haha")
var ast = parse("max(1,2)");
console.log(JSON.stringify(ast, null, 2))