var person = {
  firstname: "john",
  lastname: "doe",
  getFullName: function(){
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};


var logName = function(lang1, lang2){

  console.log("logged: " + this.getFullName());
  console.log("my arguments " + lang1 + " " + lang2);
  console.log("-----------------------");

}; //we can bind it on the fly to this function at the end .bind(person);

console.log(logName);


// remember function expressions return values. we want to store
// this function (object value) to a new location in memory and bind it.
var logPersonName = logName.bind(person); //returns a new function?/makes a copy.
logPersonName("en");

// logName();  < this refers to global object "window" so we bound it with bind above.


//call actually executes the function unlike bind which creates a copy.
logName.call(person, "en", "es"); //just simply changing what object "this" refers too.

//apply() wants an array of argument parameter's: this is the only difference between call and apply.
//an array can be more useful specially for mathematical things, collections of collections.
logName.apply(person, ["en", "es"]);


//trick syntax parser using grouping operator and invoke it on the fly like an iife

(function(lang1, lang2){

  console.log("logged: " + this.getFullName());
  console.log("my arguments " + lang1 + " " + lang2);
  console.log("-----------------------");

}).apply(person, ["en", "es"]); //.call is pretty much the same !






//function borrowing
var person2 = {
  firstname: "jane",
  lastname: "doe"
}

// borrow'd a method from person and used it with person 2
// so you can use borrow methods from other objects aslong as the property
// names are the same.
person.getFullName.apply(person2);




//function currying
function multiply(a, b){
  return a*b;
}

// set up a copy.
var multiplyByTwo = multiply.bind(this, 2); // set default parameter.
// then call
console.log(multiplyByTwo(4)); //whatever i pass will be the 2nd parameter.

var multiplyByThree = multiply.bind(this, 8);
console.log(multiplyByThree(5));
