console.log("hello, world");
const body = document.querySelector("body");
console.log(body);
const h1 = document.createElement("h1");
h1.textContent = "This is a title";
body.appendChild(h1);
console.log(h1);
function list(a, b, c) {
  const a = document.createElement("a");
  const b = document.createElement("b");
  const c = document.createElement("c");
  a.textContent = "user input";
  b.textContent = "list b";
  c.textContent = "list c";
  console.log(list);
}
