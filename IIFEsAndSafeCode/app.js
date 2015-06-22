
console.log(greeting);

// IIFE
(function(global, name){

  var greeting = "hello";
  global.greeting = "hello"; //overrides, mutates global object. intentional.
  console.log(greeting + " " + name);



}(window, "chris"));


// avoid name collisions with other scripts, library's and frameworks.
console.log(greeting);
