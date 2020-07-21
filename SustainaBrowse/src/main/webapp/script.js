import { backend_info } from './backend_info.js';

/** function: randomizer_helper
 *    This function returns an array holding two elements, a string and int. The string is the result
 *      and the int represents the number where this was held. This can be used to avoid getting the
 *      same result twice in a row.
 *  parameters: int category, int exception
 *    The category tells if you want a tip or link. tip is 1 and link is 2.
 *    The exception refers to the number where this was held. If the exception is negative it will disregart
 *      looking for it.
 */
 function randomizer_helper(category, exception){
     if(!Number.isInteger(category) && !Number.isInteger(exception)){ return [];}
     sizeOfTips = backend_info["tips"].length;
     sizeOfLinks = backend_info["links"].length;
     size = sizeOfTips + sizeOfLinks;
     if(category == 2){
        randomNum = Math.random * sizeOfLinks;
        // TODO: Exception needs to be worked on
        if(exception < 0){continue;}
        else if(randomNum == exception && randomNum > 0){ randomNum = 0; }
        else if(randomNum == exception){randomNum = 1;} 
        return [backend_info["links"][randomNum]["link"], size-sizeOfLinks]
     }
     else{ // default is tip, because we have more of them
        randomNum = Math.random * sizeOfTips;
        // TODO: Exception needs to be worked on
        if(exception < 0){continue;}
        else if(randomNum == exception && randomNum > 0){ randomNum = 0; }
        else if(randomNum == exception){randomNum = 1;}
        return [backend_info["tips"][randomNum], randomNum]
     }
 }

 function randomizer(){
    randomPhrase = randomizer_helper(1, -1);
    randomContainer = document.getElementById("container");
    randomContainer.innerText = randomPhrase[0];
 }
