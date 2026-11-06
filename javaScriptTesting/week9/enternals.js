/**
 * # Callstack and global ecexution context
 * (theorotical)
 * engines => v8, spidermonkey , javaScript
 * callstack (execution concept) -> stack data structure
 *
 *     ||  stack      ||
 *     ||             ||
 *     ||             ||         arrays and objects are in heap data type
 *     ||             ||
 *     ||             ||
 *     ||             ||
 *     ||             ||
 *     ||------------ ||
 *     ||  global Exe ||
 *      ================
 *
 * note bullet points :
 * 1.The GEC is created and pushed onto the stack before any other code runs.
 * 2.The most recently pushed function is always the first one to be removed, like a stack of plates.
 * 3.( single thread )With a single call stack, everything below the top item waits, which is why a long task freezes the page.
 * 4.Each call adds a frame to the stack. Without a stopping condition the frames pile up until the space runs out.
 *
 *
 *
 *
 *  # GEC: Memory, Execution Thread and Code Execution Process
 *   1.creation phase
 *   2.execution phase
 *      jit just in time compilation
 *
 *      ||  memory ||execuiton  ||
 *      ||   phase ||thread     ||
 *      ||         ||           ||
 *      ||         ||           ||
 *      ||         ||           ||
 *      ||         ||           ||
 *      ||         ||           ||
 *      ||         ||           ||
 *      ||         ||           ||
 *      ||+++++++++||+++++++++++||
 *
 *    creation phase :  first -> varialbles (let ,var ,cosnt ) + core functionas (functions ) =>reads them and assign them makes undefined .
 *                     (most call it hoisting .)
 *          : core function ko unkA functional block creation phase mehi miljata he 
 *           eg : function greet(){ cosnole.log("function al brlock miel gaya ")}
 *                var greet = ()=>{ cosnoel.log("functional block nahi mila , undefied")}
 *                if let use kiya then error on 
 *                 
 *                  greet()
 *                  function greet(){
                    console.log("hello world");
                    return "piyush is god"
                    }
 *       +> var se creat kare hua function ko access kiya jata he beacsue vo window me jade te 
             not like let 
          =>console.log() execution ke time chalta he         
 *        
 *           
 *         bullet points for revison :
 *          1.The creation or memory phase, and the execution phase
 *          2.Memory is reserved for every variable and function first, and only then does the code run line by line.
 *          3.var is hoisted and set to undefined, which is why reading it before its line does not cause an error.
 *          4.The variable exists from the creation phase but its value is only assigned when that line runs.
 *          5.let and const are hoisted but left uninitialised, so reading them before their line throws an error instead of giving undefined.
 *            =>A ReferenceError, because b is in the temporal dead zone
 *          6.A function declaration is fully hoisted. An arrow function stored in a const is not, so it cannot be called from above.
 *          7.
 * 
 * functional block execution Process   
 * 
 *         1.jitne function utne executioin contexts.
 *         2.normal code will executes in gec and functional block will execute in sc , after executoin compltion it will destroyrd .
 *    cp=>all the variables and core functions will be saved .
 *    ethread> rest of thr code will execute
 *        3.Every call gets its own context with its own variables, and that context goes on top of the stack.
 *        4.The context is removed and its local variables disappear, unless a closure is keeping them alive.
 *        5.Each call gets a fresh context with its own copies of the parameters and local variables, so the two never interfere.
 *        6.A context that does not have a variable follows the reference to its outer environment. The reverse is not possible.
 *        7.Once the function returns its context is popped and its local variables no longer exist.
 *        
 * 
 * #Debugging in DevTools: Variable Environment and Window
 *   devtool-> sources -> debugger 
 *   (tempotral dead zone )
 *    window is the truth  
 *=>when we using in sources then i think the code is firstly goan through memory phase 
 *    using debugger we can see execution bcs var and core function have somthing but let and other function lke fat arrow are in temporal dead zone 
 *      
 *    notes to revise :
 *    1.The browser calls it window, while Node.js calls it global.
 *    2.A global var becomes a property of the window object, which is one of the reasons var is avoided.
 *    2.Global let and const are stored in a separate Script scope. They are still global variables, but they do not sit on window.
 *    2.After pausing at a breakpoint, the Scope panel lists the Local, Script and Global variables separately.
 *    2.(breakpoint )Execution stops before the line, so you can inspect the variables as they are at that moment and then step forward.
 *   
 * 
 * #closures & lixical envirnment 
 * => variable enviornment sari chije yaad rakh raha he */

