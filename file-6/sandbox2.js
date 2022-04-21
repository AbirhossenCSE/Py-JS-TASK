const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'this is youtube';

console.log(link.getAttribute('href'))


const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color:green;');





const title = document.querySelector('h1');

// title.setAttribute('style', 'margin:100px;');

console.log(title.style);
console.log(title.style.color);


title.style.margin = '100px';
title.style.color = 'blue';
title.style.fontSize = '60px';
title.style.margin = '';    // this is for delet a style  ;;







const ptext = document.querySelector('p');

console.log(ptext.classList);
ptext.classList.add('error');
ptext.classList.remove('error');

ptext.classList.add('success');