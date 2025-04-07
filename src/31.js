function getRandomInt(min, max) {
  min = Math.ceil(Math.min(max, 1));
  max = Math.floor(Math.max(max, 1));

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(0, 9)); // Output: 4
