function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); // this will work correctly and return true after several recursive calls
console.log(foo(5,1)); //this will throw a stack overflow error because it will never reach the base case a === b