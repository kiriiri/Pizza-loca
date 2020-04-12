function Pizza(sizes,crusts,toppings) {
    this.sizes=sizes;
    this.crusts=crusts;
    this.toppings=toppings;
}

var sizes=["small","medium","large"];

var sizes= {
    small:500,
    medium:800,
    large:1000
};

var crusts=["Stuffed","Cheese","Cauliflower","Gluten-free","Boboli","Neapolitan","Silican","Vegan"];

var toppings=["Pepperonni","Mushroom","Onions","Sausage","Bacon","Pineapple","Black olives","Green pepper"];

function Crusts(crust,size,prices) {
    this.crust=crust;
    this.prices=price;
}

var crusts={
    small:200,
    medium:300,
    large:400
};

function Toppings(topping,sizes,prices) {
    this.topping=topping;
    this.sizes=size;
    this.price=price;
}

var toppings={
    small:200,
    medium:250,
    large:300
};

function Order(numberOfPizza,totalPrice) {
    this.numberOfPizza=numberOfPizza;
    this.totalPrice=totalPrice;
}
