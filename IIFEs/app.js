// function statement, put into memory during global execution context/creation phase.
function greet(name){ //but not scanned or executed untill it's called.
  console.log("hello" + name);
}
greet("chris");

// using a function expression, it isn't put into memory initally,
var greetFunc = function(name){ //but rather during execution creates a function object on the fly.
  console.log("hello" + name); //assigns an anonymous function object.
};
greetFunc("christopher"); //invoked by a var that's pointing to it's memory location.


// using an immediately invoked function expression (iife)
var greeting = function(name){
  return "hello " + name;

}(); //remember the paranthesis invokes the .code of the function object.

console.log(greeting); // so greeting holds only the string now return'd by the function.
//console.log(greeting()); // we can't call it because it now just holds data/expression from the executed function.


3;
"i am a string"; //expressions on the fly we're not doing anything with/are stored in memory but without any address so they're kinda lost.
{
  name: "chris"
}



(function(name){ //fool js engine into thinking it's an expression,
                  // by wrapping the anonymous function in the grouping operator.

  return "hello " + name;
}); //but we need to invoke it..


(function(name){

  var greeting = "inside iife: hello";
  console.log(greeting + " " + name);

}("expressionDataType"));

//expressions(something that always returns a value are used with operators)

//so because the syntax parser doesn't see the function keyword first,
//but instead the grouping operator, it's tricked and runs the function as
//an expression instead.

// we're just executing code on the fly with iife's
