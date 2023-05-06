//We use Map method to map each element in an array into something
//In this we mapping elemnets in string & objects

/*const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li' + n + '<li');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);*/


const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => ({ value:n })); //For retirning obj put in () otherwise java will take as codeblock and throw error if u write this {value:n}
//(3) [{…}, {…}, {…}]0: {value: 1}1: {value: 2}2: {value: 3}length: 3[[Prototype]]: Array(0) Result on Console

console.log(items);

//-----------Channing Method----------
const num = [1, -1, 2, 3];

const item = num 
  .filter(n => n >= 0)
  .map(n => ({ value:n }))
  .filter(obj => obj.value > 1) // 0 : {value: 2}, 1: {value: 3} or [{}, {}]
  .map(obj => obj.value); //[2,3]

console.log(item);



