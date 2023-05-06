//--------ARRAY----------
 //Its an "Object" in Java
 let selectedColors = ['red', 'blue'];
 selectedColors[2] = '1'; // ['red', 'blue', '1'] Since length is dynmaic so it can be changed anytime & types too
 console.log(selectedColors);
 // Results on Console: (2) ['red', 'blue']0: "red" 1: "blue"length: 2[[Prototype]]: Array(0)
 console.log(selectedColors[0]);  //red
 console.log(selectedColors.length); //3 items