const email = document.querySelector('#email');
const message = document.querySelector('#message');
const container = document.querySelector("#container");
const spinner = document.querySelector("#spinner");

const sendMail = () => {
    let newContent = `<div class="spinner-border text-primary"style="margin-left: 50%; margin-top: 50%;" role="status"></div>`;
    spinner.innerHTML = newContent;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "test34980test",
        Password : "txxugnwliqoxcqxe",
        To : 'ledain.alexis@gmail.com',
        From : email.value,
        Subject : "Subject from Extension",
        Body : message.value
    }).then(
      message =>{
          if(message == "OK"){
            container.innerHTML = `<div class="text-center"><div class="alert alert-success" role="alert">Message sent</div></div>`;
          } else {
            container.innerHTML = `<div class="text-center"><div class="alert alert-danger" role="alert">Message error</div></div>`;
          }

        setTimeout(() => {
            window.location.href = "menu.html";
        }, 2000);  
      } 
    );
}
const checkForm = (e) => {
    if(
        email.value && email.value.length > 0 && 
        email.value.trim().length > 0 && 
        message.value && message.value.length > 0 && 
        message.value.trim().length > 0){
        return true;
    }
    return false;
}

const generateCaptcha = () => {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (i = 0; i < 7; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("captcha").innerHTML = code;

}
const CheckValidCaptcha = () => {
  let string1 = removeSpaces(document.getElementById('captcha').innerHTML);
  let string2 = removeSpaces(document.getElementById('txtInput').value);

  if (string1 != string2) {
    document.getElementById('error').innerHTML = "Please enter a valid captcha.";
    return false;
  }

  return true;
}

const removeSpaces = (string) => {
  return string.split(' ').join('');
}

const myForm = document.querySelector("#contact-form");

myForm.addEventListener('submit',evt => {
    evt.preventDefault();
    let captchaCheck = CheckValidCaptcha();
    
    if(checkForm() && captchaCheck){
        sendMail();
    }

    if(!captchaCheck){
      generateCaptcha();
    }
    
});
window.addEventListener('load', generateCaptcha);