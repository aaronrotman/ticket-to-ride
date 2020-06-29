// Variable to store the players score
var score = 0;
// Variable to store the points gained per click
var pointsGained;
//Variable to store the number of clicks each button received
var numClicks = {};

// Select all buttons and store the selection as a variable
var pointButtons = d3.selectAll(".point-button");
// Select the reset button and store the selection as a variable
var resetButton = d3.select(".reset-button");

// Function to run on page load
function init() {
    console.log(`Starting Score: ${score}`);
};
// Event listener to handle clicks for the reset button
resetButton.on("click", function() {
    score = 0;
    console.log(`Score reset. Current score: ${score}`);
});
// Function to handle button clicks for the point buttons
pointButtons.on("click", function() {

    // Store the id of the selected button
    var whichButton = this.id;
    // Log the selected button's id to the console
    console.log(`You clicked a button: ${whichButton}`);
    // Increase the player's score by the appropriate amount depending on the button selected
    /* 
    Points per button:
    buttonOne: 1
    buttonTwo: 2
    buttonThree: 4
    buttonFour: 7
    buttonFive: 10
    buttonSix: 15
    */

    switch (whichButton) {
        case "buttonOne":
        pointsGained = 1;    
        score += pointsGained;
            break;
        case "buttonTwo":
            pointsGained = 2;    
            score += pointsGained;
            break;
        case "buttonThree":
            pointsGained = 4;    
            score += pointsGained;
            break;
        case "buttonFour":
            pointsGained = 7;    
            score += pointsGained;
            break;      
        case "buttonFive":
            pointsGained = 10;    
            score += pointsGained;
            break;  
        case "buttonSix":
            pointsGained = 15;    
            score += pointsGained;
            break;
    }
    console.log(`Value added: ${pointsGained} New Score: ${score}`)
});



// Call the init() function
init();
// console.log("Aaron wins!")