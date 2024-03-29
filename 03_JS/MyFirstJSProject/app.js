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
// let price = null;

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

// console.log("Hi from Ubuntu...");

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

// let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let reducedNums = nums.reduce(
//   (accumulator, element) => (accumulator += element),
//   50
// );

// console.log(reducedNums);

// let theBiggest = [
//   "Bla",
//   "Propaganda",
//   "Other",
//   "Ahmed",
//   "Battery",
//   "Car",
//   "Monitor",
// ];
// let removeCharacters = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let reduceTheBiggest = theBiggest.reduce((accumulator, currentValue) =>
//   accumulator.length > currentValue.length ? accumulator : currentValue
// );

// let reduceRemoveCharacters = removeCharacters.reduce(
//   (accumulator, currentValue) => {
//     if (currentValue !== "@") accumulator += currentValue;

//     return accumulator;
//   }
// );

// let filterRemoveCharacters = removeCharacters.filter((e) => e !== "@").join("");

// console.log(reduceTheBiggest);
// console.log(reduceRemoveCharacters);
// console.log(filterRemoveCharacters);

// forEach does NOT return anything, it returns undefined

// Higher Order Function Challenge..

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split(",")
//   .filter((e) => isNaN(e))
//   .map((e) => {
//     let newElement = e.replace("_", " ").replace("Z", " ");
//     return newElement[0];
//   })
//   .reduce((acc, e) => {
//     return (acc += e);
//   });

// console.log(solution); // Elzero Web School

// ! Getting started With "Object Oriented Programming"
/*
1. Encapsulation
2. Inheritance
3. Abstraction
4. Polymorphism
*/

// let user = {
//   name: "Motasem",
//   age: 23,
//   sayHi: function () {
//     return `Hi, My name is ${this.name}. I am ${this.age} years old.`;
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.sayHi());

// let person = new Object();

// person["name"] = "Ahmed";
// person.age = 29;

// console.log(
//   `Hi, this is ${person.name}, his age is ${person["age"]} years old`
// );

// console.log(`Object Keys`, Object.keys(person));
// console.log(`Object Values`, Object.values(person));

// let { name, age } = person;
// console.log(`Person Name: ${name}\tPerson Age: ${age}`);

// let car = Object.create({
//   name: "Kia",
//   model: "Hijacking",
//   year: "2022",
// });

// console.log("Car description", car.name, car.model, car.year);

// let vehicle = Object.assign(user, person);

// console.log(vehicle);

// DOM => Document Object Model
// BOM => Browser Object Model

// for (let i = 0; i < 100; i++) {
//   let productDiv = document.createElement("div");
//   let productTitle = document.createElement("h3");
//   let productDescription = document.createElement("p");

//   let productTitleText = document.createTextNode(`Product Title ${i + 1}`);
//   let productDescriptionText = document.createTextNode(
//     `Product Description ${i + 1}`
//   );

//   productDiv.className = "product";
//   document.body.appendChild(productDiv);

//   productTitle.appendChild(productTitleText);
//   productDescription.appendChild(productDescriptionText);

//   productDiv.appendChild(productTitle);
//   productDiv.appendChild(productDescription);
// }

// DOM Challenge

// const globalStyles = `
//                     margin: 0;
//                     font-family: Tahoma, Arial;
//                     background-color: rgb(236, 236, 236);
//                     box-sizing: border-box;`;
// const headerStyles = `
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     padding: 20px;
//                     background-color: rgb(255, 255, 255);
//                     box-shadow: 1px 2px 3px #e4e5e5`;
// const logoStyles = `
//                     font-weight: bold;
//                     color: rgb(35, 169, 110);
//                     font-size: 26px;`;
// const menuStyles = `
//                     padding: 0px;
//                     margin: 0px;
//                     display: flex;
//                     list-style: none;`;
// const contentStyles = `
//                     display: grid;
//                     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//                     gap: 30px;
//                     padding: 20px;`;
// const productStyles = `
//                     padding: 20px;
//                     background-color: white;
//                     border: 1px solid rgb(221, 221, 221);
//                     text-align: center;
//                     color: rgb(136, 136, 136);
//                     border-radius: 6px;`;
// const spanStyles = `
//                     display: block;
//                     font-size: 40px;
//                     color: black;
//                     margin-bottom: 10px;
//                     margin-top: 10px;`;
// const footerStyles = `
//                     background-color: rgb(35, 169, 110);
//                     color: white;
//                     font-size: 22px;
//                     text-align: center;
//                     padding: 20px;
//                     margin: 20px auto 0;
//                     `;

