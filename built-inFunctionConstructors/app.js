
// enhance js by adding my own prototype method to the built-in string object.
String.prototype.isLengthGreaterThan = function(limit){
  return this.length > limit;
}

console.log("john".isLengthGreaterThan(3));

// the "john" primitive was converted to the String object.

// Important note: the "john" string gets wrapped into an object
// by the js engine so we can access it prototype & use prototypal inheritance,
// so it isn't actually a string.
// this is the case with many primitives in js but not all get wrapped
// into an object.

// so we can do things like: and check properties and methods against them.
console.log("christopher".length);



// built in function constructors
var a = new String("chris");
var b = new Number(3);
var c = new Date(30/07/2015);

// if you use a number primitive the js engine doesn't automatically
// wrap it up into an object. meaning we can't do this:

// 3.length;


// these are actually objects.
console.log(a);
console.log(b);
console.log(c);

// all of this is so we can access methods/props on that object functions prototype.



//dangerous aside:

function dangerous(){
  var a = 3
  var b = new Number(3)

 // true. un-strict equality try's to coerce values
  console.log( a == b );

 // this will see they are different data types.
  console.log( a === b );


}

dangerous();

// note we can just assign the functin value as a primtive to a var.


var a = Number("3");
// a is the converted and return'd value. which is not an object.
console.log(a);


// what if we're dealing with dates?
// anthony alecia recommends moment.js library for working with dates,
// oppose to using the Date object. 
