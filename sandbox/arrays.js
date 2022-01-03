const number= [43,56,33,23,44,36,5];
const number2= new Array(43,56,33,23,44,36,5)
const fruit= ['apple', 'bannana', 'orange', 'pear'];
const mixed=[22, 'Hello', true, undefined, null, {a:1, b:1}];

let val=number.length
console.log(number);

console.log(val);

//check if is array
val=Array.isArray(number);
console.log(val);

//get a single value
val=number[3];
console.log(val)
val=number[0];
console.log(val);

//insert into array
number[2]=100;
console.log(number)

//mutating arrays

//add to the end
number.push(250);
console.log(number)
//add to the front
number.unshift(120);
console.log(number)
//take off from the end
number.pop();
console.log(number);
//take off from the front
number.shift()
console.log(number)
number.splice(1,1);
console.log(number),
number.splice(1,3)
console.log(number)
number.reverse();
console.log(number);
val=number.concat(number2);
console.log(val);
val=fruit.sort()// sorts alphabetically
console.log(val)