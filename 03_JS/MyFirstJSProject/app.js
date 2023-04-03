// console.log("Log: hello world");
// console.warn("Warn: Hello World");
// console.debug("Debug: hello world");
// console.info("Info: hello world");
// console.error("Error: hello world");
// console.table(["Ahmed", "Mohammed", "Mahmoud"]);
// console.log(
//   "Hello form the %cJS %cFile",
//   "color:red; font-size:1.6em",
//   "color:blue; font-size: 1.2em; font-weight: bold"
// );
// /*  Data Types:
//         - string
//         - number (integer, floating-point)
//         - boolean
//         - object (array, map, null, object)
//         - undefined
// */

// let fullName = "Motasem Abunima";
// let age = 23;
// let gpa = 85.51;
// let isGraduated = true;
// let skills = ["Linux", "Cloud Computing", "Programming"];
// let student = {
//   fullName: fullName,
//   age: age,
//   gpa: gpa,
//   isGraduated: isGraduated,
//   skills: skills,
// };

// console.log(`fullName ${fullName}`, "Type Of: " + typeof fullName);
// console.log(`age ${age}`, "Type Of: " + typeof age);
// console.log(`gpa ${gpa}`, "Type Of: " + typeof gpa);
// console.log(`isGraduated ${isGraduated}`, "Type Of: " + typeof isGraduated);
// console.log(`skills ${skills}`, "Type Of: " + typeof skills);
// console.log(`student ${student}`, "Type Of: " + typeof student);
// console.log(`null ${null}`, "Type Of: " + typeof null);
// console.log(`undefined ${undefined}`, "Type Of: " + typeof undefined);

// console.log("Hello from Windows");

// let a = "I love";
// let b = "HTML";
// let c = "CSS";
// let d = "JS";

// var element = document.createElement("p");
// element.textContent = a + " " + b;
// document.body.appendChild(element);

// Template Literals
// console.log(`${a} ${b}, ${c}, and ${d}.`);

// var name = "Motasem Abunima";
// var title = "Solutions Architect";

// let markup = `
//     <div class="card">
//         <img src="https://via.placeholder.com/100/f00/fff?text=I+Love+JS" alt="Card Image" />
//         <div class="info">
//             <h2>${name}</h2>
//             <p>${title}</p>
//         </div>
//     </div>
// `;

// document.body.innerHTML = markup;

// // Exercise:
// var articleTitle = "Elzero",
//   articleDescription = "Elzero Web School",
//   articleDate = "25/10";

// let htmlMarkup = `
//         <article>
//             <h3>Hello ${articleTitle}</h3>
//             <p>${articleDescription}</p>
//             <span>${articleDate}</span>
//         </article>
// `;

// var articlesContainer = document.createElement("div");
// articlesContainer.className = "articles-container";
// articlesContainer.innerHTML = htmlMarkup.repeat(4);
// document.body.appendChild(articlesContainer);

// Unary Plus && Unary Negation

// console.log("Unary Plus");
// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Mohammed");
// console.log(+2.6);
// console.log(+0xff);
// console.log(+true);
// console.log(+false);
// console.log(+null);
// console.log(+"");

// console.log("Unary Negation");
// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Mohammed");
// console.log(-2.6);
// console.log(-0xff);
// console.log(-true);
// console.log(-false);
// console.log(-null);
// console.log(-"");

// Exercise 2

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); // 2000
// console.log(-d + ++f + ++e * ++g); // 173

// million = 1_000_000;
// billion = 1_000_000_000;

// console.log(million, billion);
// console.log(1e6);
// console.log(Math.PI);
// console.log(Math.E);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.EPSILON);

// console.log((100).toString());
// console.log((12.2532).toFixed(2));
// console.log(parseInt("100"));
// console.log(parseFloat("100.23"));
// console.log(isNaN("100e"));
// console.log(Number.isInteger("100"));

// console.log(Math.min(10, 20, 30, -20, 24, 99));
// console.log(Math.max(10, 20, 30, -20, 24, 99));
// console.log(Math.trunc(999.99));
// console.log(Math.round(999.99));

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.trunc(Math.min(a, b, c, d)));
// console.log(Math.pow(a, Math.round(d)));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(d.toFixed());

// console.log((Math.floor(b) / Math.ceil(d)).toPrecision(4).toString()); // 66.67 => String
// console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number

