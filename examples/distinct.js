const numbers = [ 1, 1, 2, 3, 4, 4, 5, 5, 5, 5, 6 ];

const set = new Set();
numbers.forEach(x => set.add(x));
console.log(set);