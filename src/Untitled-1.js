


// const originalObj = { name: 'Usman', age: 31 };

// let newObj = originalObj;

// newObj = Object.assign({}, originalObj, { name:'Omar' });

// const aBrandNewObj = {...originalObj, name: "Shaheer" }


// console.log(newObj)
// console.log(aBrandNewObj);

const myArrayOfNums = [1, 3, 5];
const nextNums = [4, 6, 8];
const newArray = myArrayOfNums.concat(nextNums);

console.log(newArray)

const addedBy1 = newArray.map(num => num + 1);
// console.log(addedBy1);

// const odd = newArray.filter(num => num % 2 !== 0);
// const even = newArray.filter(num => num % 2 === 0);
// console.log(odd);
// console.log(even);


const addUpArray = newArray.reduce((prev, next)=>{
    console.log(prev);
    console.log(next);
    return prev + next;
    
})

console.log(addUpArray);