//Browser Local Storage and JSON Formatter
/**
 * devtools and exploring storages 
 * local stoarage : broser ka permanet storage
 * => only sting formate ko store karta he  
 *   agar object ya array store karna ho or any other thing then 
 *    we are going to take help of json
 * maximum 5mb  can be stored 
 */

localStorage.setItem("name","virat kohli");//to create data key and pair 

let name = localStorage.getItem("name"); //key argument 
//data nahi mila , ya key available nahi he then return null

console.log(name )


let userData = [{name : "piyush "},{name : "rahul"}];
localStorage.setItem("userData",JSON.stringify(userData));
let data = localStorage.getItem("userData");

let orginalDatas = JSON.parse(data);
console.log(orginalDatas);


//global transformation of data in common format(global formater )
/**
 * inspiration from js object format 
 * {                           {
 *    key : "value"                  "key" : "value"
 * }                              }
 */

localStorage.removeItem("name");
// console.log(name);

/**
 * bullet points =>
 * 1.setItem takes a key and a value. getItem reads it back.
 * 2.Everything is stored as text, which is why objects and arrays must be converted first.
 * 3.stringify goes in and parse comes out. Saving an object without it stores the useless text [object Object].
 * 4.A missing key gives null, so code usually checks for that before using the value.
 * 5.The number was converted to text on the way in, so adding 5 to it would join rather than add.
 * 
 */

/**
 * fetch method 
 * 
 * server is a assume as gpu ,accepts request 
 * fetch webapi se milta he 
 * dusre application se request karte he and return with data 
 * 
 */

let info = fetch("https://fakestoreapi.com/products");

info.then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log(error)
})

//ReadableStream in body 

//The network takes an unknown amount of time, so fetch returns a promise that settles once the response arrives.


/**
 * reading readable stream
 * collection of data in  chunks that collects as a readableStream 
 * 2 time promise resolutioin 
 * 
 * 
*/

// info.then((val)=> val.json()).then((val)=>console.log(val)).catch((error)=>{console.log(error)});


// let resolve = async ()=>{
//     try{
//         let res = await info;  // retuns promise 
//         let result = await res.json(); //return promise 
//         console.log(result);
//     }catch(error){
//         console.log("error" ,error);
//     }
// };

// resolve()

// bulletpoints
/**
 * 1.The body arrives in chunks as a stream(reasable stream), which is why reading it is asynchronous.
 * 2.The stream must be read to the end before the text can be converted into a JavaScript value.
 * 3.The stream is consumed by the first reader, so calling text() after json() on the same response throws an error.(body can be read only once by first reader )
 * 4.The two awaits match the two thens exactly: the response first, then the parsed body.
 * 5.
 */
