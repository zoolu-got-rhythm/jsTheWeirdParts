

function b(){
   var myVar; 
    console.log(myVar)
}

function a(){
var myVar = 2;
    console.log(myVar);
    b(); 

}

var myVar = 0; 
console.log(myVar); 
a(); 
console.log(this.myVar = 5);
