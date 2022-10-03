console.log("JS Funkar");

const hello = document.querySelector("#hello");
const byeButton = document.querySelector("#byeBye");

byeButton.addEventListener(
    "click",
    function(event) {
        hello.innerHTML = "Goodbye World!";
    },
    false
);