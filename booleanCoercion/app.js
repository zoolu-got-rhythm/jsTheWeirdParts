var a;

//the if statement will convert/coerse the argument to a boolean value of true or fasle. 
if(a){
  console.log("something is there."); 
}else{ 
  console.log("something is there.");
}


//if a is something

if(a || a === 0){ //note the right to left associativity from the strict equality precedence. 
  console.log("something is there.");
}
