// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Alert when clicking on Order Now button
document.getElementById("order-btn").addEventListener("click", function() {
    alert("Your order is being processed! 🍕🍔");
});
