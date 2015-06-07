var person = new Object();

person["firstname"] = "tony"; //this is the firstname property
//we are using bracket notation(computed member access).
person["lastname"] = "alicea"; //this notation is great for dynamically deciding
//what property you want to access because you can access it off a string.

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname); //the dot operand function.(member access)
//takes 2 parameters
//the name of the object and the property you want to access.
//the dot operator kinda takes the property name as a string
//it's just simpler syntax.
console.log(person.lastname); //finds the memory location, that reference,
//to the lastname, that's connected to the person object.

person.address = new Object();
person.address.street = "111 Main St." //left to right associativity with member access.
person.address.city = "new york";
person.address.state = "ny";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);





//you can keep making sub objects. objects within objects within more objects etc.
//this is powerful.
