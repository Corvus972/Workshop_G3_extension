const email = document.querySelector('#email');
const message = document.querySelector('#message');
const container = document.querySelector("#container");

const sendMail = () => {
    let newContent = `<div class="spinner-border text-primary"style="margin-left: 50%; margin-top: 50%;" role="status"></div>`;
    container.innerHTML = newContent;

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
            container.innerHTML = `<div class="text-center mt-5"><div class="alert alert-success" role="alert">Message sent</div></div>`;
          } else {
            container.innerHTML = `<div class="text-center mt-5"><div class="alert alert-danger" role="alert">Message error</div></div>`;
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
const myForm = document.querySelector("#contact-form");

myForm.addEventListener('submit',evt => {
    evt.preventDefault();
    
    if(checkForm()){
        sendMail();
    }
    
});