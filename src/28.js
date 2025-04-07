function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    const previous = 0;
    const current = 1;

    for (let i = 2; i < n; i++) {
      let next = previous + current;
      previous = current;
      current = next;
    }

    return current;
  }
}
