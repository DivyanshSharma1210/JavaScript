console.log("Helllo from JavaScript")

console.log(this)

// Values and Data Types

// Primitive Data Types

/*

1. Number = 2,3,4.56,-3,2.0,0
2. String = "Hello World" , 'Hello World' , `Hello World`
3. boolean = true or false
4. null
5. undefined

*/

// Non-Primitive Data Types

// 1. Array

let language1="C"
let language2="C++"
let language3="Python"
let language4="Java"
let language5="JavaScript"
let language6="TypeScript"

let languages=["C","C++","Java","Python","JavaScript","TypeScript"];

// 2. Object = {}

// Variable Declaration 

let myName="Dibyansh Sharma"

var name="Dibyansh Sharma"

const stack="MERN"

// Assignment Operator
let highScore=300;

console.log(highScore);

let pwSkillsCoursePrice=3500;

console.log(pwSkillsCoursePrice);

pwSkillsCoursePrice=2000;

console.log(pwSkillsCoursePrice);

let userName="Dibyansh"

let pwCoursePrice=200

let gstPriceOnCourses=36

let finalPurchaseAmount=pwCoursePrice+gstPriceOnCourses

console.log("Final Amount to be paid :",finalPurchaseAmount);

let pwDsaCourse=500;

console.log("Final Price of DSA Course :",pwDsaCourse+gstPriceOnCourses);

let pwDsaCourse2=500;

console.log("Final Price of DSA Course :",pwDsaCourse2-gstPriceOnCourses);

let pwDsaCourse3=500;

console.log("Final Price of DSA Course :",pwDsaCourse3*gstPriceOnCourses);

let pwDsaCourse4=500;

console.log("Final Price of DSA Course :",pwDsaCourse4/gstPriceOnCourses);

console.log("Answer is :",5%2);

console.log("Answer2 is :",5/2);

console.log("Answer3 is :",3**3);

let hiteshHighScore=200;
let DibyanshHighScore=300;

console.log(hiteshHighScore==DibyanshHighScore);

console.log(hiteshHighScore>DibyanshHighScore);

console.log(hiteshHighScore<DibyanshHighScore);

console.log(hiteshHighScore!=DibyanshHighScore);

console.log(hiteshHighScore>=DibyanshHighScore);

console.log(hiteshHighScore<=DibyanshHighScore);

let dibyanshAge=22;

let divyanshAge="22";

console.log(dibyanshAge==divyanshAge)

console.log(dibyanshAge===divyanshAge) 

// JavaScript is Loosely Typed language...

// Mocha -> LiveScript -> JavaScript

// EcmaScript -> ES6 -> 2015

// Decisions || Conditions

let age=18

if(age>=18) 
{
    console.log("You are Eligible to Vote...");
}
else
{
    console.log("You are not Eligible for Vote...");
}

let signal = "green";

if(signal == "red")
{
     console.log("STOP...");
}
else if (signal == "yellow")
{
    console.log("Wait a little...");
}
else if(signal == "green")
{
    console.log("You are free to go...")
}

if(signal == "red")
{
     console.log("STOP...");
}
else if (signal == "yellow")
{
    console.log("Wait a little...");
}
else 
{
    console.log("You are free to go...")
}


 // Switch Case

 let user="Admin";

 switch(user)
 {
    case "Admin":
        {
            console.log("Admin successfully logged in ...");
            break;
        }
    
    case "Student":
        {
            console.log("Student Successfully logged in ...");
            break;
        }
    
    default:
        {
          console.log("Invalid Choice...");
        }
 }

 // Loops

 /*

 Here, we have three types of Loops:

 1. do while
 2. while
 3. for

 */

 // for Loop -> Entry Controlled Loop

for(let i=0;i<5;i++)
{
    console.log(i)
}

// while Loop -> Entry Controlled Loop

let i=1
while(i<=5)
{
   console.log(i);
   i++;
}

// do-while Loop -> Exit Controlled Loop

let m=0
do
{
    console.log(m);
    m++;
}while(m<5);


// Ternary Operator || Ternary Condition

/*
     Syntax of Ternary Operator

     Condition?True:False

*/

1<5?console.log("TRUE"):console.log("FALSE");
 
let isLoggedIn=true;

isLoggedIn?console.log("Home Page..."):console.log("Login Page...");

// Non-Primitive Data TYpes

