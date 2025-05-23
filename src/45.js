function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i < n + 1; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(fibonacci(10));
