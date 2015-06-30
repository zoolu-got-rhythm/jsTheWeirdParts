// this becomes a closure, because the function executes and is then popped
// off the stack, then the setTimeout func callback is ready it access'
// sayHiLater's closure of variables that are still in that same place in memory.

function sayHiLater(){

  var greeting = "hi";

  // setTimeout is a built in function
  setTimeout(function(){ //1st class, function expression

    console.log(greeting);

  }, 3000);

}

sayHiLater();



// jQuery uses function expressions and first-class functions!
// $("button").click(function(){

// });



function tellMeWhenDone(callback){

  var a = 1000;
  var b = 2000;

  callback(); //invoking the parameter passed to the function

}


// notice how this is the same structure as the built in setTimeout function.
// except setTimeout expects 2 arguments, a callback and a time.
tellMeWhenDone(function(){

  console.log("I am done!");

});

// notice how this is the same structure as the built in setTimeout function.
// we've changed the callback, function expression input this time.
tellMeWhenDone(function(){

  console.log("All done..");

});
