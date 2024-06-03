const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

container.addEventListener('click', function(e){
    //seçilen .seat içermeli .reserved içermemeli
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){

        //seçilenin classına selected ekle
        e.target.classList.toggle('selected');

        calculateTotal();


    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
            //Seçilen koltuk sayısını aldık
            let selectedSeatCount = container.querySelectorAll('.seat.selected').length;

            let price = select.value;
            count.innerText = selectedSeatCount;
            amount.innerText = parseInt(selectedSeatCount*price);
}