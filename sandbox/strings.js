const firstName= "Will"
const lastName= "Jones"
const str="Hello there my name is Brad "
const tags= 'web design,web development,computers,programming'

let val;

val=firstName + lastName

//concatenation

val= firstName+ " " + lastName;
console.log(val);

//append
val += " Brad"
console.log(val)

val= "Hello my name is" + " " +firstName + " " +lastName;
console.log(val)

//escaping
val = `That's awesome! I can't wait`
console.log(val)

//length
val=firstName.length
console.log(val)

//concat
val=firstName.concat(' ', lastName);
console.log(val);;

//change case
val=firstName.toUpperCase();
console.log(val)
val=firstName.toLowerCase();
console.log(val);

//charAt
val=firstName.charAt('2');
console.log(val)

//get last character
val=firstName.charAt(firstName.length -1)
console.log(val)

//substring
val=firstName.substring(0,3);
console.log(val)


//slice()
val=firstName.slice(0,3);
console.log(val);

//split
val= str.split(' ')
console.log(val)

val=tags.split(',')
console.log(val)

//replace
val=str.replace('Brad', 'Jack');
console.log(val);

//includes
val=str.includes('hello');
console.log(val)