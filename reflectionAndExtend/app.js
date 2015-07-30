var person = {
  firstname: "default",
  lastname: "default",
  getFullName: function(){
    return this.firstname + " " + this.lastname;
  }
}

var john = {
  firstname: "john",
  lastname: "doe"
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

console.log(john);

// for in loop
for (var prop in john){ // this will check the prototype properties aswell.
  // give it a string.
  // only returns true if on the actual object, not the prototype.
  if(john.hasOwnProperty(prop)){ // give prop name string as argument
     console.log(prop + ": " + john[prop]);
  }
}

var jane = {
  address: "111 main st.",
  getFormalFullName: function() {
    return this.lastname + ", " + this.firstname;
  }
}

var jim = {
  getFirstName: function(){
    return firstname;
  }
}

// extend the john object to add properties from other objects,
// this is like an alternative pattern to prototypal inheritance.

console.log(john);

_.extend(john, jane, jim);

console.log(john);
