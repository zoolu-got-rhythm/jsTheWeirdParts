var objectLiteral = {
  firstname: "chris",
  isAprogrammer: true
};

console.log(objectLiteral);
console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse(
  {
  "firstname": "christopher",
   "isAprogrammer": true
  }
);

console.log(jsonValue);
