function Order(sizes,crusts,toppings) {
    this.sizes=sizes;
    this.crusts=crusts;
    this.toppings=toppings;
}

var sizes=new Order();
var crusts=new Order();
var toppings=new Order();

function Price(small,medium,large) {
    this.small=small;
    this.medium=medium;
    this.large=large;
}
var small=new Price(500);
var medium=new Price(800);
var large=new Price(1000);

function Crust(prices) {
    this.prices=price;
}

var smallCrust=new Crust(200);
var mediumCrust=new Crust(300);
var largeCrust=new Crust(400);

function Toppings(small,medium,large) {
    this.smallToppings=smallToppings;
    this.mediumToppings=mediumToppings;
    this.largeToppings=largeToppings;
}

var smallToppings=new Toppings(200);
var mediumToppings=new Toppings(350);
var largeToppings=new Toppings(500);
