// Adding user input for season and plant type insted of hardcoded values

// Ask user for season and plant type
 //Function to get user input and display advice
 function main() {
let season = prompt("Enter the season (e.g. summer, winter):"); 
let plantType = prompt("Enter the plant typ (e.g. flower, vegetable):"); 

// Combine advice from both functions
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType) ;
// Display garding advice
console.log(advice);
 }

// Determine advice based on the season
// Function gets advice based on season
function getSeasonAdvice(season) {
if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
} else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
} else {
    advice += "No advice for this season.\n";
}
}

// Determine advice based on the plant type
// Function gets advice based on plant type
function getPlantAdvice(plantType) {
if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
} else {
    advice += "No advice for this type of plant.";
}
}

// Call the function
main();