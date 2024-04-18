
// adding variables and initializing
var Form1 = document.getElementById('Form1');
var Form2 = document.getElementById('Form2');
var Form3 = document.getElementById('Form3');

// for next and back buttons on form
var Next1 = document.getElementById('Next1');
var Next2 = document.getElementById('Next2');
var Back1 = document.getElementById('Back1');
var Back2 = document.getElementById('Back2');

//for progress bar at top of form
var progress= document.getElementById('progress');

// Swipe animation between forms with next and back buttons
Next1.onclick= function(){
    Form1.style.left= "-450px";
    Form2.style.left="40px";
    progress.style.width="240px";
}
Back1.onclick= function(){
    Form1.style.left= "40px";
    Form2.style.left="450px";
    progress.style.width="120px";
}
Next2.onclick= function(){
    Form2.style.left= "-450px";
    Form3.style.left="40px";
    progress.style.width="360px";
}
Back2.onclick= function(){
    Form2.style.left= "40px";
    Form3.style.left="450px";
    progress.style.width="240px";
}

// order form adding total with quantity and price
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("orderForm");
    form.classList.add("show");
});

function calculateTotal() {
    var quantity = parseFloat(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);

    if (isNaN(quantity) || isNaN(price)||quantity < 1 || price < 0.01) {
        alert("Please enter valid quantity and price values.");
        return;
    }

    var total = quantity * price;
    document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
}