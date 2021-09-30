let password1 = "";
let password2 = "";
let password3 = "";
let password4 = "";
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

        let lengthPassword = parseInt(l)+ parseInt(m)+ parseInt(s)+parseInt(n);

        if (lengthPassword == 8) {
            document.getElementById("picturePasswordGenerator").src = "../../image/5.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 1"
        } else if (lengthPassword > 8 &&  lengthPassword <= 16) {
            document.getElementById("picturePasswordGenerator").src = "../../image/4.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 2"
        } else if (lengthPassword > 16 && lengthPassword <= 26) {
            document.getElementById("picturePasswordGenerator").src = "../../image/3.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 3"
        } else if (lengthPassword > 26 && lengthPassword <= 34) {
            document.getElementById("picturePasswordGenerator").src = "../../image/2.png";
            document.getElementById("lvl").innerHTML = "Mot de passe niveau 4"
        }else if (lengthPassword > 34) {
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


    function randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }
    let passwordAll = password1+password2+password3+password4;
    let passwordArray = passwordAll.split('');
    passwordArray = randomize(passwordArray);
    let response = passwordArray.join('');

    if (response) {

        document.getElementById("passwordResponse").value = response;
        password1 = "";
        password2 = "";
        password3 = "";
        password4 = "";
    }
});

function lettre(num) {
    let letterR = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 1; i <= num; i++) {
        let randomNumber = Math.floor(Math.random() * letterR.length);
        password1 += letterR.substring(randomNumber, randomNumber + 1);
    }
}

function spe(num) {
    let speR = "!@#$%^&*()";
    for (var i = 1; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * speR.length);
        password2 += speR.substring(randomNumber, randomNumber + 1);
    }
}

function number(num) {
    let numberR = "0123456789";
    for (var i = 1; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * numberR.length);
        password3 += numberR.substring(randomNumber, randomNumber + 1);
    }
}

function maj(num) {
    let majR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 1; i <= num; i++) {
        var randomNumber = Math.floor(Math.random() * majR.length);
        password4 += majR.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("copyPassword").addEventListener("click", function () {
        var copyText = document.getElementById("passwordResponse");
        copyText.select();
        document.execCommand("copy");
    });
}
