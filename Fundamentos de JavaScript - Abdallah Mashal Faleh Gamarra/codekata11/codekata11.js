let inputName = document.querySelector(".saluda");
let buttonSaluda = document.querySelector("button");

buttonSaluda.addEventListener("click", function(event) {
    if (inputName.value !== "") {
        alert("Hola " + inputName.value);
    }
});