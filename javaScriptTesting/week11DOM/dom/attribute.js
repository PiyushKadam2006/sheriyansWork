/**
 * attribute and propertties 
 */

let img = document.querySelector("img");

let src = img.getAttribute("src");

img.setAttribute("src","someurl");

img.removeAttribute("src");

img.hasAttribute("src");
//returns boolean;