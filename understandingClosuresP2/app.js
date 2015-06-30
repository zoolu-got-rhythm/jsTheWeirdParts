function buildFunctions(){

  var arr = [];

  for (var i=0; i < 3; i++){
    arr.push(  // push a method of array, meaning array is an object?
        function(){ // first class function, being created and passed on the fly.
          console.log(i);
        }

    );
  }

  return arr;
}

var fs = buildFunctions(); //this expression runs the function first,
// and stores the return'd value to it.

fs[0]();
fs[1]();
fs[2]();






function buildFunctions2(){

  var arr = []; //an array literal: a collection of anything.

  for (var i=0; i < 3; i++){
    arr.push(  // push a method of array, meaning array is an object?
      (function(j){ //remember iife's return the value not the function itself.
        return function(){ // first class function, being created and passed on the fly. and assigned(returnd) to array index's. 
          console.log(j);
        };
      }(i))

    );
  }

  return arr;
}

var fs2 = buildFunctions2(); //this expression runs the function first,
// and stores the return'd value to it. being an array.
console.log(fs2);
console.log(fs2[0]);
fs2[0]();
fs2[1]();
fs2[2]();
