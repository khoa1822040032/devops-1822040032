
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("helloButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.textContent = "JavaScript đang hoạt động!";
    });
});
