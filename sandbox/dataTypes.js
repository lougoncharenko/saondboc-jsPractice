//primative

//strings
const name="Louisa G"
console.log(typeof name); //string
const age= 45;
console.log(typeof age); //number

const hasKids=false;
console.log(typeof hasKids); //boolean

const car=null;
console.log(typeof car); //object


//Reference Types=objects

//array
const hobbies=['gym', 'grilling', 'coding'];

//object literal
const address={
    city: 'Boston',
    state: 'MA'
}

//type converstion
let val;
//number to string
val=5;
val= String(555)//converts it to a string
//output
console.log(val)
console.log(typeof val)
    console.log(val.length) //undefined because cant get the length of a number

//boolean to a string
let rope=true;
rope=String(true);
console.log(rope.length)

//Date to string
let date= new Date();
console.log(new Date())
console.log(typeof new Date()) //outputs object
date=String(new Date());
console.log(date);
console.log(typeof date) //string
console.log(date);

//array to string
array=[1,2,3,4];
console.log(array); //outputs an array
console.log(typeof array);

console.log(array.toString()) //outputs a string

//string to number;
let number='5';
number=Number('5');
console.log(number.toFixed());
number=Number(true);
number=Number(null);

//number.ParseInt(100.30)
console.log(number)

const val1=String(5)
const val2=6
const sum= val1+val2
console.log(sum);
