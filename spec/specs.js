describe('Pizza', function() {
    it("creates a new pizza with the given information", function() {
            var testPizza = new Pizza("Large", 2, 1);
            expect(testPizza.pizzaSize).to.equal("Large");
            expect(testPizza.pizzaToppings).to.equal(2);
            expect(testPizza.pizzaQuantity).to.equal(1);
    });

    it("adds the pizzaPrice method to the class Pizza and evaluates method with input and desired output", function() {
        var testPizza = new Pizza("Large", 3, 1);
        expect(testPizza.pizzaPrice()).to.equal(17);
    });
});
