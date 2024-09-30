// 9/30/24: Event listeners for Profile and Cart buttons
document.getElementById('profileButton').addEventListener('click', function() {
    document.getElementById('profile').style.display = 'block';
    document.getElementById('cart').style.display = 'none';
});

document.getElementById('cartButton').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
});

// 9/30/24: Add to Cart Functionality
const cartButton = document.getElementById('cartButton');
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
        cartCount++;
        cartButton.textContent = `Cart (${cartCount})`;
        document.getElementById('cart').innerHTML = `<h2>Your Cart</h2><p>Items in cart: ${cartCount}</p>`;
    });
});
