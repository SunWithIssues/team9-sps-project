backend_info = {
    "tips":[
        "Did you know a spam email produces 0.3g CO2, regular email produces 4g Co2, and an email with a photo produces 50g of CO2 emissions",
        "The carbon footprint of our gadgets, the internet and the systems supporting them account for about 3.7% of global greenhouse emissions",
        "Researchers have found that gamers use 2.4% of their household electricity-32 terawatt hours of energy per year - which is more than freezers or washing machines.",
        "Another good way to say energy is to set your computer's sleep mode to activate when you are away from it. This can be done in your \"Power Options\" in setting.",
        "Stop those vampire appliances by unplugging electronics when not in use.",
        "Don't use a screensaver!  Screensavers use just as much energy as when your computer is in regular use, opt for a black screen when you away.",
        "Packaging, like chip bags, make up about one-third of most landfills. This is why it is so important to pack a trash-free lunch and avoid using unnecessary packaging!", 
        "Recycling one soda can can save enough energy to power a TV for 3 hours. Recycling one glass bottle can power a computer for 30 minutes.",
        "Around 80% of the energy used to wash clothes comes from heating the water. Using warm or cool water will save energy and get your clothes just as clean",
        "One Google search accounts for an estimated .2 to 7 grams of carbon dioxide emissions. Make your searches count!",
        "For quick searches, opt to using a tablet or smartphone instead of a laptop or desktop. They use significantly less energy than larger devices.",
        "Buying one new phone takes as much energy as recharging and operating a smartphone for an entire decade, so hold on to your devices for as long as you can!"
    ],
    "links":[
        {"description": "Amazon Watch is a great site to support the Amazon rainforest",
        "link": "https://amazonwatch.org/donate"},
        {"description": "https://www.amazonteam.org",
        "link": "Amazon Team is a great site to support the Amazon rainforce"},
        {"description":"Rainforest Trust is a great site to support the Amazon rainforest",
        "link": "https://www.rainforesttrust.org"}
    ]
};

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
    console.log(randomPhrase[0]);
 }
