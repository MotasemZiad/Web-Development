console.log("Log: hello world");
console.warn("Warn: Hello World");
console.debug("Debug: hello world");
console.info("Info: hello world");
console.error("Error: hello world");
console.table(["Ahmed", "Mohammed", "Mahmoud"]);
console.log(
  "Hello form the %cJS %cFile",
  "color:red; font-size:1.6em",
  "color:blue; font-size: 1.2em; font-weight: bold"
);
/*  Data Types:
        - string
        - number (integer, floating-point)
        - boolean
        - object (array, map, null, object)
        - undefined
*/

let fullName = "Motasem Abunima";
let age = 23;
let gpa = 85.51;
let isGraduated = true;
let skills = ["Linux", "Cloud Computing", "Programming"];
let student = {
  fullName: fullName,
  age: age,
  gpa: gpa,
  isGraduated: isGraduated,
  skills: skills,
};

console.log(`fullName ${fullName}`, "Type Of: " + typeof fullName);
console.log(`age ${age}`, "Type Of: " + typeof age);
console.log(`gpa ${gpa}`, "Type Of: " + typeof gpa);
console.log(`isGraduated ${isGraduated}`, "Type Of: " + typeof isGraduated);
console.log(`skills ${skills}`, "Type Of: " + typeof skills);
console.log(`student ${student}`, "Type Of: " + typeof student);
console.log(`null ${null}`, "Type Of: " + typeof null);
console.log(`undefined ${undefined}`, "Type Of: " + typeof undefined);

console.log("Hello from Windows");

let a = "I love";
let b = "JS";

document.write(a + " " + b);
