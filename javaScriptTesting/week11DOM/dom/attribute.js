/**
 * attribute and propertties 
 */

// let img = document.querySelector("img");

// let src = img.getAttribute("src");

// img.setAttribute("src","someurl");

// img.removeAttribute("src");

// img.hasAttribute("src");
//returns boolean;


//creating dynamic elements 
/**
 * uisng createElemet()
 * =>
 * creating , update ,delete elements
 * 
 * 
 */

let main = document.querySelector("main");

let h1 = document.createElement("h1");
h1.textContent ="hello iam here "
console.log("dynamic element is here ",h1);