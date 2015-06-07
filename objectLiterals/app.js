var person = {}; //object literal (shorthand)


var person2 = {
  firstname: "chris",
   surname: "morris",
   address: {
     street: "8 laugharne court",
     city: "new york",
     state: "NYC",
     fetchAddress: function(){
       return this.street + ", " + this.city;
       }
   }
 }; //js is very forgiving with whitespace, you can format to make human friendly.

person2.flexibility = "mix and match syntax";


var person3 = new Object();
person3.name = "chris";

//note: literal syntax is much faster.

function greet(name){
  console.log("hi Mr" + " " + name.surname);
  console.log("your current location is:" + " " + person2.address.fetchAddress());
}








console.log(person);
console.log(person2);
console.log(person2.address.fetchAddress());

greet(person2);

greet({
  firstname: "christopher",
  surname: "plummer"
}); //we can create objects on the fly, inside arguments for e.g when we invoke a function.
