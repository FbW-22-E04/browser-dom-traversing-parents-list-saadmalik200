/*
let result = "";
const cite = document.querySelector("cite");
result += cite.nodeName + " ";
result +=
  ">" +
  " " +
  cite.parentElement.nodeName +
  "." +
  cite.parentElement.className +
  " ";
result +=
  ">" +
  " " +
  cite.parentElement.parentElement.nodeName +
  "." +
  cite.parentElement.parentElement.className +
  " ";
result +=
  ">" + " " + cite.parentElement.parentElement.parentElement.nodeName + " ";

result +=
  ">" +
  " " +
  cite.parentElement.parentElement.parentElement.parentElement.nodeName +
  "." +
  cite.parentElement.parentElement.parentElement.parentElement.className +
  " ";
result +=
  ">" +
  " " +
  cite.parentElement.parentElement.parentElement.parentElement.parentElement
    .nodeName +
  " ";
result +=
  ">" +
  " " +
  cite.parentElement.parentElement.parentElement.parentElement.parentElement
    .parentElement.nodeName;

console.log(result.split(" ").reverse().join(" "));

*/
//////////////////////////

// const newArr = ["html", "body", "main", "section", "blockquote", "footer"];

// let result2 = "";

// newArr.forEach((item, i) => {
//   result2 += cite.closest(item).nodeName + " > ";
// });
// result2 += "CITE";
// console.log(result2);

/////////////////////

const parentList = [];
let currentElement = document.querySelector("cite");
// console.log(currentElement);
while (currentElement) {
  let currentElementName = currentElement.nodeName;
  // console.log(currentElementName);
  parentList.unshift(currentElementName.toLowerCase());
  // console.log(parentList);
  // console.log(currentElement);
  currentElement = currentElement.parentElement;
  // console.log(currentElement);
}
console.log(parentList.join(" > "));
