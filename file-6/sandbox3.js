const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }


});




const title = document.querySelector('.title');

title.classList.toggle('test');   // we add a extra class
title.classList.toggle('test');    // if we again write this with taggle. then this class is removed