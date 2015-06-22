function getPerson() {

  return   //the js engine add's a semicolon so returns out of the function
  {
    firstname: "chris"
  }

}


function getPerson2() {

  return {
    firstname: "chris" //returns out object literal, we created on the fly.
  }

}

console.log(getPerson());
console.log(getPerson2());
