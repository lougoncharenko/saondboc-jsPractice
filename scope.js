var a=1;
let b=2;
const c=3;

function test(){
var a=4;
let b=5;
const c=6; 
console.log('Function Scope: ', a,b,c);
}

test();

if(true){
    //block scope
var a=7;
let b=8;
const c=9;
console.log('block scope: ', a,b,c);
}

console.log('Global scope: ', a,b,c);
//a is changed in the global scope because of hoisting

for (let a=0; a<10; a++){
    console.log(`Looop: ${a}`);
}