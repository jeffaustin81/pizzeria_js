function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = pizzaToppings;
    this.pizzaQuantity = pizzaQuantity;
};

Pizza.prototype.pizzaPrice = function() {
    var subtotal = 0;
    var toppings = this.pizzaToppings * 2;
    if (this.pizzaSize === "Large") {
        subtotal += 11;
    }

    if (this.pizzaSize === "Medium") {
        subtotal += 9;
    }

    if (this.pizzaSize === "Small") {
        subtotal += 7;
    }

    subtotal += toppings;
    var total = this.pizzaQuantity * subtotal;

    return total;
};

$(document).ready(function() {
    $("form#pizza-order").submit(function(event) {
        event.preventDefault();

        var toppings = $("input#toppings:checked").map(function() {return this.value;}).get().join(', ');
        var pizzaSize = $("select#pizza-size").val();
        var pizzaToppings = $("input#toppings:checked").length;
        var pizzaQuantity = parseInt($("select#pizza-quantity").val());

        var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaQuantity);

        $(".size").text(newPizza.pizzaSize);
        $(".toppings").text(toppings);
        $(".quantity").text(newPizza.pizzaQuantity);
        $(".price").text(newPizza.pizzaPrice());
        $("#show-order").show();
    });
});
