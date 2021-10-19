function hi() {
  console.log("1");
}
hi();
function hi() {
  console.log("2");
}
hi();
function hi() {
  console.log("3");
}
hi();

/*
    What is the output of the top code,
    And then why?
*/

// a = 1 2 3
// b = SyntaxError: redeclaration
// c = 3 3 3
// d = 1 1 1
