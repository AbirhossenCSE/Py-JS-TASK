const paraOne = document.querySelector('p');
console.log(paraOne);

const paraTwo = document.querySelector('.error');
console.log(paraTwo);

const div = document.querySelector('div.error');
console.log(div);

const paras = document.querySelectorAll('p');
const error = document.querySelectorAll('.error');
// console.log(paras);
// console.log(paras[1]);
// paras.forEach(para => {
//     console.log(para);
// });
console.log(paras);
console.log(error);



//get element by id 

const title = document.getElementById('page-title');
console.log(title);

//get element by class

const errors = document.getElementsByClassName('error');
console.log(errors);

// get element by tag name
const paragraph = document.getElementsByTagName('p');
console.log(paragraph);


const para = document.querySelector('p');
console.log(para.innerText);

para.innerText = 'this is demo from js';

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text from js';
});


const content = document.querySelector('.content');

console.log(content.innerHTML);
// content.innerHTML = '<h2>this is new H2 tag from js</h2>';
content.innerHTML += '<h2>this is a new html tag from js</h2>';
