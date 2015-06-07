function greet(name){
   name = name || "<your name here>"; //or operator function returns first true value, notice how we assign the name argument as a name var.
   console.log("hello" + name)

}

greet("chris");
greet(0);
greet(); 
