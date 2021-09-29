
// function name(){
// Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

// }

const submitform = (e) => {
    console.log("test");
}
const myForm = document.querySelector("#contact-form");

myForm.addEventListener('submit',evt => {
    evt.preventDefault();
    console.log('rrrrrrrrrrrrrrrrrrrr')
});