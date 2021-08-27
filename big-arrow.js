//arrow function
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

//arrow function
const minus = (num1, num2) => num2 - num1;
const min = minus(12, 20);
console.log(min);

// multiplication using arrow function
const multiply = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;
const mul = multiply(2, 3, 6, 5);
console.log(mul);


const fiveTimes = (num) => num * 5;
const result = fiveTimes(10);
console.log(result);


//single parameter thakle bracate na dileo hobe
const tenTimes = num => num * 10;
const output = tenTimes(17);
console.log(output);

//kono parameter na thakleo bracket dite hobe
const getName = () => 'Brandon Sam';
const name = getName();
console.log(name);


//multiLine er khetre second bracket diye korbo
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;

}

const total = doMath(12, 5);
console.log(total);

// document.getElementById('my-btn').addEventListener(event => {

// })
