function getCart(){

return JSON.parse(localStorage.getItem("cart")) || [];

}

function saveCart(cart){

localStorage.setItem("cart", JSON.stringify(cart));

}

function addToCart(name, price){

let cart = getCart();

cart.push({name,price});

saveCart(cart);

alert(name + " added to cart");

}

function displayCart(){

let cart = getCart();

let container = document.getElementById("cartItems");

let total = 0;

container.innerHTML="";

cart.forEach((item,index)=>{

total += item.price;

container.innerHTML += `
<div class="cart-item">
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">Remove</button>
</div>
`;

});

document.getElementById("total").innerText = "Total: ₹" + total;

}

function removeItem(index){

let cart = getCart();

cart.splice(index,1);

saveCart(cart);

displayCart();

}
