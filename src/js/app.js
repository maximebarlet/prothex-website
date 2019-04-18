function getName() {
    var name = document.getElementById("name").value;
    document.getElementById("userName1").innerHTML = name;
    document.getElementById("userName2").innerHTML = name;
    console.log("Receive");

}

// Get the input field
var input = document.getElementById("name");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit").click();
    }
});






setInterval(twitch, 2000);
const num = ["Artists 👨‍🎨", " ", "Athletes 🏃", " ", "Bikers 🏍️", " ", "Musicians 🎻", " ", "Whole World 🌎", " "]

let i = 0;

var delay = 1000;
function twitch() {
    let shown = document.querySelector(".shown");
    let hidden = document.querySelector(".hidden");
    let wait = document.querySelector(".wait");

    shown.classList.replace("shown", "hidden");
    hidden.classList.replace("hidden", "wait");
    wait.classList.replace("wait", "shown");




    wait.textContent = num[i];
    if (i == 9) i = 0; else i++;
}