// Arrays

let a = [1,2,3,"Dibyansh",false];

console.log(a);

let b = new Array();

console.log(b);

let c = new Array(5);

console.log(c);

let d = new Array("abc","def","ghi");

console.log(d);

/*

 Given array -> [11,21,31,41,51];

 indexes/pos -> [0, 1, 2, 3, 4] // last element index == arr.length-1

 Here in JavaScript indexing starts from 0 , that's why these are also known as zero based indexing arrays. 
*/

let arr=[11,21,31,41,"Dibyansh Sharma",false];

console.log(arr[4]);

arr[4]="Divyansh "

console.log(arr)

// Now if we want to access an invalid index in pur array then it gives us Undefined...

console.log(arr[55]);

// Here as we can see that 55 is not a valid index so it returns undefined in this case...

// Array Methods

let arr1=[1,2,3,4,5]

arr1.push(6)

console.log(arr1);

arr1.push(7,8,9)

arr1.push(10);

console.log(arr1);

let poppedElement=arr1.pop();

console.log(poppedElement);

arr1.unshift(99);

console.log(arr1);

let shiftedElement=arr1.shift()

console.log(shiftedElement);

console.log(arr1.length);

let fruits=["Apple","Mango","Oranges","Kiwi","Strawberry"];

console.log(fruits);

fruits.reverse();

console.log(fruits);

let langauges=["C","C++","Java","JavaScript","TypeScript","Python"];

let webTech=["Html","Css","JavaScript","React","NodeJS","Express","MongoDB"];

let s=languages.concat(webTech)
console.log(s);

let s1=s.join(" ");

console.log(s1);


console.log(s.indexOf("React"));

let arr2=[1,2,3,4,5];

console.log(arr2.slice(2));

console.log(arr2.slice(1,4));

let arr3=[1,2,3,4,5];

console.log(arr3.splice(1,0,22,))

console.log(arr3)


// Functions

/*

Syntax of funtion declaration

function functionName()
{

  function body

  code goes here...

}

*/

function greet()
{
    console.log("Hii there");
    console.log("How are You ?");
}

greet();

// Function with parameter and argument
function sqr(x) // Here x is a parameter
{
   console.log(x*x);
}

sqr(2);  // Here 2 is an actual argument

sqr(8);

// Function with parameter,argument and return statement

function sum(a,b)
{
    return a+b;
}

let result = sum(45,45);

console.log(result);

//  If we don't return anything or you forget to write return statement in function then JavaScript, Bydefault returns undefined.

// Function without a parameter and argument and return statement

function greet()
{
    console.log("Hii there");
    console.log("How are You ?");
}

// Function with a parameter (single, and multiple)

// Function with single parameter

function greeting(message)
{
    console.log(message);
}

greeting("Hii I am Dibyansh Sharma and I am a Full Stack Developer and a Tech Enthusiast");

// Function with two parameters / multiple parameters

function addition(x,y,z)
{
    console.log(x+y+z);
}

addition(45,45,10);

// Default parameter

function add(x=0,y=0)
{
    return x+y;
}

console.log(add(45,45));

// Function with Unlimited number of parameters

function sumOfAllParameters()
{
    let sum =0;

    for(let i=0; i<arguments.length; i++)
    {
        sum=sum+arguments[i];
    }
    console.log(sum);
}

sumOfAllParameters(1,2,3,4,5);

// Arrow Function

// 1. one Parameter and a single return statement

const square = (x) => x * x;

console.log(square(5));

const square1 = x => x * x;

console.log(square1(5));

// 2. Multiple parameter, and a single return expression

const sumOfTwoNumbers = (x,y) => x + y;


console.log(sumOfTwoNumbers(45,45));


// 3. Multiple statements in function expression

const summ = (x, y) =>{

    console.log(`Adding ${x} and ${y}`);

    return x + y;
}

console.log(summ(45,45));


// 4. Returning an Object 


const sumAndDifference = (x, y) => ({sum : x + y , difference : x - y});


console.log(sumAndDifference(45,45));


// Anonymous function

let x = function(){

    console.log("Hii...");
}

x();

// Immediately invoked funtion expression -> (IIFE)

(function exec()
{
   console.log("named");
})();


(function (x)
{
    console.log(x*x);
})(5);

// IIFE's are also known as Self-invoking funtions.