// let myName = "Motasem Abunima";
// console.log(myName[2]);
// console.log(myName.charAt(2));
// console.log(myName.length);
// console.log(myName.substring(2, 9));
// console.log(myName.replace("m", "g"));
// console.log(myName.indexOf("n"));
// console.log(myName.slice(2, 6));
// console.log(myName.charCodeAt(3));
// console.log(myName.concat(", I love you so much"));
// console.log(myName.startsWith("m"));
// console.log(myName.endsWith("m"));
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// let username = "Motasem Abunima";
// let email = "motasemabunima@gmail.com";
// let age = 23;

// console.log(`Username: ${username}
// Email: ${email}
// Age: ${age}`);

// let a = "Elzero Web School";
// let arrayOfSplittedString = a.split(" ");

// console.log(a.indexOf("o"));
// console.log(a.lastIndexOf("o"));
// console.log(a.slice(6));
// console.log(a.replace("o", "g"));
// console.log(a.repeat(4));
// console.log(a.concat(" I lovey you"));
// console.log(a.startsWith("g"));
// console.log(a.endsWith("l"));
// console.log(a.includes("Web"));
// console.log(a.substring(7, 10));
// console.log(arrayOfSplittedString.push("Sami"));
// console.log(arrayOfSplittedString.push("Fawzy"));
// console.log(arrayOfSplittedString.join(", "));
// arrayOfSplittedString.map((v) => {
//   console.log(v);
// });

// arrayOfSplittedString.filter((v) => {
//   if (v.startsWith("S")) console.log(v);
//   else console.log("Not found...");
// });

// arrayOfSplittedString.forEach((v, i) => {
//   console.log(i, v);
// });

// arrayOfSplittedString.pop();
// arrayOfSplittedString.pop();
// console.log(arrayOfSplittedString);

// // Challenge:
// let a = "Elzero Web School";
// console.log(a.charAt(2).toUpperCase().concat(a.slice(3, 6)));
// console.log(
//   a
//     .charAt(a.length - 4)
//     .repeat(8)
//     .toUpperCase()
// );
// console.log(a.split(" ", 1));
// console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);
// console.log(`${a.substring(0, 6)} ${a.substring(11)}`);
// console.log(
//   `${a[0].toLowerCase()}${a.substring(1, a.length - 1).toUpperCase()}${a[
//     a.length - 1
//   ].toLowerCase()}`
// );

// console.log(typeof "Motasem" === typeof "Aya");
// console.log(10 === "10" && 50 === 50.0);
// console.log("Ahmed" == "Sameer" || "Sally" == "Alaa");
// console.log(!false);

// let price = 100;
// let hasADiscount = false;
// let country = "Palestine";

// console.log("Before", price);

// if (country.toLowerCase() === "egypt") {
//   price -= 30;
// } else if (hasADiscount === true) {
//   price -= 25;
// } else {
//   price -= 10;
// }

// console.log("After", price);

// Ternary Operators (condition ? true : false)

// let theName = "Fawzy";
// let theGender = "Male";
// let theAge = 32;

// theGender === "Male"
//   ? theAge >= 18
//     ? console.log(`Mr. ${theName}`)
//     : console.log(`Oh boy, ${theName}`)
//   : console.log(`Mrs. ${theName}`);

// console.log(
//   `Hello ${theGender.toLowerCase() === "male" ? "Mr." : "Mrs."} ${theName}`
// );

// Falsy values: null, undefined, 0, "", false
let price = null;

// console.log(`the price is ${price || 100}`); // pipe
// console.log(`the price is ${price ?? 100}`); // null coalescing operator

// Challenge
// let a = 10;

// if (a < 10) {
//   console.log("< 10");
// } else if (a > 10 && a < 40) {
//   console.log("10 to 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// a < 10
//   ? console.log("< 10")
//   : a > 10 && a < 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");

// let st = "Elzero Web School";

// if ((st.length * 2).toString() === "34") {
//   console.log("Good");
// }

// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// if (!typeof st !== "string") {
//   console.log("Good");
// }

// if (typeof st.length === "number") {
//   console.log("Good");
// }

// if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// let job = "Manager";
// let salary = 0;

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
// }

// console.log(`Job: ${job}\tSalary: ${salary}`);

// let holidays = 0;
// let money = 0;

// if (holidays == 0) {
//   money = 5000;
// } else if (holidays == 1 || holidays == 2) {
//   money = 3000;
// } else if (holidays == 3) {
//   money = 2000;
// } else if (holidays == 4) {
//   money = 1000;
// } else if (holidays == 5) {
//   money = 0;
// } else {
//   money = 0;
// }

// console.log(`My money is ${money}`);

// let myFriends = ["Ahmed", "Mohammed", "Mahmoud", "Sami", ["Marwan", "Rami"]];

