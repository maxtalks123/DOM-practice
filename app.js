console.log("hello, world");
const body = document.querySelector("body");
console.log(body);
const h1 = document.createElement("h1");
h1.textContent = "This is a title";
body.appendChild(h1);
console.log(h1);
let listitems = "banana, apple, orange";
const list = document.createElement("list");
list.textContent = listitems;
body.appendChild(list);
console.log(list);
// How I would remove h1.
// const h1 = document.querySelector("h1");
//h1.remove();
