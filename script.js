const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function login(emailId){

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailId.value.match(mailformat))
    {
    document.form1.text1.focus();
    return true;
    }
    else
    {
    alert("Invalid email address.");
    document.form1.text1.focus();
    return false;
    }
}    
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

function search1(){
    const searchbox = document.getElementById('searchInput').value.toUpperCase();
    const storeItem = document.getElementById('menu-container')
    const product = document.querySelectorAll('details-sub')
    const pname = document.getElementsByClassName('details-sub')

    for( var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h5')[0];

        if(match){
           let textValue = match.textContent || match.innerHTML

           if(textValue.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display = "";
            } else {
            product[i].style.display = "none"
                }
            }
        }
    }
