const name="john";
const age=30;
const job="Web Developer";
const city="Miami";

html= `
<ul> 
<li>Name: ${name} </li>
<li>Age: ${age} </li>
<li>Job: ${job} </li>
<li>City: ${city} </li>
</ul>


`;

document.body.innerHTML=html
console.log(html);


let phrase= `Hi my name is ${name}`
console.log(phrase)