// document.body.style.cssText = globalStyles;

// let headerElement = document.createElement("header");
// headerElement.style.cssText = headerStyles;
// let logoElement = document.createElement("a");
// logoElement.className = "logo";
// logoElement.textContent = "Elzero";
// logoElement.style.cssText = logoStyles;

// let menuElement = document.createElement("ul");
// menuElement.className = "menu";
// menuElement.style.cssText = menuStyles;

// let HomeListElement = document.createElement("li");
// HomeListElement.innerHTML = "Home";
// let AboutListElement = document.createElement("li");
// AboutListElement.innerHTML = "About";
// let ServicesListElement = document.createElement("li");
// ServicesListElement.innerHTML = "Services";
// let ContactListElement = document.createElement("li");
// ContactListElement.innerHTML = "Contact";

// menuElement.appendChild(HomeListElement);
// menuElement.appendChild(AboutListElement);
// menuElement.appendChild(ServicesListElement);
// menuElement.appendChild(ContactListElement);

// for (let i = 0; i < menuElement.children.length; i++) {
//   const element = menuElement.children[i];
//   element.style.marginRight = "10px";
// }

// headerElement.appendChild(logoElement);
// headerElement.appendChild(menuElement);

// let contentElement = document.createElement("div");
// contentElement.className = "content";
// contentElement.style.cssText = contentStyles;

// for (let i = 0; i < 16; i++) {
//   let productElement = document.createElement("div");
//   productElement.className = "product";
//   productElement.style.cssText = productStyles;
//   let productNumberElement = document.createElement("span");
//   productNumberElement.style.cssText = spanStyles;
//   productNumberElement.textContent = `${i + 1}`;
//   productElement.appendChild(productNumberElement);
//   productElement.append("Product");
//   contentElement.appendChild(productElement);
// }

// let footerElement = document.createElement("footer");
// footerElement.textContent = "Copyright 2023";
// footerElement.style.cssText = footerStyles;

// document.body.appendChild(headerElement);
// document.body.appendChild(contentElement);
// document.body.appendChild(footerElement);

// BOM => Browser Object Model

// let alertValue = alert("Hello, I love you!")
// let confirmValue = confirm("I want to be a Prompt Engineer")
// console.log(typeof confirmValue, confirmValue);
// let promptValue = prompt("Please write down your email", "Your email should be unique and valid")
// console.log(typeof promptValue, promptValue);

// setTimeout & setInterval
// let stopButton = document.querySelector("button");

// let counter = setTimeout(
//   () => console.log("setTimeout")
// , 2000);

// stopButton.onclick = function () {
//   clearTimeout(counter)
// }

// console.log(counter);

// let showProfile = setTimeout(profile, 3000, "motasemabuinma", "motasemabunima@gmail.com")
// function profile(username, email){
//   console.log(`Username: ${username}\tEmail address: ${email}`);
// }
// console.log(showProfile);
// stopButton.onclick = () => clearTimeout(showProfile)

// setInterval(() => {
//   console.log("setInterval");
// }, 2000);

// clearInterval(1)

// let intervalCounter = setInterval(() => {
//   console.log("setInterval");
// }, 2000);

// console.log(intervalCounter);

// stopButton.onclick = () => {
//   clearInterval(intervalCounter)
// }

// let myDiv = document.querySelector("div")
// function countDown() {
//     myDiv.innerHTML -= 1;
//     if(myDiv.innerHTML === "0")
//       clearInterval(divInterval)
// }

// let divInterval = setInterval(countDown, 1000)

// stopButton.onclick = () => {
//   clearInterval(divInterval)
// }

// setTimeout(function () {
//   let myNewWindow = window.open("https://google.com", "_blank", "width=500,height=500,left=200,top=100")
//   setTimeout(() => {
//     myNewWindow.close()
//     console.log("Closed...");
//   }, 3000);
// }, 3000)

// window.scrollTo({
//     left: 500,
//     top: 200,
//     behavior: "smooth"
// })

// window.scrollBy({
//     left: 500,
//     top: 200,
//     behavior: "smooth"
// })

