const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function login(){

    // var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // if(emailId.value.match(mailformat))
    // {
    // document.form1.text1.focus();
    // return true;
    // }
    // else
    // {
    // alert("Invalid email address.");
    // document.form1.text1.focus();
    // return false;
    // }
// }
    let email = document.getElementById('email').value 
    let password = document.getElementById('password').value 

    if(localStorage.getItem(email)){
        if(password === localStorage.getItem(email)){       
        location.replace('main.html')
        }
    }
    else{
        alert('incorrect Password')
    }
}

function signup(){
    let email = document.getElementById('bemail').value 
    let password = document.getElementById('bassword').value 

    localStorage.setItem(email, password)
    location.replace('index.html')
}

function manager(evt){
    if (evt.target.value == 'Admin')
    {
    location.replace('admin.html')
    }
}

function validate()
{
    if(   document.getElementById("email1").value == "admin"
       && document.getElementById("password1").value == "MapleMafia4Ever" )
    {
        location.href="adminMenu.html";
    }
    else
    {
        alert( "validation failed" );
    }
}

function goTo(){
    location.href='menu.html'
}
function goTo1(){
    location.href='cashout.html'
}
function goTo2(){
    location.href='checkout.html'
}

function cashOCard(evt){

    if (evt.value == "Cash")
    {
        let setForm = document.getElementsByClassName("cashRow")[0];
        setForm.innerHTML = ``;
    }

    else
    {
        let setForm = document.getElementsByClassName("cashRow")[0];
        setForm.innerHTML = `
        <label>Card Name:</label>  <input id="name" name="name" placeholder="Name" required="">
        <br>
        <label>Card Number:</label>  <input id="cardNumber" name="cardNumber" inputmode="numeric" type="tel" autocomplete="cc-number" maxlength="22" placeholder="xxxx-xxxx-xxxx-xxxx" required="">
        <br>
        <label>Exp. Date:</label>    <input id="cardDate" placeholder="10/25" type="text" maxlength="5" required />
        <br>
        <label>CCV:</label>  <input id="ccv"placeholder="123" type="text" maxlength="3" required />
        <br><br> `;
    }
}