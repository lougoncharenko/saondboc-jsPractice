//loops used to run the same blocks of code

for(let i=0; i<=10; i++){
    console.log('Number is ' + i)
}

for(let i=0; i<=10; i++){
  if(i=== 2)  {
      console.log('2 is my favorite number')
      continue;// keep going with the loop
  }
  if (i===5){
      console.log('Stop the loop')
      break;// stops the loop
  }
  console.log('Number is ' + i)
}

//while loop


let j=0; //set variable outside of loop

while (j<10){
    console.log('Magic number is... ' +j);
    j++;
}

//do while loop
//always runs once

let k=0;

do{
    console.log(k);
    k++;
}
while (k<10);

const cars= ['ford', 'chevy', 'honda', 'toyota', 'tesla']

for (let i=0; i<cars.length; i++){
    console.log(cars[i]);
}


//same thing as above but looks cleaner
//for each
cars.forEach(function(car, index, array){
console.log(`${index} : ${car}`)
console.log(array)
})

//map
const users= [
   {id:1, name:'John'},
   {id:2, name:'Tim'},
   {id:3, name:'Cindy'},
   {id:4, name:'Kate'},
   {id:5, name:'Isaac'},
   {id:6, name:'Jane'},
]

const ids= users.map(function(user){
return user.id;
})

console.log(ids)

const names=users.map(function(user){
    return user.name;
})

console.log(names)

//for in loop
const user={
    firstName: 'Kim',
    lastName: 'Doe',
    age: 25

}

for (let x in user){
    console.log(x)
} // x gives us the keys

