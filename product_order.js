function calcTotal() {
    var quantity = parseFloat(document.getElementById("quantity").value);
    var unitPrice = parseFloat(document.getElementById("unit_price").value);
    var discountRate = parseFloat(document.getElementById("discount_rate").value);
  
    var discountedAmount = (quantity * unitPrice * discountRate) / 100;
    var orderTotal = quantity * unitPrice - discountedAmount;
  
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
  
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML =
      "Thank you for ordering, " +
      firstName +
      " " +
      lastName +
      ". Your order total is $" +
      orderTotal.toFixed(2) +
      ".";
  }
  
  function init() {
    var orderButton = document.getElementById("order_button");
    orderButton.onclick = calcTotal;
  }
  
  window.onload = init;