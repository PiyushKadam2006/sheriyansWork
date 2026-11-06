// console.log(Math.random());
// let res = Math.random() * 10;
// let res1 = Math.floor(res+ 1);
// console.log(res,res1)

/**
 * ceil always rounds up to the next whole number.
 * It can return 0 but never exactly 1, which is why multiplying and flooring gives whole numbers from 0.
 * Multiply by the number of results, floor to get 0 to 5, then add the smallest value.
 * Rounding gives the end values only half a range each. The fair version is Math.floor(Math.random() * 6) + 1.
 * 
 */

let btn = document.querySelector(".btn");
let div = document.querySelector(".container");

let randomNames = [
  "Piyush",//0
  "Dipesh",//1
  "Savita",//2
  "Pankesh",//3
  "Kadam",//4
  "Rahul",//5
  "Kunal",//6
  "Sidhesh",//7
  "Modi",//8
  "Rahul Gandhi",//9
  "Dharmendra Pradhan",//10
  "Raghav Chadda",//11
];


function randomColor(){
    let randomR = Math.floor(Math.random()*256 +1)
    let randomG = Math.floor(Math.random()*256 +1)
    let randomB = Math.floor(Math.random()*256 +1)
   console.log(randomR,randomG,randomB);
    return `rgb(${randomR},${randomG},${randomB})`
}
function fun (){
    let ran = Math.random()*randomNames.length +1
    let idx =Math.floor(ran)
     console.log(randomNames[Math.floor(ran)]);
     let X = Math.floor(Math.random()*100 )
     let Y = Math.floor(Math.random()*100 )
     let h1 = document.createElement("h1");
     h1.textContent =randomNames[idx]
     h1.style.color= randomColor();
     h1.style.top = `${X}%`
     h1.style.left = `${Y}%`
     div.appendChild(h1);

}


btn.addEventListener("click",()=>{
   fun();
})


//Random Name Picker Project Using the Math Object

// randomColor();