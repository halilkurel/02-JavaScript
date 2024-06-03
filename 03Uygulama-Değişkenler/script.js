var date = new Date().getFullYear();


var ogr1_ad ="ada bilgi";
var ogr1_dogTarihi = "2005";
var ogr1_MatNot1 = 70;
var ogr1_MatNot2 = 70;
var ogr1_MatNot3 = 80;

//Yas Hesaplama
var ogr1_yas= date - Number(ogr1_dogTarihi) ;
console.log(ogr1_yas);

//Not Hesaplama
var ogr1_ort = (ogr1_MatNot1+ogr1_MatNot2+ogr1_MatNot3)/3;
console.log("Not : "+ ogr1_ort);

// Geçtimi 
var ogr1_gectimi = (ogr1_ort>=50);
console.log(ogr1_gectimi);



var ogr2_ad ="yiğit bilgi";
var ogr2_dogTarihi = "2010";
var ogr2_MatNot1 = 40;
var ogr2_MatNot2 = 40;
var ogr2_MatNot3 = 50;

//Yas Hesaplama
var ogr2_yas =date -Number(ogr2_dogTarihi);
console.log(ogr2_yas);

//Not Hesaplama
var ogr2_ort = (ogr2_MatNot1+ogr2_MatNot2+ogr2_MatNot3)/3;
console.log("Not Ortalaması :" +ogr2_ort);

//Geçtimi

var ogr2_gectimi= (ogr2_ort>=50)
console.log(ogr2_gectimi);