// let btnScrollToTop = document.querySelector("button");

// window.onscroll = () => {
//   if (window.scrollY >= 600) {
//     btnScrollToTop.style.display = "block";
//   } else {
//     btnScrollToTop.style.display = "none";
//   }
// };

// window.onclick = () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };

// Working with local storage

// console.log(localStorage)
// console.log(localStorage.length)
// console.log(typeof localStorage);

// localStorage.setItem("color", "#f00")
// localStorage.fontSize = "30px"
// localStorage['fontWeight'] = "bolder"

// console.log(localStorage.getItem("color"))
// console.log(localStorage.fontSize)
// console.log(localStorage[`fontWeight`])

// console.log(localStorage.key(2))
// localStorage.removeItem('color')
// localStorage.clear()
// document.body.style.backgroundColor = localStorage.getItem("color")
// document.body.style.fontSize = localStorage.fontSize
// document.body.style.fontWeight = localStorage.fontWeight

// Local Storage Practicing...

// let lis = document.querySelectorAll("ul li")
// let exp = document.querySelector(".experiment")

// if(localStorage.getItem("color")){
//     exp.style.backgroundColor = localStorage.getItem("color");
//     lis.forEach((li) => li.classList.remove("active"))
//     document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active")
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.dataset.color);
//         lis.forEach((li) => li.classList.remove("active"))
//         e.currentTarget.classList.add("active")

//         localStorage.setItem("color", e.currentTarget.dataset.color)
//         exp.style.backgroundColor = localStorage.getItem("color")
//     })
// })

// let taskInput = document.querySelector(`input[type="text"]`);
// let submitInput = document.querySelector(`input[type="submit"]`);
// let tasksList = document.querySelector(`.tasks`);

// let ulTag = document.createElement("ul");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const renderTasks = () => {
//   tasksList.appendChild(ulTag);
//   ulTag.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     const text = document.createTextNode(task);
//     li.appendChild(text);

//     const deleteButton = document.createElement("span");
//     deleteButton.innerHTML = "Delete";
//     deleteButton.addEventListener("click", () => {
//       tasks.splice(index, 1);
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//       renderTasks();
//     });

//     li.appendChild(deleteButton);
//     ulTag.appendChild(li);
//   });
// };

// taskInput.addEventListener("input", () => {
//   if (taskInput.value.trim() !== "") {
//     submitInput.removeAttribute("disabled");
//   } else {
//     submitInput.setAttribute("disabled", true);
//   }
// });

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const task = taskInput.value.trim();
//   if (task !== "") {
//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     taskInput.value = "";
//     renderTasks();
//   }
// });

// renderTasks();

// Array Destructuring

// let myFriends = [
//   "Ahmed",
//   "Sayed",
//   "Ali",
//   ["Shady", "Amr", ["Mohamed", "Gamal"]],
// ];

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a, b);

// let x = 10,
//   y = 5;

// console.log(`Before x = ${x}, y = ${y}`);

// // let temp = x;
// // x = y;
// // y = temp;

// [x, y] = [y, x];

// console.log(`After x = ${x}, y = ${y}`);

// const user = {
//   firstName: "Motasem",
//   lastName: "Abunima",
//   age: 23,
//   gpa: 85.51,
//   isGraduated: true,
//   courses: [
//     "Programming",
//     "Operating Systems",
//     "Distributed Systems",
//     "Cloud Computing",
//     "Calculus",
//   ],
//   jobTitle: "Software Developer",
//   address: {
//     location: {
//       latitude: 192.2341,
//       longitude: 37.24301,
//     },
//     country: "Palestine",
//     city: "Gaza",
//     street: "Yaffa St.",
//     zipCode: 28110,
//   },
// };

// console.log(user.firstName, user.lastName);
// console.log(user.age, user.isGraduated);
// console.log(`Courses: ${user.courses.join(" | ")}`);
// console.log(
//   `Address:\nLocation: (${user.address.location.latitude}, ${user.address.location.longitude})\nCountry: ${user.address.country}\nCity: ${user.address.city}\nStreet: ${user.address.street}\nZip Code: ${user.address.zipCode}`
// );

// ({
//   firstName,
//   lastName,
//   age,
//   gpa,
//   isGraduated,
//   courses,
//   address: {
//     location: { latitude, longitude },
//     country,
//     city: c,
//     street: s,
//     zipCode: z,
//   },
// } = user);

