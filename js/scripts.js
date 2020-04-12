document.addEventListener('DOMContentLoaded',function () {
    var pizzaSizes=document.getElementById("sizes");
    var pizzaCrusts=document.getElementById("crusts");
    var pizzaToppings=document.getElementById("toppings");

    var sizes=["small","medium","large"];
    var crusts=["Stuffed","Cheese","Cauliflower","Gluten-free","Boboli","Neapolitan","Silican","Vegan"];
    var toppings=["Pepperonni","Mushroom","Onions","Sausages","Bacon","Pineapple","Black olives","Green pepper"];

    var crustBasePrice=100;
    var toppingsBasePrice=200;

    for(var i=0; i<sizes.length;i++) {
        var size=sizes[i];
        var el=document.createElement("option");
        el.textContent=size;
        el.value=i;
        pizzaSizes.appendChild(el);
    }
    for(var i=0; i<crusts.length; i++) {
        var crust=crusts[i];
        var el=document.createElement("option");
        el.textContent=crust;
        el.value=crustBasePrice;
        pizzaCrusts.appendChild(el);
    }
    for(var i=0; i<toppings.length;i++) {
        var topping=toppings[i];
        var el=document.createElement("option");
        el.textContent=topping;
        el.value=toppingsBasePrice;
        pizzaToppings.appendChild(el);
    }    
});
var pizzaBasePrice=500;

function SubmitData () {
    var selectedPizzaSize=parseInt(document.getElementById("sizes").value);
    var selectedSize=$("#sizes option:selected").text();
    var selectedCrustPrice=parseInt(document.getElementById("crusts").value);
    var selectedCrust=$("crusts option:selected").text();
    var selectedToppingPrice=parseInt(document.getElementById("toppings").value);
    var selectedTopping=$("#toppings option:selected").text();
    var numberOfPizzas=parseInt(document.getElementById("number-of-pizzas").value);

    if(selectedPizzaSize==0) {
        selectedCrustsPrice=selectedCrustsPrice + increasePrice(selectedCrustsPrice, 10)
        selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice, 10)
    }else if(selectedPizzaSize==1) {
        selectedCrustsPrice=selectedCrustsPrice +increasePrice(selectedCrustsPrice,15)
        selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice,15)
    }else {
        selectedCrustsPrice=selectedCrustsPrice + increasePrice(selectedCrustsPrice,20)
        selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice,20)
    }

    var order=new order(selectedSize, selectedCrust,selectedCrustPrice,selectedToppingPrice,selectedTopping,numberOfPizzas);

    console.log(order)
}

//increased price by %

function increasePrice(price,percentage) {
    return ((percentage/100)*price)
}

function order(selectedSize,selectedCrust,selectedCrustsPrice,selectedToppingPrice,selectedTopping,numberOfPizzas) {
    this.selectedSize=selectedSize;
    this.SelectedCrust=selectedCrust;
    this.selectedCrustsPrice=selectedCrustsPrice;
    this.selectedToppingPrice=selectedToppingPrice;
    this.selectedTopping=selectedTopping;
    this.numberOfPizzas=numberOfPizzas;
}

