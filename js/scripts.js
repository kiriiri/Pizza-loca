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

function Sizes(size,prices) {
    this.size=size;
    this.prices=price;
}
var small=new Sizes("small",500);
var medium=new Sizes("medium", 800);
var large=new Sizes("large", 1000);

function Crusts(crust,prices) {
    this.crust=crust;
    this.prices=price;
}

var smallCrust=new Crusts(200);
var mediumCrust=new Crusts(300);
var largeCrust=new Crusts(400);

function Toppings(small,medium,large) {
    this.smallToppings=smallToppings;
    this.mediumToppings=mediumToppings;
    this.largeToppings=largeToppings;
}

var smallToppings=new Toppings(200);
var mediumToppings=new Toppings(350);
var largeToppings=new Toppings(500);    
