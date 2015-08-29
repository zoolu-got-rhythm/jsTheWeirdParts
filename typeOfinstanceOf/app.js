
var a = 3;
console.log(typeof a);

var b = "hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(object.prototype.toString.call(d)); // better!

function Person(name){
  this.name = name;
}

var e = new Person("jane");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense, because it has no type.
console.log(typeof null) // a bug since, like, forever...

var z = function() { };
console.log(typeof z); // functions are objects remember(function objects)
