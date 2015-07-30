
function Person(firstname, surname){
  // return "hah";
  console.log(this);
  this.firstname = firstname;
  this.surname = surname;
  console.log("this function is invoked");
}

// even though we could have a thousand objects, they could
// all refer to this one prototype method(spot in memory). which saves alot of
// space in memory.
Person.prototype.fullName = function(){
  return this.firstname + " " + this.surname;
}


var chris = new Person("christopher", "morris");
console.log(chris);

var alex = new Person("alex", "morris");
console.log(alex);

// note: the .__proto__ is called prototype of functions
// and only points to something when using a function constructor.
Person.prototype.getFormalFullName = function(){
  return this.surname + ", " + this.firstname;
}

console.log(alex.fullName());
console.log(chris.getFormalFullName());
