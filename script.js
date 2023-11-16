const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function signup(){
    let email = document.getElementById('email').value 
    let password = document.getElementById('password').value 

    localStorage.setItem(email, password)
    location.replace('index.html')
}

function login(){
    let email = document.getElementById('email').value 
    let password = document.getElementById('password').value 

    if(localStorage.getItem(email)){
        if(password === localStorage.getItem(email)){
            alert('correct')
        }
    }
    else{
        alert('Incorrect Password')
    }
}