// console.log(
//   firstName,
//   lastName,
//   age,
//   isGraduated,
//   gpa,
//   courses[4],
//   latitude,
//   longitude,
//   c,
//   s,
//   z
// );

// function showDetails({
//   firstName,
//   lastName,
//   jobTitle,
//   address: {
//     location: { latitude, longitude },
//     country,
//     city,
//     street,
//     zipCode,
//   },
// } = user) {
//   console.log(
//     `Hi ${firstName} ${lastName}, Your current job title is ${jobTitle}`
//   );
//   console.log(
//     `Your full address is ${country} - ${city} - ${street} - ${zipCode} - (${latitude}, ${longitude})`
//   );
// }

// showDetails(user);

// Destructuring (Array, Object, Function) challenge

// let chosen = prompt("Enter the chosen number");
// let myFriends = [
//   {
//     title: "Osama Mohamed",
//     age: 39,
//     available: true,
//     skills: ["Java", "Spring"],
//   },
//   {
//     title: "Ahmed Ali",
//     age: 25,
//     available: false,
//     skills: ["Python", "Django"],
//   },
//   {
//     title: "Adel Fawzy",
//     age: 28,
//     available: true,
//     skills: ["PHP", "Laravel"],
//   },
//   {
//     title: "Rakan Ahmed",
//     age: 32,
//     available: false,
//     skills: ["JavaScript", "NodeJS"],
//   },
//   {
//     title: "Ahmed Sami",
//     age: 19,
//     available: true,
//     skills: ["C#", "ASP.NET"],
//   },
//   {
//     title: "Tawfiq Okasha",
//     age: 36,
//     available: false,
//     skills: ["Ruby", "RubyOnRails"],
//   },
// ];

// try {
//   let {
//     title: empName,
//     age,
//     available,
//     skills: [, lastSkill],
//   } = myFriends[chosen - 1];

//   console.log(empName);
//   console.log(age);
//   console.log(available ? "available" : "not available");
//   console.log(lastSkill);
// } catch (error) {
//   console.log(`Something went wrong:\n${error}`);
// }

// const weekDays = new Set([
//   "Saturday",
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
// ]);

// console.log(weekDays, typeof weekDays);

// let myMap = new Map();

// myMap.set("username", "motasemabunima");
// myMap.set("email", "motasemabunima@gmail.com");

// myMap.set("email", "moatasem.abunema@gmail.com");

// console.log(myMap.delete("password"));
// console.log(myMap.get("username"));

// console.log(myMap.keys());
// console.log(myMap.values());

// console.log(myMap.entries());
// console.log(myMap.size);
// console.log(myMap.has("password"));
// myMap.forEach((v, k) => {
//   console.log("key", k);
//   console.log("value", v);
// });

// myMap.clear();
// console.log(myMap);

// const user = {
//   firstName: "Motasem",
//   lastName: "Abunima",
//   age: 23,
//   gpa: 85.51,
//   isGraduated: true,
//   courses: [
//     "Programming",
//     "Operating Systems",
//     "Distributed Systems",
//     "Cloud Computing",
//     "Calculus",
//   ],
//   jobTitle: "Software Developer",
//   address: {
//     location: {
//       latitude: 192.2341,
//       longitude: 37.24301,
//     },
//     country: "Palestine",
//     city: "Gaza",
//     street: "Yaffa St.",
//     zipCode: 28110,
//   },
// };

// let myWeakMap = new WeakMap();

// myWeakMap.set(user, "Object values");

// console.log(myWeakMap);

// console.log(myWeakMap.get(user));
// console.log(myWeakMap.delete(user));
// console.log(myWeakMap.has("something"));

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log([...n1, ...n2].length * new Set(n1).size * Math.min(...n2));

/*
Getting started with regular expression (Regex)
    - Email
    - Username
    - Password
    - Phone
    - IP
    - URL
*/

// let myString = `I love Motasem Abunima. motasem is a lovely person.`;

// let pattern = /motasem/gi;
// let pattern2 = new RegExp("motasem", "gi");

// console.log(myString.match(pattern));
// console.log(pattern.test(myString));

// console.log(myString.match(pattern2));
// console.log(pattern2.test(myString));

// let topLevelDomain = "Com Net Org Co Gov IO Info Dev";
// let topLevelDomainRegex = /(com|org|io)/gi;
// console.log(topLevelDomain.match(topLevelDomainRegex));

