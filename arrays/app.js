
var arr = new Array(); //object constructor syntax

var arr = [ //stores a collection of data into memory
  1,
  false,
  {
      name: "chris",
      address: "8 laugharne court",
      details: function(){
        return this.name + " " + this.address;
      }
  },
    function(name){ //this a function expression
      var greeting = "hello ";
      console.log(greeting + name);
    },
    "hello"

];

console.log(arr[3](arr[2].name));
console.log(arr[2].details());
console.log(arr);
