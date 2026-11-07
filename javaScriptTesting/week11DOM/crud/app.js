let main = document.querySelector("main");

let h1 = document.createElement("h1");
let h4 = document.createElement("h4");

// h1.textContent = "hey iam h1 ";
// h4.textContent = "hey iam h4 ";

// main.appendChild(h1);
// main.append(h1,h4);


let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");

// main.insertBefore(b3,b2);

// main.removeChild(b1)

let div = document.createElement("div");
div.style.height ="30%";
div.style.width = "25%";
div.style.backgroundColor="purple";

// main.append(div)
main.prepend(div)

// b2.after(div)
b2.before(div)