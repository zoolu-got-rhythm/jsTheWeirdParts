
Array.prototype.myCustomFeature = "cool!";

var arr = ["john", "jane", "jim"];



// arrays are objects in js, so be careful we don't iterate down
// into the Array prototype.

for(var prop in arr){
  console.log(prop + ": " + arr[prop]);
}


for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
