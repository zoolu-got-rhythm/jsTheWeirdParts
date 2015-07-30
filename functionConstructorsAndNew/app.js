
function Person(firstname, surname){
  // return "hah";
  console.log(this);
  this.firstname = firstname; // this is a pattern naming parameter as
  this.surname = surname; // same name as property, they are different.
  console.log("this function is invoked");
}

// calls the function constructor and returns an object(js engine does this) to
// that location in memory as "chris "
var chris = new Person("christopher", "morris");
console.log(chris);

var alex = new Person("alex", "morris");
console.log(alex);
