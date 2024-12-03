const passwordInput = document.getElementById("text-input");

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";  
    let password = "";
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password = password + characters[randomIndex];
    }
    passwordInput.value = password;


}

function CopyToClipboard () {

    const pass = document.getElementById("text-input");
    navigator.clipboard.writeText(pass.value);
    alert("Text Copied!")
}