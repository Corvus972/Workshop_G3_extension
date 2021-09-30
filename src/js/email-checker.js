/* 
Email Checker
*/

//setup before functions
let timer; //time in ms
const email = document.querySelector("#emailEntry");

const myAlert = document.querySelectorAll(".alert");

const updateValue = (e) => {
    let apiResult = null;

    window.clearTimeout(timer);

    // here is the closures javascript magic happens.
    const value = e.target.value;
    timer = setTimeout(() => {
      if(value && value !== ''){
          apiResult = callApi(value).then(rst => {
            let result = {
                "score": rst.data["score"],
                "result": rst.data["result"]
            };
            displayMessage(true, result);

          });
          
      } else {
          displayMessage(false);
      }
    }, 2000);
};

const callApi = async (email) => {
    let response = await fetch(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=1fe7efba332b8c0f6bd493eab64aa2b7c94dcc13`);
    let data = await response.json();
    return data;
}

const displayMessage = (good, data=null) => {
    //reset variables
    myAlert[0].className = ""; 
    myAlert[0].innerHTML = "";

    if(good){
        if(data["result"] !== "risky"){
            myAlert[0].className = "alert alert-success text-center"; 
            myAlert[0].innerHTML = "Reliable mail";
        } else {
            myAlert[0].className = "alert alert-danger text-center"; 
            myAlert[0].innerHTML = "your email has been leaked";
        }
        
    } else {
        myAlert[0].className = "alert alert-danger text-center"; 
        myAlert[0].innerHTML = "Erreur";
    }
    
};


email.addEventListener('keyup', updateValue);

