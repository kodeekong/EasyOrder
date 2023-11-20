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
        location.replace('index.html')
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
}