// Objects

let obj = {
 
    id : 101,
    name : "Alex",
    salary : 10000
};

console.log(obj);

let emp =new Object();

console.log(emp);

emp.id = 102;

emp.name = "Sam";

emp.salary = 20000

console.log(emp);

// We can also create objects using funtion construtors...

function Emp(id, name, salary)
{
    this.id = id;
    this.name = name;
    this.salary = salary;
}

const e = new Emp(103, "Ammy", 30000);

console.log(e);

// Accessing Object Values

console.log(e.id);

console.log(e['name']);

console.log(e['salary']);

console.log(emp);

emp.city="Helsinki";

console.log(emp);

emp['country']="Finland";

console.log(emp);

// Updating eisting key-value pair

emp.salary=25000;

console.log(emp);

// Deleting a Key-value pair

delete emp.country;

console.log(emp);

// Object Methods

let person = {

    firstName : "Dibyansh",
    lastName : "Sharma",
    age : 22,
    role : "Full Stak Developer"
};

console.log(person);

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

Object.freeze(person);

person.age = 23;

person.city = "Edinburgh";

console.log(person);

Object.seal(person);

person.firstName="Divyansh";

person.country = "United Kingdom";

console.log(person);

let p = Object.assign({},person);

console.log(p);

// Higher Order Functions Callback, Returning functions, Setting time (setinterval,setTimeout)

const powerTwo = (n)=>{

    return n ** 2;
}

function powerCube(powerTwo,n)
{
    return powerTwo(n) * n ;
}

console.log(powerCube(powerTwo,3));

function sayHello()
{
    return ()=>{

        console.log("Hello Dibyansh Sharma...");
    }
}

let guessValue = sayHello();

console.log(guessValue);

guessValue();

const higherOrder = n => {

    const oneFun = m => {

        const twoFun = o => {
             
            return m + n + o ;
        }

        return twoFun;
    }

    return oneFun;
}

console.log(higherOrder(2)(3)(4));

                                        // setInterval()

function Helloo ()
{
    console.log("Set Interval ...");
}

//  setInterval(Helloo,1000);

                                        // setTimeout

// setTimeout(Helloo,2000);


                        // For each, map, filter, reduce, every, find, sort

const arrr = [2, 3 , 4];

 arrr.forEach(function(element,index,arr)
{
    console.log(index, element, arr);
})

 arrr.forEach((element,index,arr)=>
{
    console.log("arrow :" ,index, element, arr);
})

const heros = ["nagraj", "doga", "dhruva", "maniraj"];

heros.forEach((hero)=>{

    console.log(hero.toUpperCase());

});

// map

heros.map((hero, index, heros)=>{

    console.log(index, hero, heros);
});

heros.map((hero)=>{

    console.log(hero.toUpperCase())
});

// filter

console.log(heros);

const herosWithRaj = heros.filter((h)=>{

    return  h.endsWith("raj");

});

console.log(herosWithRaj);

                                    // reduce
// shopping cart

const cartBill = [2000,3000,4000];

const sumOfCartBill = cartBill.reduce((previos,current)=> previos+current, 0);

console.log(sumOfCartBill);

                                // every
const gameScore = [200, 300, 310, 250, 150];

// Check whether all the values are numbers or not.

 const gameScoreCheck=gameScore.every((value)=>{

    return typeof value === 'number';

});

console.log(gameScoreCheck);


// find

// find score above 200 

const scoreAbove200 = gameScore.find((value)=>{

    return  value > 200;
})

console.log(scoreAbove200);

                                // RegEx(Regular Expression)


let pattern = 'pw';

let regExOne = new RegExp(pattern);

let flag = 'gi';

let regExTwo = new RegExp(pattern,flag);

let RegExThree = /pw/gi;

const strToCheck = "PW is growing at a rapid speed and recently they are working on pwskills to create skills based PwContent";

const result1 = RegExThree.test(strToCheck);

console.log(result1);

const result2 = strToCheck.match(RegExThree);

console.log(result2);

const result3 = strToCheck.replace(RegExThree,'p-w');


console.log(result3);


// Use case :
const webUrl = "https://pwskills.com/hitesh%20choudhary";  // here %20 represents space...

const useableUrl = webUrl.replace(/%\d\d/,'-') // here \d flag  is for numbers...

console.log(useableUrl);



