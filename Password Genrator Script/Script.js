function passwordGenerator() {
    let length = parseInt(document.getElementById("length").value);
    let includeUppercase = document.getElementById("includeUppercase").checked;
    let includeLowercase = document.getElementById("includeLowercase").checked;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    let includeSymbols = document.getElementById("includeSymbols").checked;

    let charserts = "";
    if (includeUppercase) charserts += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charserts += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charserts += "0123456789";
    if (includeSymbols) charserts += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charserts.charAt(Math.floor(Math.random() * charserts.length));
    }

    document.getElementById("passwordDisplay").textContent = password;
}