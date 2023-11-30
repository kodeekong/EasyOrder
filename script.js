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
}

const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const fooditems = document.getElementById('food-items')
const details = document.querySelector('details')
const detailssub = document.getElementById('details-sub')

function search(){
    var input, filter, title, item;
    input = document.getElementById('searchInput');
    filter = input.valuetoUpperCase();
    title = document.getElementById('food-items');
    item = document.getElementsByClassName('food-title');

    for (i = 0 ; i< item.length; i++){
        a = title[i].getElementsByTagName('h5')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
            item[i].style.display = "";
        } else {
            item[i].style.display= "none";
        }
    }
}
