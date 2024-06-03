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
        //12-Verileri silelim
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
        //7-
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

        }
    }

})();


//UI Controller
const UIController = (function () {

    const Selectors = {
        productList: "#item-list",
        //1-buton name ve price için seçim yapalım
        addButton: '.addBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        //14-
        productCard: '#productCard'
    }

    return {

        createProductList: function (products) {
            let html = '';
            products.forEach(prd => {
                html += `
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

        getSelectors: function () {
            return Selectors;
        },

        //9-Bunu inputtan gelen bilgiyi kaydetmek için kullanacağız
        addProduct: function (prd) {
            //17-
            document.querySelector(Selectors.productCard).style.display='block';
            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}</td>
                    <td class="text-right">
                        <button type="submit" class="btn btn-warning btn-sm"><i class="far fa-edit"></i></button>
                    </td>
                </tr>
            `;
            document.querySelector(Selectors.productList).innerHTML += item;
        },

        //11-clearInputs metotunu yazalım
        clearInputs: function () {
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        //15- Eğer veri yoksa htmlde oluşturduğuz tablo gözümesin
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
        }


    }

})();


// App Controller
//Sayfa ilk çalıştırğında çalışacak kısım
const AppController = (function (ProductCtrl, UICtrl) {

    //2-
    const UISelectors = UIController.getSelectors();

    //3-Load Event Listeners
    const loadEventListeners = function () {

        //5-add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);
    }

    //6-
    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;
        if (productName !== '' && productPrice !== '') {
            //add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            //8-
            UIController.addProduct(newProduct);

            //10-Ekleme işleminden sonra inputları temizleyecek fonksiyonu çağıralım
            UIController.clearInputs();
        }

        e.preventDefault();
    }

    return {
        init: function () {
            console.log('starting app..');
            const products = ProductCtrl.getProduct();

            //16-Eğer ürünler 0 sa hideKartı çağıralım ve tablo olmasın
            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }
            //4-loadEventListeners'ın çağırılması
            loadEventListeners();



        }
    }

})(ProductController, UIController);

AppController.init();