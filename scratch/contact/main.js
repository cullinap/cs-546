let inputName = document.getElementById('input-name')
let inputMail = document.getElementById('input-mail')
let inputMessage = document.getElementById('input-message')
let button = document.querySelector('.submit-button')
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form')


function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test(inputMail.value) && inputMessage.value.trim() !== "") {
        button.style.backgroundColor = '#fa923f';
        button.disabled = false
    } else {
        button.style.backgroundColor = '#979695';
        button.disabled = true
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event)
})