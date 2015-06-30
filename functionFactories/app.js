function makeGreet(language){

  return function(firstname, lastname){
    if(language === "en"){
      console.log("Hello " + firstname + " " + lastname);
    }

    if(language === "es"){
      console.log("Hola " + firstname + " " + lastname);
    }

  };

}

// runs the function with it's unique ex context with it's var environment, slots unqiue space memory,
// then returns and assigns the return'd function to the variable.
var englishGreet = makeGreet("en"); // passes "en" arg to that context/closure
// runs the function with it's unique ex context with it's var environment, slots another unqiue space memory,
// then returns and assigns the return'd function to the variable.
var spanishGreet = makeGreet("es"); // passes "es" arg to that context/closure

// calls and passes arguments created on the fly.
englishGreet("Christopher", "Morris");
// calls and passes arguments created on the fly.
spanishGreet("Alexander", "Morris");
