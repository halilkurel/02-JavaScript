const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone = document.getElementById('phone');


function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'hatalı bir mail adresi');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });  
}

function checkLength(input,min,max){
    if(input.value.length<min){
        error(input, `${input.id} en az ${min} karakter olmalıdır`);
    }else if(input.value.length > max){
        error(input,`${input.id} en fazla ${max} karakter olmalıdır`);
    }
    else{
        success(input);
    }
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor');
    }
}

function checkPhone(phone){
    var exp = /^\d{10}$/;
    if(!exp.test(phone.value)){
        error(phone, 'Telefon 10 karakterli olmalıdır');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkPassword(password,repassword);
    checkPhone(phone);

});