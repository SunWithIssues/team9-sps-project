document.addEventListener("DOMContentLoaded", getRandomTip);

function getRandomTip() {
    const tips = [
        "Did you know that around 62 trillion spam messages are sent every year, requiring the use of 33bn kilowatt hours (KWh) of electricity and causing around 20 million tonnes of CO2 emissions per year.",
        "Researchers have found that gamers use 2.4% of their household electricity-32 terawatt hours of energy per year - which is more than freezers or washing machines.",
        "Buying one new phone takes as much energy as recharging and operating a smartphone for an entire decade, so hold on to your devices for as long as you can!",
        "Did you know a spam email produces 0.3g CO2, regular email produces 4g Co2, and an email with a photo produces 50g of CO2 emissions.",
        "The carbon footprint of our gadgets, the internet and the systems supporting them account for about 3.7% of global greenhouse emissions.",
        "Another good way to say energy is to set your computer's sleep mode to activate when you are away from it. This can be done in your \"Power Options\" in setting.",
        "Stop those vampire appliances by unplugging electronics when not in use.",
        "Don't use a screensaver! Screensavers use just as much energy as when your computer is in regular use, opt for a black screen when you away.",
        "Packaging, like chip bags, make up about one-third of most landfills. This is why it is so important to pack a trash-free lunch and avoid using unnecessary packaging!",
        "Around 80% of the energy used to wash clothes comes from heating the water. Using warm or cool water will save energy and get your clothes just as clean",
        "One Google search accounts for an estimated .2 to 7 grams of carbon dioxide emissions. Make your searches count!",
        "For quick searches, opt to using a tablet or smartphone instead of a laptop or desktop. They use significantly less energy than larger devices."
    ];

    // Pick a random greeting.
    const tip = tips[Math.floor(Math.random() * tips.length)];
    console.log(tip);
    // Add it to the page.
    const tipContainer = document.getElementById('tip-container');
    tipContainer.innerText = tip;
}