// let practice = "Os1 Os1Os Os2 Os8Os Os5";
// let practiceRegex = /os[5-9]os/gi;
// console.log(practice.match(practiceRegex));

// let text = "AaBbCcdefG123!456%&^*";
// let aToZ = /[a-zA-Z]/g;
// console.log(text.match(aToZ));

// let myString = `motasemabunima@gmail.com O@@@g...com O@g.net o@g.c o-g@see.co 1@1.com`;
// let dotRegex = /./g;
// let wordRegex = /\w/g; // [a-zA-Z0-9_]
// let nonWordRegex = /\W/g;
// let digitRegex = /\d/g;
// let nonDigitRegex = /\D/g;
// let spaceRegex = /\s/g;
// let nospaceRegex = /\S/g;
// let startOrEndRegex = /(\bspam|spam\b)/gi;
// let notStartOrEndRegex = /\Bnotspam|notspam\B/g;

// let validEmail = /\w+@\w+[^0-9].(com|net)/g;

// console.log("dotRegex", myString.match(dotRegex));
// console.log("wordRegex", myString.match(wordRegex));
// console.log("nonWordRegex", myString.match(nonWordRegex));
// console.log("digitRegex", myString.match(digitRegex));
// console.log("nonDigitRegex", myString.match(nonDigitRegex));
// console.log("spaceRegex", myString.match(spaceRegex));
// console.log("nospaceRegex", myString.match(nospaceRegex));
// console.log("validEmail", myString.match(validEmail));
// console.log("startOrEndRegex", myString.match(startOrEndRegex));
// console.log("notStartOrEndRegex", myString.match(notStartOrEndRegex));

// const urls = "https://github.com http://www.website.net web.com"
// let urlRegex = /(https?:\/\/)?(www.)?\w+.\w+/ig
// console.log(urls.match(urlRegex));
// console.log(urlRegex.test(urls));

// document.getElementById("register").onsubmit = () => {
//     let phoneInput = document.getElementById("phone").value
//     let phoneRegex = /\(\d{3}\)\s\d{2}\s\d{3}\s\d{4}/g     // (970) 59 983 8964
//     if (!phoneRegex.test(phoneInput))
//         return false
//     return true
// }

// Regex challenge
// let url1 = 'elzero.org'
// let url2 = 'http://elzero.org'
// let url3 = 'https://elzero.org'
// let url4 = 'https://www.elzero.org'
// let url5 = 'https://www.elzero.org/articles.php?id=100&cat=topics'

// let urlRegex = /(https?:\/\/)?(www.)?\w+.\w+/ig
// // let urlRegex = /(https?:\/\/(www\.))?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/

// console.log(url1.match(urlRegex));
// console.log(url2.match(urlRegex));
// console.log(url3.match(urlRegex));
// console.log(url4.match(urlRegex));
// console.log(url5.match(urlRegex));

// console.log(urlRegex.test(url1));
// console.log(urlRegex.test(url2));
// console.log(urlRegex.test(url3));
// console.log(urlRegex.test(url4));
// console.log(urlRegex.test(url5));

/* 
    OOP => Object Oriented Programming
        - Encapsulation
        - Inheritance
        - Abstraction
        - Polymorphism
*/

// const person = {
//     firstName: "Motasem",
//     lastName: "Abunima",
//     age: 23,
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// function User(id, name, salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary + 500;
// }

// let user1 = new User(101, "Ahmed Ali", 5000)
// let user2 = new User(102, "Fawzy Sameer", 6000)
// let user3 = new User(103, "Adel Fathy", 7000)

// console.log(user1);
// console.log(user2);
// console.log(user3);

// class Person {
//     static count = 0;
//     #employabilityStatus;
//     constructor(firstName, lastName, age, employed, employabilityStatus){
//         Person.count++;
//         this.firstName = firstName;
//         this.lastName = lastName
//         this.age = age
//         this.employed = employed
//         this.#employabilityStatus = employabilityStatus;
//     }

//     #getEmployabilityStatus(){
//         return this.employed ? "Employed" : "Not Employed"
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

//     static countMembers(){
//         return `${Person.count} Members Created`
//     }
// }

