//4-profile den örnek alalım
const profile = new Profile();

//1-searchProfile elementine ulaşalım
const searchProfile = document.getElementById("searchProfile");


//2-Her bir karakter girildiğinde arama yapacak keyup sayesinde
searchProfile.addEventListener("keyup",(event) =>{
    let text = event.target.value;

    if(text !==''){
        profile.getProfile(text)
            .then(res => {
                if(res.profile.length ===0){

                }
                else{
                    console.log(res.profile);
                }
            });
            
    }
});