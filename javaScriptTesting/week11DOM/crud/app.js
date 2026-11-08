/** 
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
*/
//notes
/**
 * parent.insertBefore(newNode, referenceNode)
 * 
 * Which method swaps an element for a new one, called on the old element?
 * oldElement.replaceWith(newElement);
 * ===================================================================
 */


/**========================================================================
 * event bublinmg and capture 
 * 
 * event propogation 
 * event capturing 
 * 
 * windows se heirarchy me target karte he > window tak bubbling ho rahi he 
 * event bubbling hoti he hell me 
 * 
 * evnt pehlese hi rehtee he => by default shows child to parent (captuirng phase)
 * but actually top to bottomm then taget to top (bubbling phase)
 * event top se suru hte he 
 * captugin phase then bubbiling phase 
 * by default bubbling dikhata he  
 */

/**       capturing(hidden)
 * window =============>target 
 *        <==============
 *         bubbling(default)
 * 
 */

let main = document.querySelector("main");
let div = document.querySelector("div");
let button = document.querySelector("button");
// let window = document.querySelector("window");
let body = document.body;


//captuirng
button.addEventListener("click",()=>{
    console.log("button trigged")
},true)
div.addEventListener("click",()=>{
    console.log("div trigged")
},true)
main.addEventListener("click",()=>{
    console.log("main trigged")
},true)
body.addEventListener("click",()=>{
    console.log("body trigged")
},true)
window.addEventListener("click",()=>{
    console.log("window trigged")
},true)
//bubbling
button.addEventListener("click",()=>{
    console.log("button trigged")
})
div.addEventListener("click",()=>{
    console.log("div trigged")
})
main.addEventListener("click",()=>{
    console.log("main trigged")
})
body.addEventListener("click",()=>{
    console.log("body trigged")
})
window.addEventListener("click",()=>{
    console.log("window trigged")
})


/**
 * 
 * 
 window
  ↓
body
  ↓
main
  ↓
div
  ↓
button

 */