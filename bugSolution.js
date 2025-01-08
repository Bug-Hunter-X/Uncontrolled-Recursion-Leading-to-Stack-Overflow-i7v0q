function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); //Correct

function fooSolution(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false;
  } else {
    return fooSolution(a + 1, b);
  }
}

console.log(fooSolution(1,5)); //Correct
console.log(fooSolution(5,1)); //Correct