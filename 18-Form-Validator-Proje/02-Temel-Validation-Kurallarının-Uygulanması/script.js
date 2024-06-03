const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('re-password');

form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value ===''){
        error(username,'Username gerekli');
    }
    else{
        succes(username);
    }
    if(email.value ===''){
        error(email,'Email gerekli');
    }
    else if(!validateEmail(email.value)){
        error(email,'Düzgün bir email giriniz');
    }
    else{
        succes(email);
    }
    if(password.value ===''){
        error(password, 'Parola gerekli');
    }
    else{
        succes(password);
    }
    if(repassword.value ===''){
        error(repassword,'Parola gerekli');
    }
    else{
        succes(repassword);
    }
});

function error(input, message){
    input.classList = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.classList = 'invalid-feedback';
};

function succes(input){
    input.classList = 'form-control is-valid';
};

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};