function square(x) {
  return x * x;
}

function convertHeight(feet,inches){
	var total ;
	total = ( feet * 12 + inches ) * 2.54;
	return total;
}
convertHeight(2,3);

function square(monkey) {
  return monkey * monkey;
}

function square1(x) { 
 return x * x ; 
 }

function square2 (x){ 
 return x * x ; 
 }
function  square3 (x){ 
 return x * x;
}
function square (x){
return x * x;
}

function cube(x){
	return x*x*x;
}

function cube(x){
	return Math.pow(x,3);
}

function fullName(firstName,lastName) { 
 return firstName + " " + lastName;
 } 



function average (num1,num2){
	return (num1+num2)/2;
}

function greeter (name){
	return "Hello" + " " + name;
}

function perimeterSquare(l,w){
	return 2*(l+w);
}

// 2tr

function circumferenceCircle(radius){
	return 2 * Math.PI * radius;
}
// calculate the absolute value of a number
function abs (num){
	if (num < 0){
		return -num ;
	}
	return num;
}


function oldEnoughToDrive (age){
	if (age >= 16){
		return true;
	}
	return false;
}

function sameLength (str1,str2){
	if (str1.length === str2.length){
		return true;
	}
	return false;
}

function passwordLongEnough (password){
	if (password.length >= 9){
		return false;
	}
	return true;
}
function isEven (num){
	if (num % 2 === 0){
		return "Even";
	}
	return "Odd";
}

function isPositive (num){
	if (num >= 0){
		return "positive";
	}
	return "negative";
}

function guessMyNumber(num){
	min = 0;
	max = 5;
	var radInt = Math.floor(Math.random()* (max-min) + min);
	if (num === radInt){
		return "you guess my Number";
	}
	return "Nope";
}
// Writing a function that welcome a user when given the correct username and password

function welcomUser(username,password){
	if (username === "alaa" && password === 1234567){
		return "Welcom " + username;
	}
	return "Access denied";
}


function scoreToGrade (score){
	if (score < 60 ){
		return "F";
	}
	else if (score >= 60 && score < 70 ){
		return "D";
	}
	else if (score >= 70 && score < 80){
		return "C";
	}
	else if (score >= 80 && score < 90){
		return "B";
	}
	else if (score >=90 && score < 100){
		return "A";
	}
	else {
		return "invalid score"
	}
}

// !(A && B) ==> !A || !B
// !(A || B) ==> !A && !B


var isA = true;
var isB = false;

!(isA && isB) 
!isA || !isB

// Introduction to Repetition
// repetitive calculations 
// stop function , special cases x^0=1
// function call itself with decrement 

function power (base, exponent){
    if (exponent === 0){                            
        return 1;
        } 
     return base * power(base, exponent-1);   
}


// 1.Summation to n: Let's implement the function sum that takes a single parameter n, 
// and computes the sum of all integers up to n starting from 0, e.g

//  sum(3); // => 3 + 2 + 1 + 0 => 6 


 function sum(n) { 
 	if (n === 0){//stop condition
 		return 0;
 	}
 return n + sum (n-1);
 } 

function factorial (n){
	if ( n === 0){
		return 1;
	}
	return n * factorial (n-1);
}


 function repeatString(str, count) {
	 if (count === 0) {
	 	return "";
	 }
	 return str + repeatString(str, count-1)
 } 

 function fib (n){
 	if ( n <=1 ){
 		return 1
 	}
 	return fib(n-1)+fib(n-2);
 } 



function multiplyBy10(number, n){
	if (n === 0){
		return number;
	}
	return 10 * multiplyBy10(number, n-1);
}



var count = 1;
function counter (){
	return count++;
}

function sum(n) { 
 var result =0 ;
 while (n > 0){
 	result = result + n--; 
 }
 return result;
 } 
 // sum(3); // => 0+1+2+3 
 // sum(4); // => 10 
 // sum(5); // => 15


function factorial (n){
	var result=1;
	while(n>=1){
		result = result * n--;
	}
	return result;
}


function repeatString(str, count) { 
 var result="";
 while(count > 0){
 	result = result+str;
 }
 return result;
 }
 count++;

 repeatString('dog', 0); // => '' 
 repeatString('dog', 1); // => 'dog' 



// Summation to n: Let's implement the function sum that takes a single parameter n, 
// and computes the sum of all integers up to n starting from 0
function sum (n){
	var result =0;
	while(n > 0){
		result = result + n--;
	}
return result;
}


function factorial (n){
	result = 1;
	while (n > 1){
		result = result * n--;
	}
	return result;
}
 
function rest (arr){
	arr.pop();
	return arr
}
function rest (array){
    return array.slice(1);
}
// 1.Write a function sum that computes the sum of the numbers in an array.




// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.



function max(arr){
	var max = arr[0];
	for (var i =0 ; i < arr.length-1 ; i++){
		if (maxNum < arr[i]){
			return arr[i];
		}
	}
	return maxNum;
}


var obj = {
	firstName :'Yan',
	lastname: 'Fan'
}



 var obj = {
 	a: 1,
 	b:2,
 	c:3,
 	d:4 
 };

 var person = {
 	firstName :"Alaa",
 	lastName:"Sarhan",
 	homeTown:palestine
 };

person.occupation:"engineer";
console.log(person);






// Write a function that, when given people and an age as arguments, 
// returns an array of just the people that are older than the specified age. 

function older(people,age){
	new newArray =[];
	for ( var i =0; i < array.length-1;i++){
		if(Arr[i].age > age){
			newArray.push(Arr[i].age);
		}	
	}
	return newArray;
}

function makeAccount(initial){
var balance =initial;
function withdraw (amount){
	balance = balance-amount;
	return "here's your money  " + balance; 
}
return withdraw;
}














