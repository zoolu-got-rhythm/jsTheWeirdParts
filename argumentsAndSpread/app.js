function greet(firstname, lastname, language){

     language = language || "en"; //return langauge if it is true(has a value passed);

    if (arguments.length === 0){ //we can treat arguments just like we would an array.
       console.log("missing parameters!");
       console.log("--------------");
       return; //leave function

    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); //the execution set's up arguments keyword for us in lexical environment.
    console.log("arg 0:" + arguments[0]); //arguments keyword behaves like an array but isn't one.
    console.log("--------------");


}

//note: the parameters/arguments are hoisted into memory as undefined.

greet(); //you don't need to pass an argument in js for the function to run.
greet("chris");
greet("chris", "morris");
greet("chris", "morris", "jap");
