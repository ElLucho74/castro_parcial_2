function login() {
    const storedUsername = "examen_parcial2";
    const storedPassword = "Voyporel100";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    if (username === storedUsername && password === storedPassword) {
        window.location.href = "curris.html";
    } else {
        messageElement.textContent = "Inicio de sesión fallido";
        messageElement.style.color = "red";
    }
}
