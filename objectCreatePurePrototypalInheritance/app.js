
// polyfill
if(!object.create){
  object.create = function( o ){ // func expression, always returns something
    if(arguments.length < 1){
      throw new Error("object.create implementation
      only accepts the first parameter.");
    }
    function F(){}
    F.prototype = o;
    return new F();
  };


}





var person = {
  firstname: "default",
  lastname: "default",
  greet: function(){
    return "hi " + this.firstname;
  }

}

var john = Object.create(person);
// "hide"/override the prototype's properties,
// by writing my own ones in.
john.firstname = "john";
john.lastname = "doe";
console.log(john);
