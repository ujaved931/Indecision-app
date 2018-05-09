// arguments object - no longer bound with arrow functions

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

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
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