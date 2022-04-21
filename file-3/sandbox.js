//  if statments

let age =  25;

if (age > 20){
    console.log("you are in over 20 yeays old");
}

const ninjas = ['raisul', 'islam', 'hridoy'];

if (ninjas.length > 2){
    console.log("that's a lot of ninjas ");
}

const password = 'password';
if(password.length >= 12){
    console.log("that's password migthy strong !");
}
else if(password.length >= 8){
    console.log('that password is long enough !');
}
else{
    console.log("that's password is not long enough !");
    
}

// logical opperaion   - OR ||  and  AND &&  :

const pass = 'pa@ssword';

if(pass.length >= 12 && pass.includes('@')){             //   &&  AND opperator
    console.log("that's password mighty strong !");
}
else if(pass.length >= 8 || pass.includes('@') && pass.length >= 5){    /// OR || operator
    console.log('that password is Strong enough !');
}
else{
    console.log("that's password is not strong enough !");
    
}
// Not oppeartor  ( ! )

let user = false;

if(!user){
    console.log('you must logged in to be ccontinue');
}
console.log(true);    // it means true value
console.log(false);   // it means false value

console.log(!true);    // it means  false value
console.log(!false);   // it means true value

// break and continue

const score = [50, 30, 0, 100, 20, 70];

for (let i = 0; i = score.length; i++){
    console.log('your score : ', score[i]);

    if (score[i] === 0){
        continue
    }

    if (score[i] === 100){
        console.log('congratulations !  You got top score ');

        break;
    }
}

// switch stament   

const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got A !');
        break;
    case 'B':
        console.log('you got B !');
        break;
    case 'C':
        console.log('you got C !');
        break;
    case 'D':
        console.log('you got D !');
        break;
    case 'E':
        console.log('you got E !');
        break;
    default:
        console.log('this is not a valid value');
}

// using if statment

// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){
    
// } else if(grade === 'D'){
    
// } else if(grade === 'E'){
    
// } else{

// }


// variable and block scope

let aged = 50;

if(true){
    let aged = 30;
    let named = 'hridoy';
    console.log('inside age is : ', aged, named);

    if(true){
        let aged = 20;
        console.log('2nd inside age : ', aged);
    }
}

console.log('outside age is : ', aged);