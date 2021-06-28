const values = [1, 2, 3, 4, 5, 6, 7, 8, "q", 'w', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'i', '/', '?', '>', '<', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "'"];


const randomText = document.querySelector("#random-text");
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    const numbers = document.querySelector("#form-control").value;
    if (numbers == "") {
        randomText.textContent = "Please Enter the Value";
    } else if (numbers > 20 || numbers < 0) {
        randomText.textContent = "Please enter the number between 20 and 0";
    } else {
        var passwrd = "";

        for (var i = 0; i < numbers; i++) {
            passwrd += values[randomNumber()];
        }

        randomText.textContent = passwrd;
    }

    // console.log(passwrd)


})

function randomNumber() {
    return Math.floor(Math.random() * values.length);
}