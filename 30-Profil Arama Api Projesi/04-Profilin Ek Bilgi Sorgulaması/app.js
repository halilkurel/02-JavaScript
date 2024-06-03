//profile den örnek alalım
const profile = new Profile();
//UI'dan örnek alalım
const ui = new UI();

//searchProfile elementine ulaşalım
const searchProfile = document.getElementById("searchProfile");


//Her bir karakter girildiğinde arama yapacak keyup sayesinde
searchProfile.addEventListener("keyup",(event) =>{

    ui.clear();
    let text = event.target.value;

    if(text !==''){
        profile.getProfile(text)
            .then(res => {
                if(res.profile.length ===0){

                    ui.showAlert(text);
                }
                else{
                    ui.showProfile(res.profile[0]);
                    //4-
                    ui.showTodo(res.todo);
                }
            });
            
    }
});