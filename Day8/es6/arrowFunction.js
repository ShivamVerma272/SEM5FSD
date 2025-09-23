
const fun = () => {
    console.log("hey");
};
fun();
const sum = (...args) => {
    console.log(args);
    let sum = 0;
    args.forEach((elee) => {
        sum += elee;
    });
    return sum;
};

const op = sum(2, 4, 6, 8, 10, 12);
console.log(op); // Output: 42