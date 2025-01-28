const originalStart = ["darthvader1", "darthVader2", "stormtroopers"];
const originalFirst = ["hoth", "kashykk", "tatooine"];
const originalTransmission = ["mandolorian", "andor", "ashoka", "yoda", "akbar", "leia"];
const originalSecond = ["naboo", "corosant", "deathstar", "whale"];
const originalEnd = ["naboo1", "naboo2", "moncalimary", "corosant1", "corosant2", "startours"];
const sequalStart = ["kylo", "firstorder"];
const sequalFirst = ["jaku","kefBir"];
const sequalTransmission = ["bb8", "maz", "poe", "lando"];
const sequalSecond = ["exegol", "crait"];
const sequalEnd = ["batuu", "startours2"];
const agents = ["Tylar", "Mariana", "Tash", "Andy", "Giana", "Becca", "Elizabeth","Sam Cheese","Sam Shoe","Ian", "Gerry", "Megan", "Meghan", "Katie","Lauren","Molly","Rachel","Julissa","Donia","Alex","Hain","Carlos","Abby","Kinzie","Emma","Izzy","Mitsuno","Loo-ann","Lim","Zoe","Lilee","Riley1","Riley2","Tyler","Francesca","Evelynn","Erica","Taylor","Jake","Isabell","Marco","Kelly1","Kelly2"];

// Function to pick a random item from a list
function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// Function to generate the original sequence
function original() {
    const sequence = [
        getRandomItem(agents),
        getRandomItem(originalStart),
        getRandomItem(originalFirst),
        getRandomItem(originalTransmission),
        getRandomItem(originalSecond),
        getRandomItem(originalEnd)
    ];
    return sequence;
}

// Function to generate the sequel sequence
function sequal() {
    const sequence = [
        getRandomItem(agents),
        getRandomItem(sequalStart),
        getRandomItem(sequalFirst),
        getRandomItem(sequalTransmission),
        getRandomItem(sequalSecond),
        getRandomItem(sequalEnd)
    ];
    return sequence;
}



// Main start function
function start() {
   
    const isOriginal = Math.random() > 0.5; // Randomly decide between original and sequel
    const result = isOriginal ? original() : sequal();

    // Display the sequence
    document.getElementById("output").innerText = 
        isOriginal ? "Original Sequence: " + result.join(" -> ") :
        "Sequel Sequence: " + result.join(" -> ");
}


const imageMap = {
    darthvader1: "images/darthvader1.jpg",
    darthVader2: "images/darthVader2.jpg",
    stormtroopers: "images/stormtroopers.jpg",
    hoth: "images/hoth.jpg",
    kashykk: "images/kashykk.jpg",
    tatooine: "images/tatooine.jpg",
    mandolorian: "images/mandolorian.jpg",
    andor: "images/andor.jpg",
    ashoka: "images/ashoka.jpg",
    yoda: "images/yoda.jpg",
    akbar: "images/akbar.jpg",
    leia: "images/leia.jpg",
    naboo: "images/naboo.jpg",
    corosant: "images/corosant.jpg",
    deathstar: "images/deathstar.jpg",
    whale: "images/whale.jpg",
    naboo1: "images/naboo1.jpg",
    naboo2: "images/naboo2.jpg",
    moncalimary: "images/moncalimary.jpg",
    corosant1: "images/corosant1.jpg",
    corosant2: "images/corosant2.jpg",
    startours: "images/startours.jpg",
    kylo: "images/kylo.jpg",
    firstorder: "images/firstorder.jpg",
    jaku: "images/jaku.jpg",
    bb8: "images/bb8.jpg",
    maz: "images/maz.jpg",
    poe: "images/poe.jpg",
    lando: "images/lando.jpg",
    exegol: "images/exegol.jpg",
    crait: "images/crait.jpg",
    batuu: "images/batuu.jpg",
    startours2: "images/startours2.jpg",
    kefBir: "images/kefBir.jpg"
};


function displayImages(sequence) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous images

    sequence.forEach(item => {
        const img = document.createElement("img");
        img.src = imageMap[item]; // Map the item to its image URL
        img.alt = item; // Set an alternative text
        img.style.width = "150px"; // Set the image size (optional)
        img.style.margin = "10px"; // Add spacing between images
        outputDiv.appendChild(img); // Add the image to the output div
    });
}

function original() {
    const sequence = [
        getRandomItem(agents),
        getRandomItem(originalStart),
        getRandomItem(originalFirst),
        getRandomItem(originalTransmission),
        getRandomItem(originalSecond),
        getRandomItem(originalEnd)
    ];
    displayImages(sequence);
}

function sequal() {
    const sequence = [
        getRandomItem(agents),
        getRandomItem(sequalStart),
        getRandomItem(sequalFirst),
        getRandomItem(sequalTransmission),
        getRandomItem(sequalSecond),
        getRandomItem(sequalEnd)
    ];
    displayImages(sequence);
}

function start() {
    const isOriginal = Math.random() > 0.5; // Randomly decide between original and sequel
    isOriginal ? original() : sequal();
}
