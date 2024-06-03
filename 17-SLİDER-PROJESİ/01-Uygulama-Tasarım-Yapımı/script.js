var models = [
    {
        name: "Bmw 418d",
        image: "/17-SLİDER-PROJESİ/img/bmw.jpg",
        link: "bmw418"
    },
    {
        name: "Mazda CX-3",
        image: "/17-SLİDER-PROJESİ/img/mazda.jpg",
        link: "mazda"
    },
    {
        name: "Volvo s60",
        image: "/17-SLİDER-PROJESİ/img/volvo.jpg",
        link: "volvo"
    },
    {
        name: "Skoda Superb",
        image: "/17-SLİDER-PROJESİ/img/skoda.jpg",
        link: "Skoda"
    },
    {
        name: "Honda Civic",
        image: "/17-SLİDER-PROJESİ/img/honda.jpg",
        link: "honda"
    },
];



var index = 2;
var slaytCount = models.length-1;
var interval;

var settings = {
    duration :'2000',
    random : false
};

init(settings);

document.querySelector(".fa-arrow-left").addEventListener("click", function () {
    index--;
    if(index<0){
        index = slaytCount;
    }
    
    showSlide(index);
    console.log(index);
});


document.querySelector(".fa-arrow-right").addEventListener("click", function () {
    index++;
    if(index>slaytCount){
        index =0;
    }
    showSlide(index);
    console.log(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    });
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    });
});

function init(settings){

    var prev;
    
    interval = setInterval(function(){
        if(settings.random){
            //random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;

            
        }
        else{
            //artan index
            if(slaytCount == index+1){
                index =0;
            }
            showSlide(index);
            index++;
        }

        showSlide(index);

    },settings.duration);
}

function showSlide(index) {
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    document.querySelector(".card-link").setAttribute("href", models[index].link);
};

