

function greet(whattosay){ // when called we store the passed argument var into memory,
  // of this execution context even when it's not on the stack, it's still there in memory.

  return function(name){ // rememember function objects are "first class",
  // meaning they can be treated and return'd like any other data type.
      console.log(whattosay + name);
  };

}

greet("welcome to the jungle ")("chris");

var greeting = greet("welcome ");
greeting("chris");
