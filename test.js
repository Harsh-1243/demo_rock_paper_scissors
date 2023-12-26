const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");
const show_score = document.getElementById("show_score");

const score_obj = {

    win: 0,
    lose: 0,
    tie: 0,
    reset_score: function () {

        this.win = 0;
        this.lose = 0;
        this.tie = 0;

    },
}

const choices = ["rock", "paper", "scissors"];

function computer_choice() {

    return Math.round(Math.random() * 2);

}

rock.addEventListener("click", () => {

    const choice = choices[computer_choice()];

    if (choice === "rock") {

        console.log("computer's choice:- " + choice);
        score_obj.tie = score_obj.tie + 1;
        alert("TIE \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }
    else if (choice === "paper") {

        console.log("computer's choice:- " + choice);
        score_obj.lose = score_obj.lose + 1;
        alert("LOSE \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }
    else {

        console.log("computer's choice:- " + choice);
        score_obj.win = score_obj.win + 1;
        alert("WIN \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }

});


paper.addEventListener("click", () => {

    const choice = choices[computer_choice()];

    if (choice === "paper") {

        console.log("computer's choice:- " + choice);
        score_obj.tie = score_obj.tie + 1;
        alert("TIE \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }
    else if (choice === "scissors") {

        console.log("computer's choice:- " + choice);
        score_obj.lose = score_obj.lose + 1;
        alert("LOSE \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }
    else {

        console.log("computer's choice:- " + choice);
        score_obj.win = score_obj.win + 1;
        alert("WIN \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }

});

scissors.addEventListener("click", () => {

    const choice = choices[computer_choice()];

    if (choice === "scissors") {

        console.log("computer's choice:- " + choice);
        score_obj.tie = score_obj.tie + 1;
        alert("TIE \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }
    else if (choice === "rock") {

        console.log("computer's choice:- " + choice);
        score_obj.lose = score_obj.lose + 1;
        alert("LOSE \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }
    else {

        console.log("computer's choice:- " + choice);
        score_obj.win = score_obj.win + 1;
        alert("WIN \nwin:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);

    }

});

reset.addEventListener("click",()=>{

    score_obj.reset_score();

});

show_score.addEventListener("click",()=>{

    alert("win:- " + score_obj.win + "\nlose:- " + score_obj.lose + "\ntie:- " + score_obj.tie);    

});