// console.log(`Hello, ${myFriends[0]}`);
// console.log(`Hello, ${myFriends[2]}`);
// console.log(`Hello, ${myFriends[myFriends.length - 1][1]}`);
// console.log(`Hello, ${myFriends[myFriends.length - 1][1][3]}`);
// console.log(typeof myFriends);
// console.log(Array.isArray(myFriends));
// console.log(Array.isArray(myFriends[0]));

// console.log("Hi from Windows");
/*
 unshift & shift => adds or remove elements from the first
 push & pop => adds or remove elements from the last 
*/

// let courses = [
//   "Programming I",
//   "Programming II",
//   "Operating Systems",
//   "Distributed Systems",
//   "Data Science",
//   "Computer Architecture",
//   "Linear Algebra",
//   "Mathematics",
//   "Calculus",
//   "Data Structures and Algorithms",
//   "Web Development",
//   "Android Development",
//   "iOS Development",
// ];

// console.log(`Number of Courses: ${courses.length}`);
// console.log(courses);

// console.log(courses.push("Machine Learning"));
// console.log(courses);
// console.log(courses.pop());
// console.log(courses.unshift("Introduction to Computer Science"));
// console.log(courses);
// console.log(courses.shift());

// console.log(`Number of Courses: ${courses.length}`);

// console.log(courses.sort());
// console.log(courses.reverse());
// console.log(courses);

// console.log(courses.slice(2, -2));
// courses.splice(
//   3,
//   5,
//   "Game Development",
//   "Cloud Computing",
//   "Pervasive Computing"
// );
// console.log(courses);

// let newCourses = courses.concat("Graduation Research", "Graduation Project");
// console.log(newCourses);

// console.log(courses.join());
// console.log(courses.join(", "));
// console.log(courses.join(""));
// console.log(courses.join(" "));
// console.log(courses.join("|"));
// console.log(courses.join(" @ ").toLowerCase());

// Array Challenge:
// let zero = 0;
// let counter = 3;
// let myArray = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// myArray.splice(++counter, 2);

// console.log(myArray.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]
// console.log(myArray.slice(++zero, --counter)); // ["Elham", "Mazero"]
// console.log(myArray[--counter].replace("Ma", "El")); // "Elzero"
// console.log(
//   `${myArray[counter].charAt(4)}${myArray[counter].charAt(5).toUpperCase()}`
// ); // "rO"

// let myFriends = ["Ahmed", "Mohammed", "Mahmoud", "Sami", "Ali", "Adel"];

// console.log("for");
// for (let index = 0; index < myFriends.length; index++) {
//   console.log(myFriends[index]);
// }

// console.log("for each");
// myFriends.forEach((e) => {
//   console.log(e);
// });

// console.log("for in");
// for (const friend in myFriends) {
//   console.log(myFriends[friend]);
// }

// console.log("for of");
// for (const friend of myFriends) {
//   console.log(friend);
// }

// let myArray = [1, 2, 3, "Ahmed", "Fawzy", "Sami", 4, "Tahseen", 5];
// let onlyStrings = [];
// let onlyNumbers = [];

// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == "string") {
//     onlyStrings.push(myArray[i]);
//   } else if (typeof myArray[i] == "number") {
//     onlyNumbers.unshift(myArray[i]);
//   }
// }

// console.log(onlyStrings);
// console.log(onlyNumbers);

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Blue"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     if (colors[j] == "Green") break mainLoop;
//     console.log(`- ${colors[j]}`);
//   }
// }

console.log("Hi from Ubuntu...");

// let products = [
//   "Keyboard",
//   "Mouse",
//   "Pen",
//   "Pad",
//   "Monitor",
//   "iPhone",
//   "iPad",
//   "iMac",
// ];
// let colors = ["Red", "Green", "Blue"];
// let counts = 5;

// document.write(`<h2>Show ${counts} products</h2>`);

// for (let i = 0; i < counts; i++) {
//   document.write(`<div>`);
//   document.write(`[${i + 1}] ${products[i]}`);
//   document.write(` <p> ${colors.join(" | ")} </p>`);
//   document.write(`</div>`);
// }

// let products = [
//   "Keyboard",
//   "Mouse",
//   "Pen",
//   "Pad",
//   "Monitor",
//   "iPhone",
//   "iPad",
//   "iMac",
// ];
// let colors = ["Red", "Green", "Blue"];

// var index = 0;
// while (index <hr products.length) {
//   console.log(`[${index + 1}] ${products[index]}`);

//   if (index === 3) break;
//   index++;
// }

// do {
//   console.log("The End..");
// } while (false);

