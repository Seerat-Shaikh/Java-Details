/*const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value) {
    return value >= 0;
});

console.log(filtered);*/ //1 2 3 

//---------Arrow Method-----
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n>=0); //using short variables name as we are using for filters
console.log(filtered); //(3) [1, 2, 3]
