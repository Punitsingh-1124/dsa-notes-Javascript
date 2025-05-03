//Q. Som of tow intiger

// let a = 12;
// let b = 15;
// console.log(a+b);

// Q. Relation Between string & number & integer
//10+1 = 11
//'10'+"1" = '101'

// concatination
// let a =12;
// let b ="13";
// console.log((a+b)); //typeof

//Q. sum and message
//type coercion
// let a = 10;
// let b = 20;

// console.log("Sum of 10 and 20 is " + a + b); //+ is operator in between oprant 
// console.log("Sum of 10 and 20 is " + (a + b)); // first brakect solve than string
// console.log("Sum of 10 and 20 is ", a + b); // , help to print addition of a+b
// console.log(a + b + " is Sum of 10 and 20 is"); // first number peority than string 

//type coercion
// console.log('1'+1); //11
// console.log('1'-1); //0
// console.log('1'*1); //1
// console.log('1'/1); //1

//Accept and print the Answer
//In this answer of question is string but no. that time engine convert in No. but "10a" throw NaN
//type casting 

// let age = prompt("what is your age");
// console.log(age);  //typeof : string

// let age1 = Number(prompt("what is your age"));
// console.log(age1);  //typeof : number

// let age2 = prompt("what is your age");
// age2 = Number(age2)
// console.log(age1);  //typeof : number

// Q.Swap two variable via 3 methods

// let a = 10;
// let b = 20;
// let c;

// c = a; //c=10 , a =10
// a = b; //a =20 , b=20
// b = c; //b=10 , c=10
// console.log(a); //20
// console.log(b); //10

//Q. swap two varible without extra variable
// let a = 10;
// let b = 20;

// a = a+b; // 10+20 = a=30 
// b = a-b; // 30-20 = b=10
// a = a-b; // 30-10 = b=20
// console.log(a,b);

//Q.
// let a = 10;
// let b = 20;

// [a,b] = [b,a]
// console.log(a,b); // 20 10

//Operators and their questions
//Arithmetic = '+,-,*,%,/',
//Relational = '>,<,>=,<=,='
//logical operator = '&&,||'
//Unary operator = '++,--'

// let a = 10;
// let b = 20;
// console.log(12/5); //2.4
// console.log(Math.floor(12/5)); //2

//mode
// let a = 7;
// let b = 2;

// console.log(a%b); //1
// console.log(b%a); //2
// console.log(Math.floor(b/a)); //0
// console.log(a/b); //3.5
// console.log(Math.floor(a/b)); //3

// let a = 4567; // 4+5+6+7

// console.log(a %10);//7
// console.log(a %100);//67
// console.log(a /10);//456.7
// console.log(Math.floor(a /10));//456

// > < <= >= !== = ==  ===

// console.log(10>5);//true    //in this machine see greater value 
// console.log(10>=10);//true  //in this if 10=10 means true or 10>10 false but one condition must true than value will true
// console.log(10>=7);//true   //in this 10>7 means true or = is not posible
// console.log(10<=7);//false
// console.log(10<=15);//true
// console.log(10 != 10);//false
// console.log(10 !== 11);//true

// var a = 12; //assigment operator

// console.log(12 == 12); //true beacouse value equal
// console.log(12 == '12'); //true beacouse js see value in == 
// console.log(12 === '12'); //false in === its see 'string' or 'value' than output

// && || 
// console.log(10>6 && 5<9); // true
// console.log(10>6 && 15<9); // false
// console.log(10<6 && 15<9 && 18>9); // false ,in this && its check frist value in logic and if it is false than its not check forword ans is false
// console.log(10<6 || 15<9 || 18>9); // true ,beacause false and false is false than single ture in console than false || true = true
// console.log(10<6 || 15<9);//false


// unary operator ++ --
//post,pre incriment
//post,pre decriment

// problemms :
// question 1

// let i = 11;
// i = i++ + ++i;
// console.log(i);
//24 

//question 2

// let a = 11, b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log('a='+a);//13
// console.log('b='+b);//24
// console.log('c='+c);//103

// Initial Values:

// a = 11
// b = 22
// Evaluate a + b:

// This is straightforward: 11 + 22 = 33.
// Evaluate a++:

// This is a post-increment operation. It returns the current value of a (which is 11) and then increments a by 1.
// After this operation, a becomes 12, but the value used in the expression is 11.
// Evaluate b++:

// Similar to a++, this is also a post-increment operation. It returns the current value of b (which is 22) and then increments b by 1.
// After this operation, b becomes 23, but the value used in the expression is 22.
// Evaluate ++a:

// This is a pre-increment operation. It increments a by 1 first (so a becomes 13) and then returns the new value of a, which is 13.
// Evaluate ++b:

// This is also a pre-increment operation. It increments b by 1 first (so b becomes 24) and then returns the new value of b, which is 24.
// Putting It All Together
// Now we can substitute the values back into the expression for c:

// From the evaluations:
// a + b = 33
// a++ = 11
// b++ = 22
// ++a = 13
// ++b = 24

// question 3
// variable operators right way
// let b = true; //true = 1 
// b++;
// console.log(b);//2

// let a = false; //false = 0
// a++;
// console.log(a);//1

//question 4
// constant oprator not allowed
// let a = 11++;
// console.log(a);//error 

// right way 
// let a = 11;
// console.log(a++);//11

// let a = 10;
// let b = ++(a++) //++10

// console.log(b);//error

//Maths Functions
// --Math.round()
// console.log(Math.round(10.6));//11
// console.log(Math.round(10.3));//10

// // --Math.ceil()
// console.log(Math.ceil(10.1));//11

// // --Math.floor()
// console.log(Math.floor(10.8));//10

// // --Math.trunc()//remove the decimal part
// console.log(Math.trunc(18.98));//18

// // --Math.pow() //2^5
// console.log(Math.pow(2,5));//32 

// // --Math.sqrt()
// console.log(Math.sqrt(16));//4 

// // --Math.cbrt()
// console.log(Math.cbrt(2)); //1.2599210498948732

// // --Math.abs()
// console.log(Math.abs(-15));//15 positive value

// // --Math.max(),min()
// console.log(Math.max(78,65,12));//78
// console.log(Math.min(78,65,12));//12

// // --Math.random()
// console.log(Math.random()); //0 to 1 between
// console.log(Math.random()*10); //above 0 to 9
// console.log(Math.random()*9000); //above 0 to 900 between
// console.log(Math.trunc(Math.random()*9000)+1000);//any no. under four digit //above 0 to 900 between ,use in opt generator 

// // --tofixed()
// let a = 89.09878;
// console.log(a.toFixed(2));//89.09  //taking last 2 value after point and convert value into string



// -> Math problem
//Question : calculate area and perimeter of rectangle

// let a = 5;
// let b = 7;
// console.log(a * b);//35

//Question : generate OPT
// console.log(Math.trunc(Math.random()*9000)+1000);//any no. under four digit //above 0 to 900 between ,use in opt generator 

//Question : area of triangle by heron,s formula
// let a= 5
// let b=4
// let c = 3

// let s = (a+b+c)/2 //
// console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));//6

//Question : circumference of circle

// let r =12;
// console.log(Number((2*Math.PI*r).toFixed(2)));//75.4






