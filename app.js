var userScore = 0;
var pcScore = 0;
var userScoreDiv = document.getElementById('userScoreP');
var compScoreDiv = document.getElementById('compScoreP');
//var scoreBoard = document.querySelector('scoreB');
var resultDiv = document.querySelector('#resultD');
var rockDiv = document.getElementById('r');
var paperDiv = document.getElementById('p');
var scissorDiv = document.getElementById('s');

function getComputerChoice(){
    var choices = ['r', 'p', 's'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, compChoice){
    userScore++;
    showResults();
    resultDiv.innerHTML = userChoice + " beats " + compChoice + " .You Win. ";
}

function showResults()
{
    userScoreDiv.innerHTML = userScore;
    compScoreDiv.innerHTML = pcScore;
}

function lose(){
    pcScore++;
    showResults();
    resultDiv.innerHTML = "User lost.";
}

function draw(){
    pcScore++;
    userScore++;
    resultDiv.innerHTML = "It is a draw.";
    showResults();
}

function game(userChoice){
    var compChoice = getComputerChoice();
    switch (userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
             break;

    }

}

function gen(){
rockDiv.addEventListener('click', function(){
    game("r");
});

paperDiv.addEventListener('click', function(){
    game("p");
});

scissorDiv.addEventListener('click', function(){
    game("s");
});
}


gen();


