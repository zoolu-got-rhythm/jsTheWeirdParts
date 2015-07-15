
var a = {}
var b = function(){}; // func expression
var c = [];

// check the proto property of these objects & special objects.
// and see what built in methods they contain etc in the console.

console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__);

console.log(b.name); // anonymous
