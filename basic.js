//variable
var deposit = 400;
//condition
if (deposit > 500) {

}
else if (deposit < 200) {

}
else if (deposit == 500) {

}
else if (deposit != 500) {

}
else if (deposit >= 500) {

}
else if (deposit <= 500) {

}
else {

}

//array
const numbers = [45, 23, 222, 567, 4567, 123, 46, 90, 77, 99];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2] = 555;
//check whether 222 included in the array
if (numbers.indexOf(222) != -1) {
    console.log('222 is included');
}
if (numbers.includes(222)) {

}

//loop
//while , for
for (const number of numbers) {

}
//function
function fullName(first, second) {
    const name = first + ' ' + second;

}
const person = fullName('Rahim', 'ali');

//object
const bottle ={ color: 'yellow', contain: 'water', price:'18'};