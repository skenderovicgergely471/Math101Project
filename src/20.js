function calculateGCD(a, b) {
  if (b === 0) return a;
  else return calculateGCD(b, a % b);
}

// Example usage
console.log(calculateGCD(32, 8)); // Output: 8
console.log(calculateGCD(17, 31)); // Output: 1
