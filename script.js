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
    let email = document.getElementById('email').value 
    let password = document.getElementById('password').value 

    if(localStorage.getItem(email)){
        if(password === localStorage.getItem(email)){       
        location.replace('menu.html')
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

function search(){
    const input = document.getElementById('searchInput').value

    for( let i = 0; i < input.value; i++){
        
    }
}

function search1(){
    const searchbox = document.getElementById('searchInput').value.toUpperCase();
    const storeItem = document.getElementById('menu-container')
    const product = document.querySelectorAll('food-items')
    const pname = document.getElementsByTagName('h5')

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
        location.href="menu.html";
    }
    else
    {
        alert( "validation failed" );
    }
}