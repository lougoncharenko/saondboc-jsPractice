//function Declarations

function great(firstName, lastName){
    if (typeof firstName === 'undefined'){firstName='John'}
    if (typeof lastName === 'undefined'){lastName='Doe'}
    //console.log('Hello');
    return `Hello ${firstName} ${lastName}`
}

// console.log(great('john'));

//function expression

const square= function(x){
return x*x;
};

console.log(square(3))

//immediately invokable function expressions- IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Brad');



//property methods

const todo={
    add:function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete=function(){
    console.log('Delete todo...')
}

todo.add()
todo.edit(22)



