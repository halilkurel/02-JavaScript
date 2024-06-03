// Storage Controller
const StorageController = (function () {
    
    
    
    //4-
    return{
        //5-
        storeProduct: function(product){
            let products;   
            if(localStorage.getItem('products')===null){
                products = [];
                products.push(product);                
            }else{
                products = JSON.parse(localStorage.getItem('products'));
                products.push(product);
            }
            localStorage.setItem('products',JSON.stringify(products));
        },

        //6-
        getProducts: function(){
            let products;
            if(localStorage.getItem('products')==null){
                products = [];
            }else{
                products = JSON.parse(localStorage.getItem('products'));
            }
            return products;
        }
    }

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
        //7-
        products: StorageController.getProducts(),

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
        getTotal: function () {
            let total = 0;


            data.products.forEach(function (item) {
                total += item.price;
            });

            data.totalPrice = total;
            return data.totalPrice;
        },

        getProductById: function (id) {
            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == id) {
                    product = prd;
                }
            })
            return product;
        },

        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        },

        getCurrentProduct: function () {
            return data.selectedProduct;
        },
        
        updateProduct: function (name, price) {
            let product = null;
            data.products.forEach(function (prd) {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = name;
                    prd.price = parseFloat(price);
                    product = prd;
                }
            });
            return product;
        },
        
        deleteProduct: function(product){
            data.products.forEach(function(prd,index){
                if(prd.id == product.id){
                    data.products.splice(index,1);
                }
            });
        }


    }

})();


//UI Controller
const UIController = (function () {

    const Selectors = {
        productList: "#item-list",
        productListItems: '#item-list tr',
        addButton: '.addBtn',
        updateBtn: '.updateBtn',
        deleteBtn: '.deleteBtn',
        cancelBtn: '.cancelBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTL: '#total-tl',
        totalDolar: '#total-dolar'

    }

    return {

        createProductList: function (products) {
            let html = '';
            products.forEach(prd => {

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

            document.querySelector(Selectors.productCard).style.display = 'block';

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

        clearWarnings: function(){
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.classList.remove('bg-warning');
                }
            });
        },

        // Eğer veri yoksa htmlde oluşturduğuz tablo gözümesin
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal: function (total) {
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 32;
        },

        addProductToForm: function () {
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },


        addingState: function (item) {
            UIController.clearWarnings();
            UIController.clearInputs(); //sayfa ilk açıldığında inputlar temizlensin
            //sadece add butonu inline olsun
            document.querySelector(Selectors.addButton).style.display = "inline";
            document.querySelector(Selectors.updateBtn).style.display = "none";
            document.querySelector(Selectors.deleteBtn).style.display = "none";
            document.querySelector(Selectors.cancelBtn).style.display = "none";
        },

        editState: function (tr) {

            const parent = tr.parentNode;
            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove('bg-warning');
            }

            tr.classList.add('bg-warning');

            document.querySelector(Selectors.addButton).style.display = "none";
            document.querySelector(Selectors.updateBtn).style.display = "inline";
            document.querySelector(Selectors.deleteBtn).style.display = "inline";
            document.querySelector(Selectors.cancelBtn).style.display = "inline";
        },


        updateProduct: function (prd) {


            updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                if (item.classList.contains('bg-warning')) {
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price+'$';
                    updatedItem = item;
                }
            });

            return this.updatedItem;
        },
        
        deleteProduct: function(){
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.remove();
                }
            })
        }



    }

})();


// App Controller
//Sayfa ilk çalıştırğında çalışacak kısım
//2-StorageCtrl parametresini ekle
const AppController = (function (ProductCtrl, UICtrl,StorageCtrl) {


    const UISelectors = UICtrl.getSelectors();

    //Load Event Listeners
    const loadEventListeners = function () {

        //add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);

        //-edit product click
        document.querySelector(UISelectors.productList).addEventListener("click", productEditClick);

        //edit product submit
        document.querySelector(UISelectors.updateBtn).addEventListener('click', editProductSubmit);


        //cancel button click
        document.querySelector(UISelectors.cancelBtn).addEventListener('click',cancelUpdate);

        //delete Product
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', deleteProductSubmit);

    }


    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;
        if (productName !== '' && productPrice !== '') {
            //add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);
            //add item to list
            UIController.addProduct(newProduct);

            //1-add product to LS
            StorageCtrl.storageProduct(newProduct);

            // get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            //Ekleme işleminden sonra inputları temizleyecek fonksiyonu çağıralım
            UIController.clearInputs();
        }

        e.preventDefault();
    }

    const productEditClick = function (e) {
        //Eğer edit e tklandıysa
        if (e.target.classList.contains('edit-product')) {
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            //get Selected product
            const product = ProductCtrl.getProductById(id);

            //set current product
            ProductCtrl.setCurrentProduct(product);

            
            UICtrl.clearWarnings();

            // add product to UI
            UICtrl.addProductToForm();


            UICtrl.editState(e.target.parentNode.parentNode);

        }

        e.preventDefault();
    }

    const editProductSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            //product update
            const updateProduct = ProductCtrl.updateProduct(productName, productPrice);

            //update ui
            let item = UICtrl.updateProduct(updateProduct);

            // get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            UICtrl.addingState();
        }

        e.preventDefault();
    }

 
    const cancelUpdate = function(e){

        UICtrl.addingState();
        UICtrl.clearWarnings();


        e.preventDefault();
    }

    
    const deleteProductSubmit = function (e) {

        // get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        // delete product
        ProductCtrl.deleteProduct(selectedProduct);

        // delete ui
        UICtrl.deleteProduct();

        // get total
        const total = ProductCtrl.getTotal();

        // show total
        UICtrl.showTotal(total);

        UICtrl.addingState();

        if(total==0){
            UICtrl.hideCard();
        }

        e.preventDefault();
    }
    return {
        init: function () {
            console.log('starting app..');


            UICtrl.addingState();

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

    //3-StorageController parametrsini ekleyelim
})(ProductController, UIController,StorageController);

AppController.init();