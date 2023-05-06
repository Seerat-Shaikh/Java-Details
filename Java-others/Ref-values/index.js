//---------Primitives/values---------
//They are copied by their values & "OBJECTS" are copied by their refrences
x = 10;
y = x;
x = 20; //Console Results: x=20 & y=10
let number = 10;
function increase (number) {
    number++;
}
increase(number);
console.log(number);//Result: 10 bcz when it is passes to function it will considered its first value both are indep


//------------REFRENCES-----------
//This shows object is not stored in variable it is stored in some other memory & address of that memory location is stored inside the var
//Both x & y are pointing to same memory location that's why changes will occur in both
let x = {value: 10};
let y = x;
x.value = 20; //Results: x= {value: 20} , y= {value: 20}