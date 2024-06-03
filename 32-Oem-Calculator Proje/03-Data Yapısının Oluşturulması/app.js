// Storage Controller
const StorageController = (function(){

})();



// Product Controller
const ProductController = (function(){
    //1-Private
    const Product = function(id, name, price){
        this.id= id;
        this.name = name;
        this.price = price;
    }
    //2-
    const data = {
        products : [
            {id:0, name:'Monitor', price:100},
            {id:0, name:'Ram', price:300},
            {id:0, name:'Klavye', price:10}
        ],
        selectedProduct:null,
        totalPrice:0
    }
    //3-
    return {
        getProduct: function(){
            return data.products;
        },
        getData: function(){
            return data;
        }
    }

})();


//UI Controller
const UIController = (function(){

})();


// App Controller
//Sayfa ilk çalıştırğında çalışacak kısım
const AppController = (function(ProductCtrl,UICtrl){

    //4-
    return {
        init: function(){
            console.log('starting app..');
            const products = ProductCtrl.getProduct();
            UICtrl.createProducts(products);
        }
    }
    
})(ProductController,UIController);

AppController.init();