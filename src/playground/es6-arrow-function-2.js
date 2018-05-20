// arguments object - no longer bound with arrow functions

<<<<<<< HEAD
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
=======
const add = (a, b) => { 
    // console.log(arguments); not applicable with es6
    return a + b;
}

console.log(add(68,1, 100))

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Usman',
    cities: ['Karachi', 'Peshawar', 'Dubai'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

>>>>>>> d32b160e5e74dd15379f281e43cc27ec9ac6c084
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
<<<<<<< HEAD
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
=======
    //number - array of numbers
    numbers: [3, 4, 12],
    // multiplyBy - single number
    multiplyBy: 3,
    // multiply - return a new array where the number have been multiplied
    
    multiply() {
        return  this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
>>>>>>> d32b160e5e74dd15379f281e43cc27ec9ac6c084
