var pizzaBasePrice=500;
var deliveryPrice=0;
var deliverySelected = false;


document.addEventListener('DOMContentLoaded',function () {
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault()
    })

    var pizzaSizes=document.getElementById("sizes");
    var pizzaCrusts=document.getElementById("crusts");
    var pizzaToppings=document.getElementById("toppings");

    var sizes=["small","medium","large"];
    var crusts=["Stuffed", "Cheese", "Cauliflower", "Gluten-free", "Boboli", "Neapolitan", "Silican", "Vegan"];
    var toppings=["Pepperonni", "Mushroom", "Onions", "Sausages", "Bacon", "Pineapple", "Black olives","Green pepper"];

    var crustBasePrice=100;
    var toppingsBasePrice=200;

    for(var i=0;i<sizes.length;i++) {
        var size=sizes[i];
        var el=document.createElement("option");
        el.textContent=size;
        el.value=i;
        pizzaSizes.appendChild(el);
    }
    for(var i=0;i<crusts.length;i++) {
        var crust=crusts[i];
        var el=document.createElement("option");
        el.textContent=crust;
        el.value=crustBasePrice;
        pizzaCrusts.appendChild(el);
    }
    for(var i=0;i<toppings.length;i++) {
        var topping=toppings[i];
        var el=document.createElement("option");
        el.textContent=topping;
        el.value=toppingsBasePrice;
        pizzaToppings.appendChild(el);
    }   


    $('input[type=radio]').click(function(){
        var deliveryAddressHolder = document.getElementById("deliveryAddressHolder")
        if (this.id ="deliveryselected")
            if(this.value = "yes"){
                deliveryPrice = 150
                deliveryAddressHolder.style.visibility = 'visible'
                deliverySelected = true;
                alert("Delivery charge " + deliveryPrice);

            }else{
                deliveryPrice = 0
                deliveryAddressHolder.style.visibility = 'hidden'
                deliverySelected = false;
            }
    });

});


function submitData () {
    var selectedPizzaSize=parseInt(document.getElementById("sizes").value);
    var selectedSize=$("#sizes option:selected").text();
    var selectedCrustsPrice=parseInt(document.getElementById("crusts").value);
    var selectedCrust=$("#crusts option:selected").text();
    var selectedToppingPrice=parseInt(document.getElementById("toppings").value);
    var selectedTopping=$("#toppings option:selected").text();
    var numberOfPizzas=parseInt(document.getElementById("numberOfPizzas").value);
    var deliveryAddress=document.getElementById("deliveryAddress").value;
    var pizzaPrice = 0;

    if(selectedPizzaSize===0) {
        selectedCrustsPrice=selectedCrustsPrice + increasePrice(selectedCrustsPrice, 10)
        selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice, 10)
        pizzaPrice = pizzaBasePrice + increasePrice(pizzaBasePrice, 10) + selectedCrustsPrice + selectedToppingPrice
    }else if(selectedPizzaSize===1) {
        selectedCrustsPrice=selectedCrustsPrice +increasePrice(selectedCrustsPrice,15)
        selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice,15)
        pizzaPrice = pizzaBasePrice + increasePrice(pizzaBasePrice, 15) + selectedCrustsPrice + selectedToppingPrice
    }else if(selectedPizzaSize===2) {
        selectedCrustsPrice=selectedCrustsPrice + increasePrice(selectedCrustsPrice,20)
        selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice,20)
        pizzaPrice = pizzaBasePrice + increasePrice(pizzaBasePrice, 20) + selectedCrustsPrice + selectedToppingPrice
    }
    
     if(deliverySelected && numberOfPizzas > 0) {
       pizzaPrice = (pizzaPrice*numberOfPizzas) + deliveryPrice
    }else{
        pizzaPrice = pizzaPrice * numberOfPizzas
    }

    var order=new Order(selectedSize, selectedCrust,selectedCrustsPrice,selectedToppingPrice,selectedTopping,numberOfPizzas,pizzaPrice,deliveryPrice,deliveryAddress);    

    displayOrder(order)
}

//increased price by %

function increasePrice(price,percentage) {
    return ((percentage/100)*price)
}

function Order(selectedSize,selectedCrust,selectedCrustsPrice,selectedToppingPrice,selectedTopping,numberOfPizzas, pizzaPrice,deliveryPrice,deliveryAddress) {
    this.selectedSize=selectedSize;
    this.SelectedCrust=selectedCrust;
    this.selectedCrustsPrice=selectedCrustsPrice;
    this.selectedToppingPrice=selectedToppingPrice;
    this.selectedTopping=selectedTopping;
    this.numberOfPizzas=numberOfPizzas;
    this.deliveryPrice=deliveryPrice;
    this.deliveryAddress=deliveryAddress;
    this.totalPrice = pizzaPrice;
}

function displayOrder(order){
    var totalPrice = document.getElementById("totalPrice")
    var totalPriceHolder = document.getElementById("pizzaPrice")
    totalPriceHolder.style.visibility = 'visible'
    totalPrice.value = order.totalPrice
    deliveryAddressHolder.style.visibility= 'visible'
    checkout.style.visibility='visible'
    if(deliverySelected) {
        alert("Your order will be delivered to your location once you checkout.");
    }
}
$("#checkout").click(function(event) {    event.preventDefault();

    $("#sizes").append(selectedSize);
    $("#crusts").append(selectedCrust);
    $("#toppings").append(selectedTopping);
    $("#number").append(numberOfPizzas);
    $("#total").append(pizzaPrice);
});
 