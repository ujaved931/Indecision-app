var nameVar = 'Usman';
var nameVar = 'Javed'
console.log('naveVar', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Tanya';
console.log('nameConst', nameConst);

// function getPetName() {
//     var petName = 'Hal';
//     return petName;
// }

// getPetName();

// console.log(petName);
//block scoping


const fullName = 'Andrew Mead';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
