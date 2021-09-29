let password = "";
let numberLettre;
let numberCaractereSpe;
let numberMaj;
let numberNumber;

function passwordGeneratore(){

    numberLettre = document.getElementById("lettre").value;
    numberLettre > 0 ? lettre(numberLettre) : "";
    numberMaj = document.getElementById("maj").value;
    numberMaj > 0 ? maj(numberMaj):"";
    numberNumber = document.getElementById("number").value;
    numberNumber > 0 ? number(numberNumber):"";
    numberCaractereSpe = document.getElementById("caractereSpe").value;
    numberCaractereSpe > 0 ? spe(numberCaractereSpe) : "";

    console.log(password);
}

function lettre(num){
    let letterR = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i <= num; i++) {
        let randomNumber = Math.floor(Math.random() * letterR.length);
        password += letterR.substring(randomNumber, randomNumber +1);
    }
}

function spe(num){
    let speR = "!@#$%^&*()";
    for (var i = 0; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * speR.length);
        password += speR.substring(randomNumber, randomNumber +1);
    }
}

function number(num){
    let numberR = "0123456789";
    for (var i = 0; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * numberR.length);
        password += numberR.substring(randomNumber, randomNumber +1);
    }
}
function maj(num){
    let majR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * majR.length);
        password += majR.substring(randomNumber, randomNumber +1);
    }
}