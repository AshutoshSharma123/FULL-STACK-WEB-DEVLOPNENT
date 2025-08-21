


// We HAVE TO UNDERSTAND THE CONCEPT OF LOCAL AND SESSION STORAGE AND COOKIES
//Local storage is used by browser to store data of client side in browser for multiple sessions
//Session storage is used by browser to store data of client side in browser for only one session
//Cookies is used by server to client side in browser for multiple sessions


// localStorage.setItem('name', 'Ashutosh');
// localStorage.setItem('age', '24');
// let name = localStorage.getItem('name');
// console.log(name);
// localStorage.removeItem('age');

let users = [{
    name: 'Ashutosh',
    age: 24,
    city: 'Noida'
},
{
    name: 'Aditya',
    age: 22,
    city: 'Gurgaon'
},
{
    name: 'Anvi',
    age: 5,
    city: 'Delhi'
}]
console.log(users); // but it is not saved in local storage correctly we have to change it to string
let p = (JSON.stringify(users));// this made the array of pbjects to string
console.log(p);
localStorage.setItem('users', p);

// even if i remove the code of local storage it will not remove the data
// localStorage.removeItem('users');

// i can access the data like this
let users2 = JSON.parse(localStorage.getItem('users'));
console.log(users2);

// similarly session storage works but it is only for one session as we close the browser it will be removed
// cookies works like session storage but it is for multiple sessions but an older way 