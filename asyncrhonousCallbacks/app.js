//long running function
function waitThreeSeconds(){
var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log("finished function"); 

}

function clickHandler(){
  console.log("click event!"); 
}

//listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds(); 
console.log("finished execution"); 

//use this code as an example to study the event loop stack,
//and the execution stack. 