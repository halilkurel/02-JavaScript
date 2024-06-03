
//3-
class Profile{
    constructor(){
        this.clientid ='';
        this.clientSecret='';
    }

    async getProfile(username){
        //username'i apiye göndericez
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        //gelen bilgiyi json' a çevireceğiz
        const profile = await profileResponse.json();

        return{
            profile : profile
        }
    }



}