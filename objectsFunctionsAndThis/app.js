console.log(this);

function a(){
  console.log(this);
  this.newVariable = "hello"; //attaches/appends to the global object(window),
  //but from local/function scope !
}

var b = function(){//this will reference the window object, because it becomes part of it,
  console.log(this); //window.b(); it's kinda like a method of the window object.
};


a();

console.log(newVariable);

b();

var c = {
  name: "my c object",
  log: function(){
      var self = this; //create a reference to that location in memory.
      console.log(this);
      this.name = "my c object updated"; //mutate c's property's from this method.
      console.log(this); //we can use this to reference the object we're inside.
           function updateAgain(newname){
               self.name = newname;
               this.newVariable = "abit of a bug in js";
               console.log(self.name);
            }

     updateAgain("my c object updated yet again");
     console.log(self);
  }


};

c.log();
console.log(newVariable);  //this is the same as this.newVariable/window.newVariable


//you'll see this pattern very often with js coders. 
