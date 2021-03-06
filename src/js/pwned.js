// timeout before a callback is called
let timeout;

// traversing the DOM and getting the input and span using their IDs
let password      = document.getElementById('PassEntry');
let strengthBadge = document.getElementById('StrengthDisp');

let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'); 
function StrengthChecker(PasswordParameter) {
    // We then change the badge's color and text based on the password strength
    let preventionText = document.getElementById("prevention_text");
    if (strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.innerHTML  = "Strong password ! <span>&#128513;</span>";
        preventionText.style.color = "green";
        preventionText.textContent = "Your password is perfect ! \n You're ready for war.";

    } else if (mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.innerHTML  = 'Medium password ! <span>&#128533;</span>';
        preventionText.style.color = "orange";
        preventionText.textContent = "Your password is safe but not enough ! \n You can add a special character to ensecure it.";

    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.innerHTML  = 'Weak password ! <span>&#128549;</span>';
        strengthBadge.textContent.fontcolor = "black";
        preventionText.style.color = "red";
        preventionText.textContent = "Your password is too weak ! \n You need at least a lowercase letter, an uppercase letter and a number.";
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display = 'block';
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if (password.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});

// Voir / Masquer le mot de passe
$('.btn').on('click', function(){

    if($(this).prev('input').attr('type') == 'password') {
        changeInputType($(this).prev('input'), 'text');
    } else {
        changeInputType($(this).prev('input'), 'password');
    }
    return false;
});

// Voir / Masquer le mot de passe
function changeInputType(x, type) {

    if(x.prop('type') == type)
        return x; 
    try {
        return x.prop('type', type);

    } catch(e) {

        let html = $("<div>").append(x.clone()).html();
        let regex = /type=(")?([^"\s]+)(")?/; 
        let tmp = $(html.match(regex) == null ? html.replace(">", ' type="' + type + '">') : html.replace(regex, 'type="' + type + '"'));

        tmp.data('type', x.data('type') );
        let events = x.data('events');
        let cb = function(events) {
            return function() {
                //Bind all prior events
                for(i in events)
                {
                    var y = events[i];
                    for(j in y)
                        tmp.bind(i, y[j].handler);
                }
            }
        }(events);
        x.replaceWith(tmp);
        setTimeout(cb, 10); 
        return tmp;
    }
}