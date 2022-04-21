//oobject littarel

let user = {
    name: 'Hridoy',
    age: 21,
    email: 'riasul@gmail.com',
    blogs: ['my future', 'my dream'],
    login: function(){
        console.log('user is logged in');
    },
    logout: function(){
        console.log('User logged out')
    },
    logblog: function(){
        // console.log(this.blogs);
        console.log('this user written the following : ');
        this.blogs.forEach(blog => {
            console.log(blog)
        });
    }


};
console.log(user);
console.log(user.name); 
  //or
console.log(user['name']);

console.log(user.email);
console.log(user.age);

user.age = 25;

console.log(user.age);

user['name'] = 'raisul';
console.log(user['name']);

console.log(typeof(user));

user.login();
user.logout();

user.logblog();
console.log(this);



//  Math object--

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.5;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//  random number

const random = Math.random();

console.log(random);
console.log(Math.round(random));
console.log(Math.round(random * 100));




// primitives value

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score one : ${scoreOne}`,`Score Two: ${scoreTwo}`);

scoreOne = 100;

console.log(`Score one: ${scoreOne}`, `Score two : ${scoreTwo}`);



// refarance value

const userOne = {nam: 'Raisul', aged: 22};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.nam = 'Hridoy';
userOne.aged = 30;

console.log(userOne, userTwo);