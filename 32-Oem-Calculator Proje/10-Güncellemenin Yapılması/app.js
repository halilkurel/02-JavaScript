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
        //5-
        updateProduct: function (name, price) {
            let product = null;
            data.products.forEach(function (prd) {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = name;
                    //10-
                    prd.price = parseFloat(price);
                    product = prd;
                }
            });
            return product;
        }


    }

})();


//UI Controller
const UIController = (function () {

    const Selectors = {
        productList: "#item-list",
        //7-
        productListItems: '#item-list tr',

        addButton: '.addBtn',
        //2-
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

            //12-
            if(item){
                item.classList.remove('bg-warning');
            }


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

        //8-
        updateProduct: function (prd) {


            updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                if (item.classList.contains('bg-warning')) {
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price;
                    updatedItem = item;
                }
            });

            return this.updatedItem;
        }



    }

})();


// App Controller
//Sayfa ilk çalıştırğında çalışacak kısım
const AppController = (function (ProductCtrl, UICtrl) {


    const UISelectors = UICtrl.getSelectors();

    //Load Event Listeners
    const loadEventListeners = function () {

        //add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);

        //-edit product click
        //1-productEditSubmiti productEditClick olarak değiştirelim
        document.querySelector(UISelectors.productList).addEventListener("click", productEditClick);

        //3-edit product submit
        document.querySelector(UISelectors.updateBtn).addEventListener('click', editProductSubmit);


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

    //2- isim güncellemesini yapalım
    const productEditClick = function (e) {
        //Eğer edit e tklandıysa
        if (e.target.classList.contains('edit-product')) {
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            //get Selected product
            const product = ProductCtrl.getProductById(id);

            //set current product
            ProductCtrl.setCurrentProduct(product);

            // add product to UI
            UICtrl.addProductToForm();


            UICtrl.editState(e.target.parentNode.parentNode);

        }

        e.preventDefault();
    }

    //4-
    const editProductSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            //product update
            const updateProduct = ProductCtrl.updateProduct(productName, productPrice);

            //6-update ui
            let item = UICtrl.updateProduct(updateProduct);

            //9-get ve show ekleyelim
            // get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            //11-
            UICtrl.addingState(item);
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

})(ProductController, UIController);

AppController.init();