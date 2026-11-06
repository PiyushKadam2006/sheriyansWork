// const age = 19;
// const hasId = true;

// function fun(age , hasId){
//     if(age >=18 && hasId == true){
//     console.log("permit");
// }else{
//     console.log("not allowed");
// }
// }

// // fun(10 , hasId);

// function even(limit){
//     for(let i =1;i<=limit;i++){
//         if(i%2==0){
//         console.log(` ${i}`)
//         }
//     }
// }

// even(10);

/**
 * mode 2
 */
//arrays : store multiple information

// const friends = ["Rahul"];

/**
 * mode 3 Important methods over array for projects
 */

/**
 * const tasks=[
    {id:1 , title : "html",done:true},
    {id:2 , title : "css",done:false},
    {id:2 , title : "js",done:false },
];

const task = tasks.find(task => task.id===2);

const pendingWork = tasks.filter(task => task.done === false);

const titles = tasks.map(task => task.title );

const numbers =[2,5,8,11,14];

const evenNumbers = numbers.filter(number=>number%2==0);
const doubleNumbers= numbers.map(numbers => numbers*2);
const firstAboveTen = numbers.find(numbers => numbers>10);

 */

// mode 4 object

// const student ={
//     name : "piyush",
//     marks : 72,
//     passed : false
// }

// const updatedStudent={
//    ...student,
//    marks : 85,
//    passed : true
// }

// word();

// let man=()=>{
//     console.log("hello world");
// }
// let man=()=>{
//     console.log("hello world");
// }
// let man=()=>{
//     console.log("hello world");
// }

// let word = function(){
//     console.log("hello world");
//     return "piyush is god"
// }

// console.log(word());


console.log("promises");
 
let data = new Promise((resolve , reject )=>{

    resolve("sucess");
    reject("falied")

});

console.log(data);