// by value (primitives)

var a = 3;
var b;

b = a; //the assign operator see's that the value is primitive and assigns,
//a new slot in memory for the same value.

a = 2;

console.log(a);
console.log(b);

// by reference (all objects(including functions))

var c = { greetings: "hi"};
var d;

d = c;
c.greetings = "hii, i'm mutated"; //mutate

console.log(c);
console.log(d); //we're pointing, referencing to the same slot in memory

//we change one property of an object, we change all in that same slot.


// by reference (even as paramters)

function changeGreeting(obj){

  obj.greeting = "hola"; //mutate
}

changeGreeting(d); //pass d's referenced object

console.log(c);
console.log(d);

//equals operator sets up new memory space (new address)

c = { greeting: "howdy" }; //this is the exception. 
console.log(c);
console.log(d);
