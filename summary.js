let priyoPerson = 'Ety';
priyoPerson = 'Rabeya Aktar Ety';

const hubby = 'Noman';

//default parameter
function getName(first, last = 'Al Noman') {

    return first + ' ' + last;
}

//template string
const myPeople = `My lovely person is ${hubby} and his full name is ${getName('Abdullah')}. My name is ${priyoPerson}.`
console.log(myPeople);

//arrow function ex-1
const getName2 = (first, last) => first + ' ' + last;
//arrow function ex-2
const fiveTimes = X => X * 5;

//arrow function ex-3
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = z * y;
    const thirdPart = z / y;
    const result = (firstPart + secondPart) * thirdPart;
    return result;

}
const total = bigArrowFunc(2, 4, 6);
console.log(total);


const numbers =[2,4,67,54];
const min =Math.min(...numbers);
console.log(min);