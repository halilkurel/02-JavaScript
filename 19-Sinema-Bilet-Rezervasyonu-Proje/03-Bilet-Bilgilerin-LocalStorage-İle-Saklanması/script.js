const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

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
            const selectedSeats = container.querySelectorAll('.seat.selected');
            let selectedSeatCount = selectedSeats.length;

            //Koltukların indexlerini bulmak için 1 e kadar
            const selectedSeatArr =[];
            const seatArr = [];

            selectedSeats.forEach(function(seat){
                selectedSeatArr.push(seat);
            });

            seats.forEach(function(seat){
                seatArr.push(seat);
            });

            let selectedSeatIndexs = selectedSeatArr.map(function(seat){
                return seatArr.indexOf(seat);
            });

            //1



            count.innerText = selectedSeatCount;
            amount.innerText = parseInt(selectedSeatCount*select.value);

            saveToLocalStorage(selectedSeatIndexs);
}


//LocalStorage' alanına indexleri kaydetme
function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);
}