// Loop Challenge

// let admins = [
//   "Ahmed",
//   "Fareed",
//   "Haitham",
//   "Stop",
//   "Sameera",
//   "Mousa",
//   "Osama",
// ];
// let employees = [
//   "Fawzy",
//   "Sami",
//   "Amjad",
//   "Fehmi",
//   "Omar",
//   "Hamdi",
//   "Mohammed",
//   "Fathi",
//   "Mahmoud",
//   "Ali",
//   "Hassan",
//   "Samia",
//   "Othman",
//   "Osama",
// ];

// document.write(`<h1>We have ${admins.length} admins</h1>`);
// document.write("<hr>");
// let counter = 0;

// for (let i = 0; i < admins.length; i++) {
//   if (admins[i].toLowerCase() === "stop") continue;

//   document.write("<div>");
//   document.write(`<h2>The admin for team ${i + 1} is ${admins[i]}<h2>`);
//   document.write("<h3>Team members: </h3>");

//   for (let j = 0; j < employees.length; j++) {
//     if (admins[i][0] === employees[j][0]) {
//       document.write(`<p> ${++counter} - ${employees[j]}</p>`);
//     }
//   }

//   counter = 0;
//   document.write("<hr>");
//   document.write("</div>");
// }

// const myArray = [1, 2, 3, 4, 5];

// if (
//   [...myArray].includes(1) &&
//   [...myArray].includes(2) &&
//   [...myArray].includes(3)
// ) {
//   console.log("myArray contains 1, 2, and 3");
// } else {
//   console.log("myArray does not contain 1, 2, and 3");
// }

// function generateYears(start, end, excluded) {
//   for (let i = start; i <= end; i++) {
//     if (i === excluded) continue;
//     if (i === 2000) return "Interrupting..";
//     console.log(i);
//   }
//   console.log(typeof excluded);
//   console.log(end - start);
// }

// generateYears(1948, 2023, [2019, 2020, 2021]);

// function concatOrSum(p0, p1) {
//   return p0 + p1;
// }

// var result = concatOrSum("Osama", " Mohamed");
// console.log(result);
// result = concatOrSum(7, 8);
// console.log(result);

// Shorthand function (Arrow Function)
// const addition = (a, b) => a + b;
// const subtraction = (a, b) => a - b;
// const multiplication = (a, b) => a * b;
// const division = (a, b) => a / b;
// const modulus = (a, b) => a % b;
// const power = (a, b) => a ** b;

// console.log(addition(2, 5));
// console.log(subtraction(2, 5));
// console.log(multiplication(2, 5));
// console.log(division(2, 5));
// console.log(modulus(2, 5));
// console.log(power(2, 5));

// function sum(...numbers) {
//   var sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// function avg(...numbers) {
//   return sum(...numbers) / numbers.length;
// }

// const numbers = [10, 20, 30, 40, 50];

// console.log(
//   `The list of numbers are: 10, 20, 30, 40, 50\nSum:\t${sum(
//     ...numbers
//   )}\nAvg:\t${avg(...numbers)}`
// );

// function showInfo(
//   userName = "Unknown",
//   age = "Unknown",
//   rate = 0,
//   showSkills = false,
//   ...skills
// ) {
//   document.write("<div>");
//   document.write(`<h2>Welcome, ${userName}</h2>`);
//   document.write(`<p>Age: ${age}</p>`);
//   document.write(`<p>Hourly rate: ${rate}</p>`);
//   if (showSkills) {
//     if (skills.length > 0) {
//       document.write(`Skills: ${skills.join(" | ")}`);
//     } else {
//       document.write("No skills to show");
//     }
//   } else {
//     if (skills.length == 0) document.write("No skills to show");
//     else document.write("Skills is hidden");
//   }
//   document.write("</div>");
// }

// showInfo(
//   "Motasem Abunima",
//   23,
//   20,
//   true,
//   "HTML",
//   "CSS",
//   "JS",
//   "Angular",
//   "AWS",
//   "Linux"
// );

// function showDetails(p0, p1, p2) {
//   var candidateName = "Unknown",
//     candidateAge = 0,
//     candidateStatus = false;
//   for (let i = 0; i < arguments.length; i++) {
//     typeof arguments[i] === "string"
//       ? (candidateName = arguments[i])
//       : typeof arguments[i] === "number"
//       ? (candidateAge = arguments[i])
//       : typeof arguments[i] == "boolean"
//       ? (candidateStatus = arguments[i])
//       : Error("Something went wrong");
//   }

