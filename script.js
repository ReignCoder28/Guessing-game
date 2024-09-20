//VARIABLES

var number = Math.floor(Math.random() * 50+1);
var btnClick = document.getElementById("button");
var textChange = document.getElementById("text")

console.log(number);

// Events

btnClick.addEventListener("click", GuessNum);

// function

function GuessNum(){

    var guess = parseInt(document.getElementById("guess").value);

    if(guess === number){
        text.innerText = "You got it!";
        textChange.style.color="green";
    }
    else if (guess > number){
        text.innerText = "Try lower";
        textChange.style.color="red";
    }
    else {
        text.innerText = "Try higher";
        textChange.style.color="red";
    }
}