var a;

a = {name: "chris"} //this is an expression
a = 3; //the equal/assign to operator is a function that that sets & returns a value.

1 + 2; //the addition operator is a function that returns a value.




if (a === 3) { //the condition is an expression that returns a boolean value
//this is a statement that does work that doesn't return a value untill told so,
// an expression returns a value and always uses operator functions to do so.
}


//function statement

greet(); //remember greet the function statement was stored into memory,
//during the creation phase of the global execution context. so we can hoist it.

function greet(){ //statements can be hoisted into memory, called before they're executed.
  console.log("hello");
}

//function expression

var anonymousGreet = function(){ //it's address in memory will point to a function object.
  console.log("hi");
}; //expressions end with semi-colons normaly, here the expression returns a function object.
//so while a function expressions object doesn't a have name(anonymous),
//it's ok because we can reference it's address in memory via the variable name.


anonymousGreet(); //the paranthesis at the end call the code property on the object.


function log(a){
  console.log(a)
  a();
}

log(3); //creating and passing data on the fly, inside the parameter.
log({greeting: "hi"});
log(function(){
  console.log("first class function");
});

//this concept, where you can pass functions around, give functions to other functions,
//use them like you do variables, introduces an entirley new class of programming,
//called: functional programming. 
