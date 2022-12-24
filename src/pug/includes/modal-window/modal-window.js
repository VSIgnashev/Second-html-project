let requestCallModal = document.getElementsByClassName("request-call-modal")[0];
let openRequestCallModalButton = document.getElementById("request-a-call");
let closeRequestCallModalButton = document.getElementsByClassName("question-form__cross-icon")[0];

openRequestCallModalButton.onclick = function () {
    requestCallModal.style.display = "flex";
}

closeRequestCallModalButton.onclick = function () {
    requestCallModal.style.display = "none";
}