//   console.log(
//     `Hello ${candidateName}, You are ${candidateAge} years old, ${
//       candidateStatus
//         ? "You are available for hire."
//         : "You are not available for hire."
//     }`
//   );
// }

// showDetails("Ahmed", 28, true);
// showDetails(28, true, "Ahmed");
// showDetails(true, "Ahmed", 28);
// showDetails("Ahmed", 28);

// Anonymous Function

// let calculator = function (x, y) {
//   return x + y;
// };
// let calculator1 = (x, y) => {
//   return x + y;
// };
// let calculator2 = (x, y) => x + y;
// console.log(calculator(2, 3));

// setTimeout(() => {
//   console.log("Ramadan Kareem :)");
// }, 2000);

// setInterval(() => {
//   console.log("Ramadan Kareem :)");
// }, 2000);

// var a = 1;
// let b = 2;

// function myFun() {
//   var a = 10;
//   let b = 20;
//   console.log(`From local function, a = ${a} and b = ${b}`);
// }

// console.log(`From global, a = ${a} and b = ${b}`);

// myFun();

// // var is global (function scope) scope and can be reassigned
// // let is local (block scope) and can be reassigned within the scope
// // const is (block scope) but cannot be reassigned

// Arrow Function Challenge

// let names = (...listOfNames) =>
//   `${(typeof listOfNames[0])[0]
//     .toUpperCase()
//     .concat((typeof listOfNames[0]).substring(1))} ${listOfNames
//     .map((e) => {
//       return `[${e}]`;
//     })
//     .join(", ")} => Done !`;

// console.log(names("Osama", "Mohammed", "Ali", "Ibrahim"));
// // String [Osama], [Mohammed], [Ali], [Ibrahim] => Done !

// let myNumbers = [20, 50, 10, 60];
// let calc = function (one, two, ...nums) {
//   return one + two + nums[1];
// };

// console.log(calc(10, 20, ...myNumbers)); // 80

// Higher Order Function (map, filter, reduce, etc...)

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -23, 15, 125, -30];
// let ignoreNumbers = "Elz123er40o";

// let mapSwappingCases = swappingCases
//   .split("")
//   .map((e) => (e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()))
//   .join("");

// let mapInvertedNumbers = invertedNumbers.map((e) => -e);

// let mapIgnoreNumbers = ignoreNumbers
//   .split("")
//   .map((e) => (isNaN(e) ? e : ""))
//   .join("");

// let filterIgnoreNumbers = ignoreNumbers
//   .split("")
//   .filter((e) => isNaN(e))
//   .join("");

// console.log(mapSwappingCases);
// console.log(mapInvertedNumbers);
// console.log(mapIgnoreNumbers);
// console.log(filterIgnoreNumbers);

// let friends = [
//   "Ahmed",
//   "Sameh",
//   "Samah",
//   "Sayed",
//   "Amjad",
//   "Israa",
//   "Adel",
//   "Ibrahim",
//   "Ali",
// ];

// let numbers = [3, 5, 7, 9, 11, 13, 20, 23, 39, 36, 72, 87, 99, 102];

// let friendsStartWithA = friends
//   .filter((element) => element[0] === "A")
//   .join(" | ");

// let evenNumbers = numbers.filter((element) => element % 2 == 0).join(" | ");

// let primaryNumbers = numbers
//   .filter((element) => {
//     let tempArray = [];
//     for (let i = 1; i <= element; i++) {
//       if (element % i == 0) {
//         tempArray.push(i);
//       }
//     }
//     return tempArray.length == 2;
//   })
//   .join(" | ");

// console.log("Friends start with the letter A:", friendsStartWithA);
// console.log("Even Numbers:", evenNumbers);
// console.log("Primary Numbers:", primaryNumbers);

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       console.log(`Square root of ${number} is ${Math.sqrt(number)}`);
//       return false;
//     }
//   }

//   return true;
// }

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const listOfNumbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 103, 105, 107, 109, 111, 117, 113,
// ];

// const primeNumbers = listOfNumbers.filter(isPrime).join(" | ");

// console.log(primeNumbers);

// let sentence = "I love food code too playing much";
// console.log(
//   sentence
//     .split(" ")
//     .filter((e) => e.length <= 4)
//     .join(" ")
// );

// let mix = "A13BS2ZX";

// console.log(
//   "Filter Strings and multiply numbers:",
//   mix
//     .split("")
//     .filter((e) => !isNaN(e))
//     .map((e) => e * e)
//     .join(" | ")
// );

let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let reducedNums = nums.reduce(
  (accumulator, element) => (accumulator += element),
  50
);

console.log(reducedNums);
