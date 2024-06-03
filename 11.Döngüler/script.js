let sayilar = [1,5,6,11,25,45];
let toplam =0;

for (let i =0; i < sayilar.length; i++){
    toplam+=sayilar[i];
};

console.log(toplam);





let user= {
    "name":"Halil",
    "surname":"Kürel",
    "age":29
};


for (let i in user){
    console.log(`${i}:${user[i]}`)
};
