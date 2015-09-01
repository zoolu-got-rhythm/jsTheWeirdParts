//start new execution context.
// safe code
(function(global, library){


  // capital g signify's we're returning a function constructor.
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
  };


  // a debatably cleaner way of setting the prototype.
  Greetr.prototype = {
    message: function(){
      console.log("hello " + this.name);
    }
  };


  // because functions are objects we can add property's,
  // and methods to them.
  Greetr.init = function(name, surname, language){

     var self = this;

     // refer to passed argument prop value or default value.
     self.name = name || "";
     self.surname = surname || "";
     self.language = language || "en";
  }

  // we override the default prototype with our own,
  // the built-in prototype now points to our own custom one in memory.
  // objects, different instances we create will all point to this same proto ref.
  // remember prototype is an empty object untill we use a func constructor.
  Greetr.init.prototype = Greetr.prototype;


   // expose to global scope and reference the Greetr function,
   // so we can invoke from global scope/window.
   global.Greetr = global.g$ = Greetr;


}(window, $));
