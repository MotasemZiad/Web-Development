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

console.log("Ramadan Kareem");
