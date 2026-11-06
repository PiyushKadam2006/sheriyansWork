/**
 * Primitive vs reference and stack and heap memory
 * 
 * Primitive : 
 *    stinrg , numbert , booleans, null, undefined , symb0l
 * 
 * 
 * array , obj , fun, map, date 
 * 
 *      objects are effecting the fileds (shallow copy )=> protect it from this 
 *      dono ek address ko point kareke cange kar rah ehe 
 * stack -> static , stable 
 * heap -> dynamic address
 *       => Objects are compared by address,not by content
 * 
 * Copying Reference Values Using the Spread Operator
 * 
 *   dusre object ke karan original addres pe changes ho rahi the
 *    => now using spread opration(...oldObjName);
 *        now if making changes over new then only canges will be appled over this now both 
 *       **note that this works good for one level , if inside having object then haev to handle it carefully 
 *      |          |             |
 *      |          |             |
 *      |   stack  |    heap     |
 *      |          |             |
 *      |__________|_____________|
 *     
 * 
 * Understanding Shallow vs Deep Copy : 
 *   shallow and deep copy 
 *   spread operater makes : A shallow copy
 *     => Only the top level of the object
 *   top level copy hoti he , inner vale effect kar sakte he 
 *     bcs bahara vale separete copy hogaye but inner vali dono ke liye same hi he (shallow copy)
 *   
 *  solution : 
 *      A deep copy duplicates every level, so the two objects are completely independent.
 * 
 * 
 * 
 * 
 * 
 */

