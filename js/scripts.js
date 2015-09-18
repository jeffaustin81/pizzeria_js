function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = pizzaToppings;
    this.pizzaQuantity = pizzaQuantity;
};

Pizza.prototype.pizzaPrice = function() {
    var subtotal = 0;
    var toppings = this.pizzaToppings * 2;
    if(this.pizzaSize === "Large") {
        subtotal += 11;
    }

    if(this.pizzaSize === "Medium") {
        subtotal += 9;
    }

    if(this.pizzaSize === "Small") {
        subtotal += 7;
    }

    subtotal += toppings;
    var total = this.pizzaQuantity * subtotal;

    return total;
};
