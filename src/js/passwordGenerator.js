let password = "";
let numberLettre;
let numberCaractereSpe;
let numberMaj;
let numberNumber;


document.getElementById("lettre").addEventListener("click", function () {
    document.getElementById("valueLettre").innerHTML = "Lettre:"+" "+document.getElementById("lettre").value;
})
document.getElementById("caractereSpe").addEventListener("click", function () {
    document.getElementById("valueSpe").innerHTML ="Caractére spéciaux:" +" "+document.getElementById("caractereSpe").value;
})
document.getElementById("maj").addEventListener("click", function () {
    document.getElementById("valueMaj").innerHTML = "Majuscule:" +" "+document.getElementById("maj").value;
})
document.getElementById("number").addEventListener("click", function () {
    document.getElementById("valueNum").innerHTML = "Chiffre:" +" "+ document.getElementById("number").value;
})

document.querySelectorAll('.form-range').forEach(item => {
    item.addEventListener('click', event => {
        let l = document.getElementById("lettre").value;
        let m = document.getElementById("maj").value;
        let n = document.getElementById("number").value;
        let s = document.getElementById("caractereSpe").value;

        if (l == 2 && m == 2 && n == 2 && s == 2) {
            document.getElementById("picturePasswordGenerator").src = "../../image/5.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 1"
        } else if (l > 2 && l <= 4 && m > 2 && m <= 4 && n > 2 && n <= 4 && s > 2 && s <= 4) {
            document.getElementById("picturePasswordGenerator").src = "../../image/4.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 2"
        } else if (l >= 4 && l <= 6 && m >= 4 && m <= 6 && n >= 4 && n <= 6 &&  s >= 4 && s <= 6) {
            document.getElementById("picturePasswordGenerator").src = "../../image/3.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 3"
        } else if (l >= 6 && l<=8 && m >= 6 && m <=8 && n >= 6 && n <= 8  && s >= 6 && s <= 8 ) {
            document.getElementById("picturePasswordGenerator").src = "../../image/2.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 4"
        }else if (l > 8 && m > 8 && n > 8 && s > 8) {
            document.getElementById("picturePasswordGenerator").src = "../../image/1.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 5"
        }
    })
})


document.getElementById("createPassword").addEventListener("click", function () {

    numberLettre = document.getElementById("lettre").value;
    numberLettre > 0 ? lettre(numberLettre) : "";
    numberMaj = document.getElementById("maj").value;
    numberMaj > 0 ? maj(numberMaj) : "";
    numberNumber = document.getElementById("number").value;
    numberNumber > 0 ? number(numberNumber) : "";
    numberCaractereSpe = document.getElementById("caractereSpe").value;
    numberCaractereSpe > 0 ? spe(numberCaractereSpe) : "";

    let response = password;
    if (response) {

        document.getElementById("passwordResponse").value = response;
        password = ""
    }
});

function lettre(num) {
    let letterR = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 1; i <= num; i++) {
        let randomNumber = Math.floor(Math.random() * letterR.length);
        password += letterR.substring(randomNumber, randomNumber + 1);
    }
}

function spe(num) {
    let speR = "!@#$%^&*()";
    for (var i = 1; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * speR.length);
        password += speR.substring(randomNumber, randomNumber + 1);
    }
}

function number(num) {
    let numberR = "0123456789";
    for (var i = 1; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * numberR.length);
        password += numberR.substring(randomNumber, randomNumber + 1);
    }
}

function maj(num) {
    let majR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 1; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * majR.length);
        password += majR.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("copyPassword").addEventListener("click", function () {
        var copyText = document.getElementById("passwordResponse");
        copyText.select();
        document.execCommand("copy");
    });
}