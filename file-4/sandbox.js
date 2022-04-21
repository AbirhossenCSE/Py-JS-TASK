// function declearation 

function greet(){
    console.log('hello there')
}


greet();
greet();
greet();


//if we write

// function greet(){
//     console.log('hello there')
// }

// then the function will work


// function expresion

// const speak = function(){
//     console.log('good day !')
// }

// speak();

const speak = function(name = "Raisul" , time = "night"){
     console.log(`good ${time} ${name}`)
 }

 speak();  // default valu on the function ( Raisul and night)
 speak('Hridoy', 'morning');     // over wright value






 const calarea =  function(radius){
     let area = 3.14 * radius**2;
     console.log(area);
 }
 calarea(5);

//  //or


// const calarea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }
// const area = calarea(5);
// console.log(area);


//arrow function

// or

const calcarea = redias => 3.14 * redias**2;

const aria = calcarea(5);
console.log('area is : ', aria);


// practise arrow funtion

const gret = () => 'Hello world'
const result = gret();
console.log(result);



// const bill = function(product, tax){
//     let total = 0;
//     for(let i = 0; i < product.length; i++){
//         total += product[i] + product[i] *tax;
//     }
//     return total;
// }



const bill = (product, tax) =>{
    let total = 0;
    for(let i = 0; i < product.length; i++){
        total += product[i] + product[i] *tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));





 const name = 'raisul';

 // function

 const grit = () => 'Hello';

 let resultOne = grit();
 console.log(resultOne);

 //  method 

 let resultTwo = name.toUpperCase();
 console.log(resultTwo);



 // callback  and foreach

 const myFunc = (callbackfunc) => {
     let value = 50;
     callbackfunc(value);
 };

//  myFunc(function(value){
//      console.log(value);
//  });

 myFunc(value => {
     console.log(value);
 });


 // foreach

 let pepol = ['Raisul', 'Islam', 'Hridoy', 'jon', 'Roy'];

//  people.forEach(function(person){
//      console.log(person);
//  });

// // or

// people.forEach((person, index) => {
//     console.log(index,person);
// });

// // or

 const logPerson  = (parson, index) => {
     console.log(`${index} - Hello ${ parson}`)
 };
 pepol.forEach( logPerson);






 // get a refarance to the 'ul'

 const ul =  document.querySelector('.people');

 const people = ['jony', 'mony', 'rony', 'sony', 'pany'];

 let html = ``;

//  people.forEach( function(person)--
 people.forEach(person => {
     // creat a html template
     html += `<li style="color: purple">${person}</li>`;
 });

 console.log(html);
 ul.innerHTML = html;