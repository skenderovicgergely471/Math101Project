function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let previous = 0, current = 1;
  for (let i = 2; i <= n; i++) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}
