let names=["Divyansh","Dhruv","Ram","Sam"];

// Print the whole    array
console.log(names);

// Array Methods :

`1. Push()`

let fruits=["Apple"];

fruits.push("Mango");

fruits.push("Banana","Grapes","Strawberry","Kiwi");

console.log(fruits);

`2. pop():`

let poppedFruit=fruits.pop();

console.log(poppedFruit);

console.log(fruits);

`3. shift():`

let shiftfruit=fruits.shift();

console.log(fruits);

`4. unshift() :`

fruits.unshift("Apple","Avacado","Plum","Orange");

console.log(fruits);

`5. length:`

// length property is used to know the length of any particular array on which this property is applied.

console.log(`Length of the fruits array ${fruits.length}`);

`6. indexof() :`

console.log(fruits);

console.log(fruits.indexOf("Grapes"));

console.log(fruits.indexOf("Cherry"));

`7. includes() :`

console.log(fruits);

console.log(fruits.includes("Strawberry"));

console.log(fruits.includes("Cherry"));

`8. fill() :`

let arr1=new Array(10);

console.log(arr1);

arr1.fill(12);

console.log(arr1);

`9.  concat() :`

let fruit=["Apple","mango","Banana"];

let vegetables=["Tomato","Onion","Peas","Cauliflower"];

let fruitandveggies=fruit.concat(vegetables);

console.log(fruitandveggies);

`10. join() :`

console.log(fruit.join(""));

`11. reverse() :`

console.log(fruit);
console.log(fruit.reverse());

`12. slice() : `

console.log(fruits);

console.log(fruits.slice(3,6));

// Here in slice() start number is includive whereas, end number is exclusive,


`13. from() :`

let array=Array.from("Dibyansh Sharma");

console.log(array);

`14. flat() :`

let num=[1,2,3,[2,3,4],[4,5,6,[7,8,9]]];

console.log(num.flat());

console.log(num.flat(Infinity));

