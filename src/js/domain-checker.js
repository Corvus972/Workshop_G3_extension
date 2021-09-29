/* 
Email Checker
*/

//setup before functions
let timer; //time in ms
const domain = document.querySelector("#domainEntry");

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
                "organization": rst.data["organization"]
            };
            displayMessage(true, result);

          });
          
      } else {
          displayMessage(false);
      }
    }, 2000);
};

const callApi = async (domain) => {
    let response = await fetch(`https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=1fe7efba332b8c0f6bd493eab64aa2b7c94dcc13`);
    let data = await response.json();
    return data;
}

const displayMessage = (good, data=null) => {
    //reset variables
    myAlert[0].className = ""; 
    myAlert[0].innerHTML = "";

    if(good){
        if(data["organization"] !== null){
            myAlert[0].className = "alert alert-success text-center"; 
            myAlert[0].innerHTML = "Reliable domain";
        } else {
            myAlert[0].className = "alert alert-danger text-center"; 
            myAlert[0].innerHTML = "Risky domain";
        }
        
    } else {
        myAlert[0].className = "alert alert-danger text-center"; 
        myAlert[0].innerHTML = "Erreur";
    }
    
};


domain.addEventListener('keyup', updateValue);

