// here we're abstracting the work that needs to be done inside the function,
// much like built-in functions do when we use them. so we can have a re-usable
// function/code with different passed arguments.
// so we've taken all the noise and segmented it off into it's own function.

var arr1 = [1, 2, 3];
console.log(arr1);


function mapForEach(arr, fn){

  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {

      newArr.push(
           fn(arr[i]) //< callback
      );

  }

  return newArr;

}



// by reference ?
var arr2 = mapForEach(arr1, function(item){
     return item * 2;
});

console.log(arr2);


// using the exact same map for each different call but giving it
// abit of different work, currying? passing different arguments, to get
// the work I want done. this is a classic example of functional programming,
// where we use first class functions to our advantage. to segment our code,
// in even cleaner and tighter ways. try messing around with passing different functions.
// or create some other function that accepts a function an does work. (re-usable code)

var arr3 = mapForEach(arr1, function(item){
     return item > 2;
})

console.log(arr3);














var checkPastLimit = function(limiter, item){
  return item > limiter;
}

// use bind to copy and pre-set arguments, (currying?)

// this approach is quite manual, we can hide even more noise, to get more abstraction.
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// remember function expression return a value.
var checkPastLimitSimplified = function(limiter){
  return function(limiter, item){ // function expression
     return item > limiter;
  }.bind(this, limiter) // set pre-set parameter argument

};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);
