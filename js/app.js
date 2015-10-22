(function() {
    var app = angular.module('store', []); /* making a module named store */
    app.controller("StoreController", function() {
        this.product = book;
    });

    var book = {
        name: "Harry Potter",
        price: 20,
        description: "It's a Book, Harry",
    };
})();