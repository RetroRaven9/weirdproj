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
const gate = ["GateA", "GateB", "GateC","GateD", "GateE" ,"GateF"];

// Function to pick a random item from a list
function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// // Function to generate the original sequence
// function original() {
//     const sequence = [
//         getRandomItem(gate),
//         getRandomItem(agents),
//         getRandomItem(originalStart),
//         getRandomItem(originalFirst),
//         getRandomItem(originalTransmission),
//         getRandomItem(originalSecond),
//         getRandomItem(originalEnd)
//     ];
//     return sequence;
// }

// // Function to generate the sequel sequence
// function sequal() {
//     const sequence = [
//         getRandomItem(gate),
//         getRandomItem(agents),
//         getRandomItem(sequalStart),
//         getRandomItem(sequalFirst),
//         getRandomItem(sequalTransmission),
//         getRandomItem(sequalSecond),
//         getRandomItem(sequalEnd)
//     ];
//     return sequence;
// }



// Main start function
function start() {
    const clickSound = new Audio("audio/StarToursChime.mp3");
    clickSound.play();
    
    

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
    kefBir: "images/kefBir.jpg",
    GateA: "images/aurebesh.png",
    GateB: "images/aurebesh(1).png",
    GateC: "images/aurebesh(2).png",
    GateD: "images/aurebesh(3).png",
    GateE: "imagesaurebesh(4).png",
    GateF: "images/aurebesh(5).png"
};
   

// function displayImages(sequence) {
//     const outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = ""; // Clear previous images

//     sequence.forEach(item => {
//         const img = document.createElement("img");
//         img.src = imageMap[item]; // Map the item to its image URL
//         img.alt = item; // Set an alternative text
//         outputDiv.appendChild(img); // Add the image to the output div
//     });
// }
function displaySection(headerText, items) {
    const outputDiv = document.getElementById("output");

    // Create the section container
    const section = document.createElement("div");
    section.classList.add("section");

    // Create the section header
    const header = document.createElement("h2");
    header.innerText = headerText; // Set the section header text
    header.classList.add("section-header");

    // Create the grid container for images
    const grid = document.createElement("div");
    grid.classList.add("image-grid");

    // Add images to the grid
    items.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const img = document.createElement("img");
        img.src = imageMap[item]; // Map the item to its image URL
        img.alt = item; // Set alternative text

        container.appendChild(img);
        grid.appendChild(container);
    });

    // Append the header and grid to the section
    section.appendChild(header);
    section.appendChild(grid);

    // Add the section to the output div
    outputDiv.appendChild(section);
}

function displayImages(sequence) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous content

    // Divide the sequence into sections and display them
    displaySection("Gates", [sequence[0]]);
    displaySection("Rebel Spy", [sequence[1]]);
    displaySection("Start", [sequence[2]]);
    displaySection("First Destination", [sequence[3]]);
    displaySection("Transmission", [sequence[4]]);
    displaySection("Second Destination", [sequence[5]]);
    displaySection("End", [sequence[6]]);
}



function original() {
    const sequence = [
        getRandomItem(gate),
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
        getRandomItem(gate),
        getRandomItem(agents),
        getRandomItem(sequalStart),
        getRandomItem(sequalFirst),
        getRandomItem(sequalTransmission),
        getRandomItem(sequalSecond),
        getRandomItem(sequalEnd)
    ];
    displayImages(sequence);
}

// function start() {
//     const clickSound = new Audio("audio/StarToursChime.mp3");
//     clickSound.play();
//     const isOriginal = Math.random() > 0.5; // Randomly decide between original and sequel
//     isOriginal ? original() : sequal();
// }
