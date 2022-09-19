let result = "";
const cite = document.querySelector("cite");
result += cite.nodeName + " ";
result += ">" + " " + cite.parentElement.nodeName + " ";
result += ">" + " " + cite.parentElement.parentElement.nodeName + " ";
result +=
  ">" + " " + cite.parentElement.parentElement.parentElement.nodeName + " ";
result +=
  ">" +
  " " +
  cite.parentElement.parentElement.parentElement.parentElement.nodeName +
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

// const newArr = ["html", "body", "main", "section", "blockquote", "footer"];

// let result2 = "";

// newArr.forEach((item, i) => {
//   result2 += cite.closest(item).nodeName + " > ";
// });
// result2 += "CITE";
// console.log(result2);
