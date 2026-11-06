/**
 * array  and methonds
 * some mutable and immutable
 * mutatating
 * push(),pop(),shift(),unshift(),splice(yahase , itne elements ) <= this are mutating elements
 *  reverse() : revesr the array
 * sort() problem bcs of lexiciography ascii orders ( unicodes )
 *
 */

// Array.sort((a,b)=>{ a-b }) //ascending  +> negative resulted me
// Array.sort((a,b)=>{ b-a }) //descending


hello work fuck this world
/**
 * non-mutataitng methods => return duplicate array 
 * slice(start , end excluded)
 * concat() m => ...spread
 * map() : -> size maintain karega , cange nahi hogi 
 *         => inputs chage ho sakti he 
 *         ==>never reduse size of array
 *          a.map((val)=>{
 *            return val*2 })
 * filter() - filter can reduce the size 
 *             return array of true values 
 *    ex : let hii = a.filter((val,index)=>{
            // console.log(index);
            return val === 3;  
            
     flat() :   array ke andar ke array ko flat kar dega 
                -> but works only over level one 
                ->have to pass level of flat   
                
                egs : let flattry = newArray.flat(Infinity); 
 */
let a = [1, 2, 3, 4];
let hi = a.map((val, index) => {
  // console.log(index);
  return val * 2;
});


/**
 * single value return karne vale : 
 *    find()
 *    findIndex()
 *    includes() -> check if value exinst or not //stirng pe bhi work karta he 
 *    indexOf() 
 *  arr.join("isme "," alva dalna ho to daldo ,generally spaces use karte he  ")
 *     
 * 
 * some()=> agar ekbhi correct huaa to return true 
 *    let result.toUpperCase() === arr.some((val)=> return val=== "piyush";)
 *  every() => sare result true hone chahiye 
 * 
 * summing or manipulation 
 * 
 *  reduce() //code ko reduce karna 
 * 
 *     let result  =  arr.reduce((accumlater , value)=>{
 *                     return accumlater + value }, 0_initial value of accumulater ))
 *           eg : add to cart mey use kar sakte he            
 * 
 * 
 * 
 * 
 */