console.log("closures");

let outer = () => {
  //ye khatam ho jayega
  console.log("outer function");
  let number = 89;
  let inner = () => {
    console.log("im inner function", number);
  };
  return inner;
};

let innerCatcher = outer(); ///ab innerCather ke pass inner ki value pata he but
// twist is that , how innerCatcher() is haivng the value from inner function
//even if the outer stack fram is destroyed .

/**
 * outer{ inner { innerest { }}}
 *
 * outer -> n=89(closure )
 *      inner  will save n as 89
 *           innrerest => n will save 89
 */
====================================================
/** 
 * 
 * code dump ":"
 *       console.log("closures");

let outer = () => {
//   console.log("outer function");
  let  number = 89;
  let inner = () => {
    console.log("im inner function" ,number);
    let innerest = ()=>{
        console.log("inner ka bhi inner number => ", number );
    }
    return innerest;
  }; 
 return  inner;
};


// let innerCatcher = outer();
// // console.log(innerCatcher);
// // innerCatcher();
// let findInInner = innerCatcher();
// findInInner();

outer()()();
 */

/**
 * closuer practice 
 * 
 * function ko for loop se call karna 
 * 0=> settimeout - time delay needed 
 */

let count = ()=>{
    let count = 0;

    return ()=>{
        count++;
        console.log(count);
    }
}
let finder= count();
finder();
finder();
finder();
finder();
finder();

/** var and let : scoping ke karna timeout pe effect :  */

for(var i =1 ;i<= 4; i++){ //here var global he and bcz of this 1 sec me update hote hote settime out jis varible i ko use kar rahe he vo 5 ho gaya and now setime out use i ko use kar rahe he 
   setTimeout(()=>{
      console.log(i);
   },1000);
}
for(let  i =1 ;i<= 4; i++){ //unlike var , let is blocked scope variable intitaliser , and its value is catched by settimeout and not referign to the only value like var does .
   setTimeout(()=>{
      console.log(i);
   },1000);
}

/** bullet points 
 * 
 * 1.The inner function keeps access to its outer variables even after the outer function has finished running.
 * 2.A function's lexical environment is decided by=>Lexical means where it is written. That is what the function remembers, not the place it is later called from.
 * 3.The scope chain always runs outwards. The outer function cannot see the inner function's variables.
 * 4.Every call creates a fresh execution context, so the two closures are completely independent of each other.
 * 
 * 
 * 
 * 
 */

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const c = outer();
c();
console.log(c());  //out put 2  


/**
 * Practicing Currying Functions: Infinite Operations
 * 
 * 
 */

//make infinite curring functionn

function sum(a){
  return (b)=>{

    if(b!== undefined){
       return sum(a+b);
    }
    return a;
     
  }
}
// let result = sum(10)(20)(30)(40)();
// console.log(result);

//question 1 
function f(){
  let x =10;
  return ()=>{ console.log(x++)} //post increment operater 
}
let a=f();

a(); //10
a();//20


// question 2 
const arr=[];

for(var i= 0; i<3 ; i++) arr.push(()=>i);  //[3,3,3]
    console.log(arr.map((fn)=>fn()));
for(let i= 0; i<3 ; i++) arr.push(()=>i);  //[0,1,2]
    console.log(arr.map((fn)=>fn()));


    //questoin  3 

    const add =(a )=> (b)=> a +b;
    const add5 = add(5);//(b)=> a +b; //a=5
  console.log(add5(3),add5(10)); //8 , 15