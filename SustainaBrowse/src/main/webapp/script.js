

/** function: randomizer_helper
 *    This function returns an array holding two elements, a string and int. The string is the result
 *      and the int represents the number where this was held. This can be used to avoid getting the
 *      same result twice in a row.
 *  parameters: int category, int exception
 *    The category tells if you want a tip or link. tip is 1 and link is 2.
 *    The exception refers to the number where this was held.
 */
 function randomizer_helper(category, exception){
     if(!Number.isInteger(category) && !Number.isInteger(exception)){ return [];}
     
 }