function a(){

   function b(){
      console.log(myVar);
   }

    //var myVar = 5;

   b();
}

var myVar = 2;

a(); 

//note: i couldn't call function b() from global scope
//because it doesn't exist/sit in the memory of the global
//execution context. it's not in the global's lexical environment.
