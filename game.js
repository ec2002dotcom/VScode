// Define the playGame function that starts the game
function playGame() {
  console.log("Game started!");
  // Add your game initialization logic here
}

// Get the 'prompt' div and inject the Play Game button
const prompt = document.getElementById("prompt");
prompt.innerHTML = '<button onclick="playGame()">Play Game</button>';


/* Question Multi-dimensional array */
var questions = [
   ["Question 1: What planet are can host life?", 1 [int], "Earth", "Mars", "Jupiter"],
   ["Question 2: What is a rare type of clover?", 1 [int], "Four-leaf clover", "Three-leaf clover", "Five-leaf clover"],
   ["Question 3: What is the capital of France?", 3 [int], "London", "Berlin", "Paris"]
];

let count = 0;

function playGame() {
    var currentQuestion = questions[0]; 
    document.getElementById('question').innerHTML = currentQuestion;
    // 2. Remove the question from the array using .shift() function.
    questions.shift();

    // 3. Access the correct answer index from the question array, now at index[0].
    var correctIndex = questions[0];

    // 4. Remove the correct answer index from the array using .shift() function.
    questions.shift();

    // 5. Create a list of answers from the remaining elements of the array.
    var answerListHTML = "";

    // The remaining elements in the array are the answer choices
    for (var i = 0; i < questions.length; i++) {
        // 6. Format them as list items with a nested link and an onClick attribute 
        // calling checkAnswer(index, correctIndex)
        answerListHTML += "<li><a href='#' onClick='checkAnswer(" + i + ", " + correctIndex + ")'>" + questions[i] + "</a></li>";
    }

    // 7. Post the answer list in the HTML document in the answers list.
    document.getElementById('answers').innerHTML = answerListHTML;

    // 8. Add a prompt for the user to click the best answer.
    document.getElementById('prompt').innerHTML = "Please click on the best answer choice above to proceed.";
}