document.getElementById("tipButton").addListener("click", getRandomTip());

console.log("document");

function getRandomTip() {
    const tips = [
        'You miss 100% of the shots you don\'t take', 
        'Sometimes it\'s the very people no one imagines anything of that do the things no one can imagine', 
        'You have to be odd to be number one', 'Why fit in when you were born to stand out'
    ];

    // Pick a random greeting.
    const tip = tips[Math.floor(Math.random() * tips.length)];
    console.log(tip);
    // Add it to the page.
    const tipContainer = document.getElementById('tip-container');
    tipContainer.innerText = tip;
}