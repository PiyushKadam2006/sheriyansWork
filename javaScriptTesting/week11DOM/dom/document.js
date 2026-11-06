/**
 * functionality and manipulation
 * html => browser ->  dom(dtring struvture formate ) with html parsers "String" formate tree of objects  => tokens(objects)
 *(root ) browser creates tree like structure 

 browser -> html as string -> html parser -> token -> objects -> tree -> dom tree (of html)
                                                                /   \
                                                                root nodes 
 * css object model => cssom

 * html + css = ui/webpage 
 * html domtree + cssdom = render tree
 * 
 * SELECTION AND MANIPULATION
 * 1.The browser turns every tag into an object in a tree, and JavaScript changes the page by changing those objects.
 * 2.Like setTimeout and fetch, the DOM is a Web API. That is why there is no document in Node.js. BROWSER PROVIDES DOCUMENT object model
 * 3.View Page Source shows the downloaded file. The Elements tab in the developer tools shows the live DOM, which includes the change.
 * 4.[Q What is the output? <head> <script> console.log(document.querySelector("h1")); </script> </head> <body> <h1>Hello</h1> </body>]The script runs before the browser has reached the h1, so the element does not exist yet and querySelector returns null. Use defer or move the script to the end of the body.
 */

/**Understanding the Browser Window, DOM Tree, Nodes, and Selections
 * 
 * NodeList => line brake ko bhi attention deta he object me jagaha deta he 
 * htmlCollection => only main element tags content par focus karta he 
 * 
 * continer and inidividual element ke liye alag alag tarike se manipulation karte he 
 * 
 */

let h1 = document.querySelector("h1");

console.log(h1);

h1.textContent = "namskar duniya ";

// Understanding the Browser Window, DOM Tree, Nodes, and Selections

h1.style.color ="grey";
h1.style.backgroundColor ="black";
h1.style.fontSize ="45px";
h1.style.fontWeight ="300";

//text vagera chanage karan he textContent then if wanted to change karna he style then use style then style specify

//querySelector stops at the first match. Use querySelectorAll to get every match
//getElementById takes the id name without a hash. With the hash it looks for an id that literally starts with #, finds nothing and returns null.
//NodeList supports forEach. An HTMLCollection does not, so convert it with Array.from or use for...of.


/**
 * ClassList Property with Practical Implementation
 * 
 * h1.classList.remove("classname")
 * h1.classList.add("classname")
 * h1.classList.toggle("classname")
 * h1.classList.contains("classname") t/f
 * h1.classList.replace("old","new");
 * h1.classList.remove("classname")
 */

// className is the whole attribute as one string, so assigning to it replaces every class. classList.add would have kept the existing ones.
//What does this code do? el.classList.toggle("error", input.value === "");
// ->The second argument forces the result: true adds the class and false removes it, so the class follows the condition.


/**
 * Browser Events and Event Listeners for Interactions
 * 
 * events(anything that happens over screen ) and listenerd 
 * 
 */

element.addEventListener("click",(event)=>{
    console.log(event.target//elemet that is clicked// 
        )
})

//input fires each time the value changes. change fires only when the value is committed, such as when the field loses focus.
//The brackets call the function straight away. Pass the function itself without brackets: addEventListener("click", greet).
//onclick holds only one function, so the second assignment replaces the first. The addEventListener listener is separate and also runs.
   //   =>[Q => What is the output after one click? btn.onclick = () => console.log("A"); btn.onclick = () => console.log("B"); btn.addEventListener("click", () => console.log("C"));]