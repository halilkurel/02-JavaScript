// Storage Controller
const StorageController = (function(){

})();



// Product Controller
const ProductController = (function(){
    //Private
    const Product = function(id, name, price){
        this.id= id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products : [
            {id:0, name:'Monitor', price:100},
            {id:1, name:'Ram', price:300},
            {id:2, name:'Klavye', price:10}
        ],
        selectedProduct:null,
        totalPrice:0
    }
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
    //2-
    const Selectors = {
        productList : "#item-list"
    }
    
    return {
        //1-createProductList  oluşturalım ve veritabanından gelen verileri
        createProductList: function(products){
            let html ='';
            products.forEach(prd=> {
                html+=`
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}</td>
                    <td class="text-right">
                        <button type="submit" class="btn btn-warning btn-sm"><i class="far fa-edit"></i></button>
                    </td>
                </tr>
                `;
            });

            document.querySelector("#item-list").innerHTML = html;
        },
        //3-
        getSelectors : function(){
            return Selectors;
        }
    }

})();


// App Controller
//Sayfa ilk çalıştırğında çalışacak kısım
const AppController = (function(ProductCtrl,UICtrl){


    return {
        init: function(){
            console.log('starting app..');
            const products = ProductCtrl.getProduct();
            UICtrl.createProductList(products);
        }
    }
    
})(ProductController,UIController);

AppController.init();