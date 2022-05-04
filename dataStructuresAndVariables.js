var shopper = {
    name: 'Andrew',
    age: 25,
    likesToShop: false,
    displayShopper: function() {
        console.log(shopper.name + ", " + shopper.age + ", " + shopper["likesToShop"] + ".");
    },
    groceryItems: ['apples', 'oranges', 'peppers'],
}

shopper.displayShopper();