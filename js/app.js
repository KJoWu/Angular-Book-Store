(function() {
    var app = angular.module('store', []); /* making a module named store */
    app.controller("StoreController", function() {
        this.products = books;
    });


/*You can also do:
images:[
"1.jpg", 
"2.jpg",
"3.jpg"]

if an image gallery in html doesn't have images, you can check it by:
ng-show="products.images.length"
*/

    var books = [{
        name: "Toy Story",
        price: 20,
        description: "It's a Book, Harry",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "img/1.jpg",
            thumb: "img/1-t.jpg"
        }]
    }, {
        name: "Up",
        price: 15,
        description: "A scary misty story",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "img/2.jpg",
            thumb: "img/2-t.jpg"
        }]
    }, 
    {
        name: "movie",
        price: 15,
        description: "A scary misty story",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "img/3.jpg",
            thumb: "img/3-t.jpg"
        }]
    },
    {
        name: "movie",
        price: 15,
        description: "A scary misty story",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "img/4.jpg",
            thumb: "img/4-t.jpg"
        }]
    },
    {
        name: "movie",
        price: 15,
        description: "A scary misty story",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "img/5.jpg",
            thumb: "img/5-t.jpg"
        }]
    },
    {
        name: "movie",
        price: 15,
        description: "A scary misty story",
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "img/6.jpg",
            thumb: "img/6-t.jpg"
        }]
    }];
})();
