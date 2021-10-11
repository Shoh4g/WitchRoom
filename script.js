var score = 0;
var scoreText = document.querySelector("h1");

function hideItem() {
    event.target.style.display = "none";
    
    score++;
    scoreText.innerHTML = "Score: " + score;
    
    if (score < 10) {
        alert("Item found!");
    }
    else {
        alert("You win!");
    }
}
