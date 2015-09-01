// the string behaves like css selectors.
var q = $("ul.people");

// method chaining
q.addClass("newClass").removeClass("people");

// this returns an array holding an object, on it's prototype,
// (__proto__)all of jquery's functionality is there as methods.
console.log(q);
