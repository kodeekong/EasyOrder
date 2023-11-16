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
            location.replace('menu.html')
        }
    }
    else{
        alert('Incorrect Password')
    }
}

