// expose greetr reference.
var g = g$;
console.log(g("chris", "morris"));

// what we're effectively doing is abstraction.
g.greet().setLang("es").greet(true).log();