// class Employee extends Person {
//     constructor(firstName, lastName, age, employed, employabilityStatus, role, salary){
//         super(firstName, lastName, age, employed, employabilityStatus)
//         this.role = role
//         this.salary = salary;
//     }

//     getEmployeeRole(){
//         return `Your employability role is ${this.role}`;
//     }

// }

// let p1 = new Person("Motasem", "Abunima", 27, "Not Employed")
// let e1 = new Employee("Ahmed", "Ali", 28, true, "Employed", "Quality Assurance Engineer", 3200)
// let e2 = new Employee("Adel", "Jamal", 32, false, "Not Employed", "Solutions Architect", 4000)

// console.log(p1.getFullName());
// console.log(e1.getEmployeeRole());
// console.log(e2.getFullName());
// console.log(e2.employabilityStatus);
// console.log(e1);
// console.log(e2);

// console.log(Person.countMembers());

// Date & Time

// let datenow = new Date()
// console.log(datenow)

// let myBirthday = new Date("May 11 2000")
// let difference = datenow - myBirthday

// console.log(`My current age: ${(difference / 1000 / 60 / 60 / 24 / 365).toFixed(2) }`);

// Generator
// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let generator = generateNumbers();
// console.log(typeof generator);
// console.log(generator);

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().done);

// for(let value of generateNumbers()){
//     console.log(value);
// }

// function* generateNumbers() {
//     let index = 0;

//     while(true){
//         yield index++;
//     }
// }

// let generator = generateNumbers();

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.return());
// console.log(generator.next().value);

// JSON => object
// JSON.parse();
// object => JSON
// JSON.stringify();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(typeof data);
//     console.log(data);

//     const jsonData = JSON.stringify(data);
//     console.log(typeof jsonData);
//     console.log(jsonData);

//     const jsObjectData = JSON.parse(jsonData);
//     console.log(typeof jsObjectData);
//     console.log(jsObjectData);
//   });

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/motasemziad/repos");
// myRequest.send();

// console.log(myRequest);

// myRequest.onreadystatechange = () => {
//   if (myRequest.readyState === 4 && myRequest.status === 200) {
//     let jsData = JSON.parse(myRequest.responseText);
//     console.log(jsData);

//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       let divContent = document.createTextNode(jsData[i]["full_name"]);

//       div.appendChild(divContent);
//       document.body.appendChild(div);
//     }
//   }
// };

// let myPromise = new Promise((resolve, reject) => {
//   let connection = false;

//   if (connection) {
//     resolve("Connection Established");
//   } else {
//     reject(Error("Connection failed"));
//   }
// });

// console.log(myPromise, typeof myPromise);

// myPromise.then(
//   (value) => console.log(`Good ${value}`),
//   (reason) => console.log(`Bad ${reason}`)
// );

// let myPromise = new Promise((resolve, reject) => {
//   let employees = ["Ahmed", "Sayed", "Sami", "Fawzy"];

//   if (employees.length === 4) {
//     resolve(employees);
//   } else {
//     reject(Error("Some of the employees have not come yet"));
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     value.length = 2;
//     return value;
//   })
//   .then((value) => {
//     value.length = 1;
//     return value;
//   })
//   .then((value) => console.log(`THE CHOSEN EMPLOYEE IS ${value}`))
//   .catch((reason) => console.log(`Something went wrong ${reason}`))
//   .finally(() => console.log("Everything is going to be good"));

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = () => {
//       if (myRequest.status === 200) {
//         resolve(JSON.parse(myRequest.responseText));
//       } else {
//         reject(new Error("Data Not Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/motasemziad/repos")
//   .then((value) => {
//     value.length = 10;
//     return value;
//   })
//   .then((value) => {
//     for (let i = 0; i < value.length; i++) {
//       let div = document.createElement("div");
//       let divContent = document.createTextNode(value[i]["full_name"]);

//       div.appendChild(divContent);
//       document.body.appendChild(div);
//     }
//   });

// fetch("https://api.github.com/users/devmsh/repos")
//   .then((result) => {
//     return result.json();
//   })
//   .then((full) => {
//     full.length = 10;
//     return full;
//   })
//   .then((ten) => {
//     console.log(ten[0].name);
//   });

// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I am the way I am and I will never change");
//   }, 2000);
// });

// async function readData() {
//   console.log("Before Promise");
//   console.log(await myPromise);
//   console.log("After Promise");
// }

// readData();
