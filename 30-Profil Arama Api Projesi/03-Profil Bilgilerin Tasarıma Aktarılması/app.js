//profile den örnek alalım
const profile = new Profile();
//5-UI'dan örnek alalım
const ui = new UI();

//searchProfile elementine ulaşalım
const searchProfile = document.getElementById("searchProfile");


//Her bir karakter girildiğinde arama yapacak keyup sayesinde
searchProfile.addEventListener("keyup",(event) =>{
    //10-
    ui.clear();
    let text = event.target.value;

    if(text !==''){
        profile.getProfile(text)
            .then(res => {
                if(res.profile.length ===0){
                    //7-
                    ui.showAlert(text);
                }
                else{
                    //6-
                    ui.showProfile(res.profile[0]);
                }
            });
            
    }
});