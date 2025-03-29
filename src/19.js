function sum(numbers) {
    let result = numbers.reduce((acc, curr) => acc + curr, 0);
    return result;
}

console.log(sum([1, 2, 3, 4]));
