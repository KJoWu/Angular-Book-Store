(function() {
    var app = angular.module('store', []); /* making a module named store */
    app.controller("StoreController", function() {
        this.products = books;
    });

    var books = [{
        name: "Harry Potter",
        price: 20,
        description: "It's a Book, Harry",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "../img/1.jpg",
            thumb: "../img/1-t.jpg"
        }]
    }, {
        name: "The Mist",
        price: 15,
        description: "A scary misty story",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "../img/1.jpg",
            thumb: "../img/1-t.jpg"
        }]
    }, {
        name: "The Red Fox",
        price: 10,
        description: "It's a fox story",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "../img/1.jpg",
            thumb: "../img/1-t.jpg"
        }]
    }];
})();