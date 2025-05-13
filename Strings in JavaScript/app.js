// //let name = lucky
// console.log(name);
// :error : not difine

//let name ="lucky"
//console.log(name)
//lucky

// let arr =[10,20,30,40]
// console.log(arr[2]); //30

// let s = "lucky";
// console.log(s[3]); //k

//string is immutable means
// let arr = [10,20,30,40] //arrays are mutable means changging values
// arr[2]=100;
// console.log(arr);//[ 10, 20, 100, 40 ]

// let s ="lucky" //string cant change is value
// s[2]='y'
// console.log(s); //lucky

// let s ="lucky" //string can add new string
// s + " singh" //worng way not working
// console.log(s); //lucky

// let s ="lucky" //string can add new string
// s = s + " singh" //right way working
// console.log(s); //lucky singh


// -method of string

// let n = "lucky"
// console.log(n.length); //5

// let n = "lucky"
// console.log(n.slice(1,4)); //uck

// let n = "lucky"
// console.log(n.slice(-4,n.length)); //ucky

// let n = "lucky" //substring not covering negative value
// console.log(n.substring(2,5)); //cky

// let n = "lucky"
// console.log(n.toUpperCase()); //LUCKY

// let n = "lucky"
// console.log(n.concat(" " ,"bro" , " hello")); //lucky bro hello

// let n = "         lucky            "
// console.log(n.trim());//lucky

// let n = "lucky"
// console.log(n[2]); //c
// console.log(n.charAt(2)); //c
// console.log(n.charCodeAt(2)); //99 ascay code -99 of c character

//QUestion:print each charater on new line
// let arr = [10,20,30,40]  //in array 
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// 10
// 20
// 30
// 40

//1
// let n = "abhishek" //in string
// for(let i = 0; i<n.length; i++){
//     console.log(n[i]);
// }
// a
// b
// h
// i
// s
// h
// e
// k

//2
// let n = "abhishek" //in string
// for(let i = 0; i<n.length; i++){
//     console.log(n.charAt(i));
// }
// a
// b
// h
// i
// s
// h
// e
// k

//3 reverse value
// let n = "abhishek" //in string
// for(let i = n.length-1; i>=0; i--){
//     console.log(n.charAt(i));
// }
// k
// e
// h
// s
// i
// h
// b
// a

//QUestion:print reverse order
// let n = "abhishek" //in string
// let rev = "";
// for (let i = n.length; i >= 0; i--) {
//     rev = rev + n.charAt(i)
// }
// console.log(rev); //kehsihba


//QUestion:check if string is pallindrome or not
//pallindrome is same sting from both side we start eg. (manda, malayalam, naman ,abba )

//1 : this way is not efficient way becaouse more memory want 
// let n = prompt("Enter a String") //in string
// let rev = ""
// for (let i = n.length; i >= 0; i--) {
//     rev = rev + n.charAt(i)
// }
// if (rev == n) console.log("pallindrome");
// else console.log(" no pallindrome");
//pallindrome :madam
//no pallindrome: start

//2:efficint way 
// let n = prompt("Enter a String")
// let ispallindrome = true;

// let i = 0;
// let j = n.length - 1;
// while (i < j) {
//     if (n.charAt(i) != n.charAt(j)) {
//         ispallindrome = false;
//         break;
//     }
//     i++
//     j--
// }
// if(ispallindrome) console.log("pallindrome");
// else console.log("no pallindrome");
//pallindrome : madam
//no pallindrome :start

//QUestion:toggle each cgarater
//1
// let s = prompt("Enter a string")
// console.log(s);
// let toggle = "";
// for (let i = 0; i < s.length - 1; i++) {
//     let ch = s.charAt(i);

//     if (s.charCodeAt(i) > 65 && s.charCodeAt(i) <= 90) {
//        toggle = toggle + String.fromCharCode(s.charCodeAt(i) + 32);
//     }else if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
//        toggle = toggle + String.fromCharCode(s.charCodeAt(i) - 32);
//     }
// }
// console.log(toggle);

//2
// let s = prompt("Enter a string")
// console.log(s);
// let toggle = "";
// for (let i = 0; i < s.length - 1; i++) {
//     let ch = s.charCodeAt(i);

//     if (ch > 65 && ch <= 90) {
//         toggle = toggle + String.fromCharCode(ch + 32);
//     } else if (ch >= 97 && s.ch <= 122) {
//         toggle = toggle + String.fromCharCode(ch - 32);
//     }
// }
// console.log(toggle);


//QUestion:frequency of each charater
// let s = prompt("enter  a number")
// let arr = new Array(128).fill(0)

// for (let i = 0; i < s.length; i++) {
//     let indx = s.charCodeAt(i);
//     arr[indx] = arr[indx] + 1;
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(String.fromCharCode(i) + " appears at " + arr[i] + "times");

//     }

// }
// console.log(arr);






