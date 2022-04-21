

console.log(1);
console.log(2);


let age = 25;
let year = 2022;

console.log(age, year);

age = 30; //over write a variable.
console.log(age);

const points = 100; //constant can not be changed

console.log(points);

var score = 75;

console.log(score);

/*  data type of js
number : 1, 46, 2.21 ,
string : 'hello' , "hridoy" , "email@gamil.com" "124" ,
boolean : true/false.
null : explicitly set with no value.
undefine : for variables that have not yet define.
object :  complex data structures - array , dates, literals etc.
symbol : used with object.
*/

// string  

console.log("my name is Md Raisul Islam");

let email = 'hridoy@gmail.com';
console.log(email);

// string concatenation or adding two string

let firstName = "Raisul";
let lastName = "Islam";

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting charecter .

console.log(fullName[0]);

// string length

console.log(fullName.length);

//  string methods

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result);


let index = email.indexOf('@'); // finding index number
console.log(index);

//common string method .

    // from previous mail acount

//let resul = email.lastIndexOf('i');
//et resul = email.slice(0,10);   // for slicing some 

//let resul = email.substring(0, 5);  // for made a sub string (starting number, string number)
let resul = email.replace('h', 'r')  // replace a charecter (given ch,  wanted ch) . if mani ch are same then change only first index

console.log(resul);


// math operator  +, -, *, /, **, %

let redius = 10;
const pi = 3.14;

console.log(redius, pi);

let sum = redius + 5;
let sub = redius - 5;
let mult = redius * 5;
let dev = redius / 5;


let power = redius ** 5;
let mod = redius % 5;

let area = pi * redius**2


console.log(sum);
console.log(sub);
console.log(mult);
console.log(dev);

console.log(mod);
console.log(power);

console.log(area);


// order of operation  _ B I D M A S

let operation = 5 * (10-3)**2;

console.log(operation);


let likes = 10;
 // likes = likes + 1; same of likes++
 // likes++;
 // likes--;   // same of likes = likes - 1

 likes += 10;   // same to likews = likes + 5
 // likes -= 5  // same to likews = likes - 5
 // likes *= 5  // same to likews = likes * 5
 // likes /= 5  // same to likews = likes / 5
 // likes -= 5  // same to likews = likes - 5
console.log(likes);


// NaN  - not a number

console.log(5 / 'hello');


let coment =  'the blog has ' + likes + ' likes';
console.log(coment);

//template strings

let title = 'best resds of 2022';
let author = 'hridoy'
let like = 30;

// concatenation way 

// let blog =  'the blog called ' + title + ' by ' + author + ' has ' + like + ' likes';
// console.log(blog);

// template string way
let blog = `the blog called ${title} by ${author} has ${like} likes`;
console.log(blog);

// creating html template

let html = `

    <h2>${title}</h2>
    <p>by ${author}</p>
    <span> this blog has ${like} likes</span>

`;
console.log(html);



//  array  

let ninjas = ['raisul', 'islam', 'hridoy']; // string type arry

console.log(ninjas);
console.log(ninjas[1]);

ninjas[2] = 'habib';   //  over write a value

console.log(ninjas);
console.log(ninjas[2]);


let ages = [20, 25, 30, 35]; // number type array
console.log(ages[3]);


let random = ['saun', 'cristyan', 30, 25.43];  // random type array
console.log(random);

// joining

let joining = ninjas.join(',');
console.log(joining);


let con = ninjas.concat('joy', 'ornob');

console.log(con);

let pushing = ninjas.push('jon');  // pushing a new valu

console.log(ninjas);


let deleting = ninjas.pop()  // for delet the last value 

console.log(ninjas);
console.log(deleting);






//  null

let yar = null;
console.log(yar, yar+5, `this yesr is ${yar}`);




// boolean



console.log(true, false, 'true', 'fasle'); // boolean and comparisons

// method can be return
email;
let names = ['raisul', 'islam', 'hridoy'];

let checkEmail = email.includes('@');
let checkName = names.includes('ridoy');

console.log(checkEmail);
console.log(checkName);


// comparison operator

let boyos = 25;

console.log(boyos == 25);   // that is true
console.log(boyos == 30);   // thai is fallse
console.log(boyos != 34); // that is also true
console.log(boyos < 34); // that is also true
console.log(boyos > 34); // that is also false
console.log(boyos >= 25); // that is also true
console.log(boyos <= 34); // that is also true



let nam = 'hridoy';

console.log(nam == 'hridoy');  // that is true
console.log(nam == 'Hridoy');   // that is false cause thera have a upper case latter
console.log(nam < 'raisul');    // true because (  r   ) is big from (  H  ) latter for alfabetical way
console.log(nam > 'Raisul');    // true because lower case later is big from uppercase latter
console.log(nam < 'Hridoy');    // false because lower case later is big from uppercase latter


// loose comparison  ( diffferent type of data can be equal)

console.log(boyos == 25);      //number type
console.log(boyos == '25');    //string type


// loose comparison  ( diffferent type of data can be equal)

console.log(boyos === 25);    /// true   ( === for check same value and same data type   )
console.log(boyos === '25');    /// false   ( === for check same value and same data type   )
console.log(boyos !== 25);    /// false  ( !== for check same value and same data type   )
console.log(boyos !== '25');    /// true   ( !== for check same value and same data type   )




//  data type converson

let scor = '100';

console.log(typeof(scor));
console.log(scor + 1);   // this is adding one on the last of scor (1001) cauese scor is a string

scor = Number(scor);

console.log(scor + 1);   // now it add 100+1 = 1 becuse now score is a number
console.log(typeof score);


//  string to number

let gred = Number('hello');

console.log(gred); // NaN , because is not a number

// number to string

let point = String(50);

console.log(point, typeof point);  // it posible cause a number can be a string 

// boolean 
let boll = Boolean(100);
let boll2 = Boolean(0);
let boll3 = Boolean(-12);

let boll4 = Boolean('0');

console.log(boll, typeof boll);
console.log(boll2, typeof boll2);   // false because 0 is not a true value for boolean
console.log(boll3, typeof boll3);

console.log(boll4, typeof boll4);   //true cause a string can be a boolean





