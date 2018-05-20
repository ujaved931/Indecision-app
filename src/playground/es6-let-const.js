<<<<<<< HEAD
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
=======
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
>>>>>>> d32b160e5e74dd15379f281e43cc27ec9ac6c084
}

console.log(firstName);
