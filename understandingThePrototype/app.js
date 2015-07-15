var obj1 = {
  firstname: "default",
  lastname: "default",
  getFullName: function(){ // function expression but has a spot in memory as a method.
    return this.firstname + " " + this.lastname;
  }
}

var obj2 = {
  firstname: "john",
  lastname: "doe"
}

// never do this ! for demonstrative purposes only !!

// set the prototype property of obj2 to ojb1.
// ( notice how they made it harder to write the proto property )
obj2.__proto__ = obj1;
console.log(obj2.getFullName());
console.log(obj2.firstname);

var obj3 = {
  firstname: "jane"
}

// obj2 and obj3's prototype is pointing to the same spot in memory now.
obj3.__proto__ = obj1;


console.log(obj3.getFullName());
