

// if(something){
//     do something
// }else{
//     do something else
// }

const id=100;

if (id==100){
    console.log('Correct')
}else {
    console.log('incorrect')
}

//not equal to
if (id !=100){
    console.log('Correct')
}else {
    console.log('incorrect')
}


//equal to value & type
if (id ===100){
    console.log('Correct')
}else {
    console.log('incorrect')
}


//test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is' ${id}`);
}else{
    console.log('NO ID');
}


let color='red';

if (color="red"){
    console.log('Color is red');
    }else if(color === 'blue'){
        console.log('Color is blue')
    }else {
        console.log('Color is not red or blue');

    }

    //logical operators
    const name='Steve'
    age=20;

    if (age>0 && age <12){
        console.log(`${name} is a child`)
        
    }else if( age >=13 && age <= 19){
        console.log(`${name} is a teenager`)
    }else{
        console.log(`${name} is an adult`)
    }


    // or ||
    if (age<16 || age> 65){
        console.log(`${name} can not run in the race`)
        
    }else {
        console.log(`${name} is registered for the race`)
    }

    //ternary operator
    console.log(id === 100? 'Correct': 'Incorrect');

    //without braces

    if(id=== 100)
    console.log('correct')
    else
    console.log('incorrect')
