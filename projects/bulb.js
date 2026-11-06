let bulb = document.querySelector(".bulb");
let btn = document.querySelector(".btn");

// btn.addEventListener("click",()=>{
//     console.log("btn clicked")
//     // bulb.style.backgroundColor = "black";
//     bulb.classList.toggle("onOff");
// })
/**
 * 
 * 
let flag = true ;

btn.addEventListener("click",()=>{
    if(flag){
        bulb.style.backgroundColor ="yellow";
        btn.textContent ="Off";
        flag = false;
    }else{
        bulb.style.backgroundColor ="transparent";
        btn.textContent ="On";
        flag = true;
    }
});
 */

btn.addEventListener("click",()=>{
    bulb.classList.toggle("onOff");
    if( bulb.classList.contains("onOff")){
        btn.textContent="off";
    }else{
        btn.textContent = "on";
    }
})