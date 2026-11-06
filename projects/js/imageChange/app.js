let div = document.createElement("div");
let main = document.querySelector("main");
let img = document.createElement("img");
let btn = document.createElement("button");


div.classList.add("namediv");
img.setAttribute("src","https://images.unsplash.com/photo-1791394892962-1d75932e8ccf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D");
img.setAttribute("alt","broken image");
img.style.width = "200px";

btn.setAttribute("type","button");
btn.style.height = "20px";
btn.style.width = "100px";
btn.style.backgroundColor = "green";

btn.textContent= "changeMe"

main.append(div);
div.append(img);
div.append(btn);

let flag = true;
btn.addEventListener("click",()=>{
    if(flag){
        img.setAttribute("src","https://images.unsplash.com/photo-1793605300952-49cbebdc3d49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D");
        flag =false;
    }else{
        img.setAttribute("src","https://images.unsplash.com/photo-1791394892962-1d75932e8ccf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D");
        flag = true;
    }

})