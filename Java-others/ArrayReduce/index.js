
//General method
/*const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers)
  sum += n;

console.log(sum);*/

//--Reduce
const numbers = [1, -1, 2, 3];

// a = 0, c=1 => a=1
// a=1, c=-1 => a=0 so onn
//If we reomve 0 from end then it will goes as 
 // a=1, c=-1 => a=0
 // a=0, c=2 +> a=2 so on

const sum = numbers.reduce((accumulator, currentValue) => { //Accumulator(Initialize value which we set to 0 in end)
    return accumulator + currentValue;
}, 0);
console.log(sum);


//---REDUCING MORE---------
const num = [1, -1, 2, 3];

const sums = num.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sums); 

//Both Methods will give same results


