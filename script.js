var one;
var two;
var three;
var four;
var five;
var button = document.getElementById("hidden")
var num = document.getElementById("num")
var letter = document.getElementById("letter")
var special = document.getElementById("special")
var lower = document.getElementById("lower")
var upper = document.getElementById("upper")
var input = document.getElementById("input")
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')','-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', ',', '.', '?', '/'
];

function checkLenght(){
    if(input.value.length >= 12){
        letter.className = "done"
        five = true
    }
}
function check() {
    num.classList.remove("done")
    special.classList.remove("done")
    letter.classList.remove("done")
    lower.classList.remove("done")
    upper.classList.remove("done")
    one = false
    two = false
    three = false
    four = false
    five = false
    for (var i = 0; i < input.value.length; i++) {
        for (j = 0; j < lowerArr.length; j++) {
            if (input.value[i] == lowerArr[j]) {
                lower.className = "done"
                one = true
            }
        }
        for (j = 0; j < upperArr.length; j++) {
            if (input.value[i] == upperArr[j]) {
                upper.className = "done"
                two = true
            }
        }
        for (j = 0; j < number.length; j++) {
            if (input.value[i] == number[j]) {
                num.className = "done"
                three = true
            }
        }
        for (j = 0; j < specialCharacters.length; j++) {
            if (input.value[i] == specialCharacters[j]) {
                special.className = "done"
                four = true
            }
        }
        if((four && five && one && two && three) == true){
            button.style.display = "block";
        }
        else{
            button.style.display = "none";
        }
        checkLenght();
    }
}
input.addEventListener("input", check)
function copy() {
    var copyText = document.getElementById("input");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  