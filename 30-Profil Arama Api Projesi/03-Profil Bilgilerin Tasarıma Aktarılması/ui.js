//1-
class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        //3-
        this.alert = document.querySelector("#alert");
    }

    //4-
    showProfile(profile){
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                name: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                username: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                email: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                address: ${profile.address.street}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                                ${profile.address.suite}
                            </li>
                            <li class="list-group-item">
                                phone: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                website: ${profile.website}
                            </li>
                            <li class="list-group-item">
                                company: ${profile.company.name}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    //8-
    showAlert(text){
        this.alert.innerHTML = `${text} is not found.`; 
    }

    //9-clear
    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}