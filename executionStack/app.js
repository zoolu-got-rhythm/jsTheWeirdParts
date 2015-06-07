//functions have their very own execution context,
//with creation and execution phase, with very own this keyword,
//function object, and memory alocation
//the compiler scans the function when it reaches
//the function invocation(call).
//when functions have finished running, they get "popped" off the exicution
//stack and the exicution context climbs back up to the global,
//exicution context.


function a(){
b();
    var c;
}

function b(){
   var d;
}

a();
var d;
