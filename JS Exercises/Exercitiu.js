
//VARIABILE

/*Declare two variables: admin and name.
 Assign the value "John" to name.
 Copy the value from name to admin.
Show the value of admin using alert (must output “John”).*/


/*

let admin = '';
let name = 'John'; 

admin = name; 

console.log(admin);   

DONE */



/* 
    Create a variable with the name of our planet. How would you name such a variable?
    Create a variable to store the name of a current visitor to a website. How would you name that variable?
 */ 




/*
 let ourPlanetName = 'Earth'; 
let currentVisitor = 'John';

alert(`This is ${"shit"}`);

*/

/*

let answer = prompt('What is the official name of JavaScript?', '');

answer == 'ECMAScript' ? alert('Right') : alert( 'Wrong'); 

//DONE

*/

/* Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.
 

let num = prompt('Input number', 0);

if(num > 0) {
    console.log('1');
} else if (num < 0) {
    console.log('-1');
} else {
    console.log('0');
} 

DONE
*/ 

/* Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}



let a = Number(prompt('a'));
let b = Number(prompt('b'));

let result = a + b < 4 ? 'Below' : 'Over';

alert(result);

DONE
*/

/* Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}



let message; 

login = prompt('Log in as', );

login == 'Employee' ? alert('Hello') :
login == 'Director' ? alert('Greetings') :
login == 'No login' ? alert('Sal oricn ai fi') : alert('Jet de aici jogodie')

 DONE
*/

/*
let i = 3; 
while (i) {
  alert(i--);
}
*/


/*

let i = 0; 
while(i++ < 5) alert (i);

*/

/*

for (let i = 0; i<5; ++i) alert(i);

*/

/*
for (let i = 2; i <= 10; i++) {
  if(i % 2 == 0) alert(i);
}

*/

/*

for(let i = 0; i < 3; i++) alert(`number${i} din FOR`);

i = 0; 

while(i < 3) {
  alert(`number${i} din WHILE`);
  i++;
}


*/


/*

let x = prompt('Nr mai mare ca 100', );
x = Number(x); 

while(x >= 100) {
  alert('Good');
  x = prompt('Nr mai mare ca 100',)
  x = Number(x);
  if (x < 100) x = prompt('Mai mare ca 100 boule',)
}

*/

/*

let n = 2000000;


nextPrime: 
for (let i = 20000; i <= n; i++) {
  for(let j = 2; j < i; j++) {
    if(i % j == 0) continue nextPrime; 
  } 
  alert(i);
}

*/


/*
let browser = prompt('What browser you use?', );

if (browser == 'Edge') alert('U god Edge bro'); else 
if (browser == 'Chrome') alert ('U mainstream'); else 
if (browser == 'Mozilla') alert ('U da best'); else 
alert('Idk that browser hope its not IE');



if (browser == 'Edge' || 'Chrome' || 'Mozilla') {
  alert ('Good browser choice') }
   else alert('Ia un browser calumea calicule');

   DONE

*/


/*

let a = +prompt('a?', )

switch(a) {
  case 0: alert('0');
  break;

  case 1: alert('1');
  break;

  case 2: 
  case 3: alert('2,3');
  break;

  default: alert('Baga');
  break;
}

DONE

function checkAge(age) {
  if (age > 18) { 
    return true;
  } else {
    return confirm('Did parents allow?'); }
  
}

let age = +prompt('Age?',);
checkAge(age);

function age(age) {
  age > 18 ? true : confirm('Did parents allow?');
}

function ages(age) {
  return (age > 18) || confirm('Did parents allow?');
}

DONE



let x = +prompt('x?',)
  ,n = +prompt('n?',);

function pow(x, n) { 
  let result = 1; 
  for(let i = 1; i <= n; i++) {
    result = result * x; 
  }
  alert(result);
}

pow(x, n);

DONE



function ask(question, yes, no) { 
  if(confirm(question)) yes() 
  else no();
}

ask('Esti nefumator?', 
  () => alert('Good'),
  () => alert('Bad'));

DONE



let user = {
  name: 'John',
  surname: 'Smith',
}

alert(user.name);

user.name = 'Pete';
alert(user.name);

delete user.name;
alert(user.name);

DONE



let schedule = {}; 

function isEmpty() {
  for (let key in schedule) {
    return false; 
  }

  return true;

}

DONE


let salaries = {  
  Tavi: 4300,
  Ale: 5700,
  Gogu: 3900,
  Armand: 5,
  Tibi: -13000,
}

let sum = 0; 

for (let key in salaries) {
  sum += salaries[key]; 
}

alert(sum);

DONE


let friends = {
  Tavi: 10,
  Armand: 8,
  Gogu: 50,
  Ale: 20,
  Tibi: -5,
  Mark: 'Pula',
}



function multipyNumeric(obj) {
  for(let key in obj) {
    
    if (typeof obj[key] == 'number') {
      obj[key] = obj[key] * 2; 
    }
    alert(obj[key]);
  }
  
}

multipyNumeric(friends);

DONE




let user = { 
  name: 'John',
  go: function() { alert(this.name)}
}

user.go();

*/

function makeUser() {
  return {
    name: 'John',
    ref: this
  };
};

let user = makeUser();
alert(user.ref.name); 