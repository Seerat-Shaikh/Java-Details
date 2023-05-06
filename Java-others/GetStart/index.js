//getters => Access properties
//setters => change them or set it form outside

const person = {
    firstName: 'Ali',
    lastName: 'Khan',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith'; //For changing names from outside 

console.log(person.fullName); 