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
        setForm.innerHTML = `<input type="text" placeholder="Order Name">
        <select name="percentages" id="tip">
            <option value="">Tip?</option>
            <option value="">20%</option>
            <option value=>15%</option>
            <option value="">10%</option>
            <option value="">0%</option>
        </select>`;
    }

    else
    {
        let setForm = document.getElementsByClassName("cashRow")[0];
        setForm.innerHTML = `
        <label>Card Name:</label>  <input id="name" name="name" placeholder="Name" required="" style="width: 300px; font-size: 1.25rem; height: 50px; padding: 5px; margin-right:20px; margin: 0px; margin-bottom: 5px;">
        <br>
        <label>Card Number:</label>  <input id="number" name="number" inputmode="numeric" type="tel" maxlength="22" placeholder="xxxx-xxxx-xxxx-xxxx" required="" style="width: 300px; font-size: 1.25rem; height: 50px; padding: 5px; margin-right:20px; margin: 0px; margin-bottom: 5px;">
        <br>
        <label>Exp. Date:</label>    <input id="date" placeholder="01/01" type="text" maxlength="5" required /style="width: 300px; font-size: 1.25rem; height: 50px; padding: 5px; margin-right:20px; margin: 0px; margin-bottom: 5px;">
        <br>
        <label>CCV:</label>  <input id="ccv"placeholder="123" type="text" maxlength="3" required /style="width: 300px; font-size: 1.25rem; height: 50px; padding: 5px; margin-right:20px; margin: 0px; margin-bottom: 5px;">
        <br><br> `;
    }
}

function letGo(){
    document.getElementsByClassName('cart-item')
}

function addItem(itemName, title, image, price){
    
}