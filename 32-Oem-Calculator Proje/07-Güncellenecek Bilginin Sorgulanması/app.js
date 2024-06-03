// Storage Controller
const StorageController = (function () {

})();



// Product Controller
const ProductController = (function () {
    //Private
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {

        products: [
            // {id:0, name:'Monitor', price:100},
            // {id:1, name:'Ram', price:300},
            // {id:2, name:'Klavye', price:10}
        ],
        selectedProduct: null,
        totalPrice: 0
    }
    return {
        getProduct: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        
        addProduct: function (name, price) {
            let id;
            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            }
            else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;

        },
        getTotal : function(){
            let total=0;


            data.products.forEach(function(item){
                total+=item.price;
            });

            data.totalPrice = total;
            return data.totalPrice;
        },
        //6-
        getProductById: function(id){
            let product=null;

            data.products.forEach(function(prd){
                if(prd.id ==id){
                    product = prd;
                }
            })
            return product;
        }
    }

})();


//UI Controller
const UIController = (function () {

    const Selectors = {
        productList: "#item-list",
        addButton: '.addBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTL : '#total-tl',
        totalDolar : '#total-dolar'
    }

    return {

        createProductList: function (products) {
            let html = '';
            products.forEach(prd => {
                //2-Butun öğesini silelim ve i class a edit-product ekleyelim
                html += `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}$</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
                `;
            });

            document.querySelector("#item-list").innerHTML = html;
        },

        getSelectors: function () {
            return Selectors;
        },

        //Bunu inputtan gelen bilgiyi kaydetmek için kullanacağız
        addProduct: function (prd) {
           
            document.querySelector(Selectors.productCard).style.display='block';
            //3- 2'de yaptığımız işlemin aynısını yapalım
            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}$</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
            `;
            document.querySelector(Selectors.productList).innerHTML += item;
        },

        clearInputs: function () {
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        // Eğer veri yoksa htmlde oluşturduğuz tablo gözümesin
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal : function(total){
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total*32;
        }


    }

})();


// App Controller
//Sayfa ilk çalıştırğında çalışacak kısım
const AppController = (function (ProductCtrl, UICtrl) {


    const UISelectors = UIController.getSelectors();

    //Load Event Listeners
    const loadEventListeners = function () {

        //add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);

        //1-edit product
        document.querySelector(UISelectors.productList).addEventListener("click",productEditSubmit);
    }


    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;
        if (productName !== '' && productPrice !== '') {
            //add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);
            //add item to list
            UIController.addProduct(newProduct);

            // get total
            const total = ProductCtrl.getTotal();
            
            //show total
            UICtrl.showTotal(total);

            //Ekleme işleminden sonra inputları temizleyecek fonksiyonu çağıralım
            UIController.clearInputs();
        }

        e.preventDefault();
    }

    const productEditSubmit = function(e){
        //4-Eğer edit e tklandıysa
        if(e.target.classList.contains('edit-product')){
            const id= e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            //5-get Selected product
            const product = ProductCtrl.getProductById(id);
            console.log(product);
        }

        e.preventDefault();
    }

    return {
        init: function () {
            console.log('starting app..');
            const products = ProductCtrl.getProduct();

            //Eğer ürünler 0 sa hideKartı çağıralım ve tablo olmasın
            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }
            //loadEventListeners'ın çağırılması
            loadEventListeners();



        }
    }

})(ProductController, UIController);

AppController.init();