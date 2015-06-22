function greet(firstname, lastname, language){

  language = language || "en"; //assign value that is true. undefined is false.

  if(language === "en"){
    console.log("hello " + firstname + " " + lastname);
  }

  if(language === "es"){
    console.log("hola " + firstname + " " + lastname);
  }
}


function greetEnglish(firstname, lastname){ //passing a certain default parameter value/argument.
    greet(firstname, lastname, "en"); //first class functions
}




function greetSpanish(firstname, lastname){
   greet(firstname, lastname, "es"); //the 3rd parameter is a default argument.
}

greetEnglish("john", "doe");
greetSpanish("john", "doe");
