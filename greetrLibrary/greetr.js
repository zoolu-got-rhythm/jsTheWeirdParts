//start new execution context.
// safe code
;(function(global, library){


  // capital g signify's we're returning a function constructor.
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
  };

  // hidden from global scope or user (they're not exposed to the outside world)
  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola"
  };

  var formalGreetings = {
    en: "greetings",
    es: "saludos"
  };

  var logMessages = {
    en: "logged in",
    es: "inicio session"
  }

  // a debatably cleaner way of setting the prototype.
  // all my functionality (properties and methods are here) in a structued way.
  Greetr.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1){
        throw "Invalid language";
      }
    },

    greeting: function() {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ", " + this.fullName;
    },

    greet: function(formal) {
      var msg;

      // if undefined or null it will be corced "false"
      if (formal){
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if(console){
        console.log(msg);
      }

      // "this" refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if (console){
        console.log(logMessages[this.language] + ": " + this.fullName());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreeting: function(selector, formal) {
     if (!library) {
       throw "jQuery not loaded";
     }

     if (!selector){
       throw "Missing jQuery selector";
     }

     var msg;
     if (formal) {
       msg = this.formalGreeting();
     }
     else {
       msg = this.greeting();
     }

     // jquery calls and chaining, pass our msg var to the html jquery method
     library(selector).html(msg);

     return this;
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

     self.validate();
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
