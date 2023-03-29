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

console.log("Hi from Windows");
/*
 unshift & shift => adds or remove elements from the first
 push & pop => adds or remove elements from the last 
*/

let courses = [
  "Programming I",
  "Programming II",
  "Operating Systems",
  "Distributed Systems",
  "Data Science",
  "Computer Architecture",
  "Linear Algebra",
  "Mathematics",
  "Calculus",
  "Data Structures and Algorithms",
  "Web Development",
  "Android Development",
  "iOS Development",
];

console.log(`Number of Courses: ${courses.length}`);
console.log(courses);

console.log(courses.push("Machine Learning"));
console.log(courses);
console.log(courses.pop());
console.log(courses.unshift("Introduction to Computer Science"));
console.log(courses);
console.log(courses.shift());

console.log(`Number of Courses: ${courses.length}`);

console.log(courses.sort());
console.log(courses.reverse());
console.log(courses);
