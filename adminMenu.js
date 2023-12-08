if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function remove(){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    addItemToCart(title, price)
}

function ready(){
    var removeButton = document.getElementsByClassName('btn-danger')
    for(var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i]
        button.addEventListener('click', removeItem) 
        } 
    }
    
function removeItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCart()
}
    
function updateCart(){
        var itemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = itemContainer.getElementsByClassName('cart-row')
        var total = 0
        for(var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
            [0]
            var price = parseFloat(priceElement.innerText.replace('$', ''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }
    
        var quantityInput = document.getElementsByClassName('cart-quantity-input')
        for( var i = 0; i < quantityInput.length; i++) {
            var input = quantityInput[i]
            input.addEventListener('change', quantityChanged)
        }
    
function quantityChanged(event){
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCart()
    }
    
        var addButton = document.getElementsByClassName('shop-item-button')
        for( var i = 0; i < addButton.length; i++){
            var button = addButton[i]
            button.addEventListener('click', addToCartClicked)
        }
    
// function addItemToCart(title, price){
//         var cartRow = document.createElement('div')
//         cartRow.classList.add('cart-row')
//         var cartItems = document.getElementsByClassName('cart-items')[0]
//         var cartItemNames = cartItems.getElementsByClassName('title')
//         for (var i =0; i < cartItemNames.length; i++) {
//             if( cartItemNames[i].innerText == title){
//                 alert('Already added to cart')
//                 return
//             }
//         }
//         var cartRowContents = `
//             <div class="cart-item cart-column">
//                 <span class="title">${title}</span>
//             </div>
//             <div class="cart-quantity cart-column">
//                 <button class="btn btn-danger" type="button">ADD BACK</button>
//             </div> `
//         cartRow.innerHTML = cartRowContents
//         cartItems.append(cartRow)
//         cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem)
//     }
function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i =0; i < cartItemNames.length; i++) {
        if( cartItemNames[i].innerText == title){
            alert('Already added to cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src=" ${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <button class="btn btn-danger" type="button">Add Back</button>
        </div> `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change' , quantityChanged)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

