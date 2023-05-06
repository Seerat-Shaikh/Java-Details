// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree


//-----Factory Function-------
function createCircle(radius) {
    return {
        radius, //radius=radius or radius, are same
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);
//We see that we have define our logic in one place so we don't have to change all code everytime we will change just logics

//-------------Constructor Function-----
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);