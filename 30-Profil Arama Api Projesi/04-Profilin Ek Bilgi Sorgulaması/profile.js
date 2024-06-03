
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

        //1-Todo için linke gidelim
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
        //2-Gelen bilgiyi json a çevir
        const todo = await todoResponse.json();
        

        return{
            profile ,
            //3-
            todo
        }
    }



}