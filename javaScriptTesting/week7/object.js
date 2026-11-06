/**
 * object use karna pada bcs , array me values to he but 
 * for what purpose is this valuers are 
 *        => key and value pairs
 *  
 *           finding 
 *       => objectname.key;
 *       =>objerectname["key"];
 * 
 *        updating 
 *        objectname.newField = willaddinObject;
 *         objectname.oldkey = replaceValue;
 *         
 *           safe delete 
 * 
 *        methods: 
 *         Object.keys(student)  +> keys ka array return karta he 
 *          
 *         result.forEach((val) => console,log(val);return 10;)
 * console.log(res);  
 *          => forEach kabhi return nahi karta , only traversin ke liye use karte he 
 *         
 *          forInloop over objects 
 *          for(let key in students){
 *                console.log(key);
 * }
 *          
 * 
 */

let student1 ={
    name : "rahl ",
    houseno : 102,
    fatherName : "Mahedev",
    friend : "Piyush ",
    address :" latur"
}

/**
 * some object methods :
 *   Object.entries(result); => Each item is a small array holding a key and its value, which pairs well with a for of loop.
 *   Object.keys(result); => They are written on the Object keyword with the object passed inside the brackets, not called on the object itself.
 *  Object.values(result); =>Stops its values being changed, added or deleted
 *  Object.freez(userProfile);  
 * 
 * const and freex diffence [> objec inner values can be change in const butnor in case of freeze]
 */