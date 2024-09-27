const form = document.getElementById('form');
const username = document.getElementById('username');
const date = document.getElementById('date');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const tick = document.getElementById('tick');
const eye1 = document.querySelector('#eye1');
const eye2 = document.querySelector('#eye2');
const pop = document.getElementById('pop');

//Submit Event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    checkAgreement();
})

//Check Input of Data
function checkInputs(){
    const usernameValue = username.value.trim();
    const dateValue = date.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    //Username
    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username is empty');
    }
    else{
        //add success class
        setSuccessFor(username);
    }

    //Date of birth
    if(dateValue === ''){
        //show error
        //add error class
        setErrorFor(date, 'Date is empty');
    }
    else{
        //add success class
        setSuccessFor(date);
    }

    //Email
    if(emailValue === ''){
        //show error
        //add error class
        setErrorFor(email, 'Email is empty');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        //add success class
        setSuccessFor(email);
    }

    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    //Password1
    if(password1Value === ''){
        //show error
        //add error class
        setErrorFor(password1, 'Password is empty');
    }
    else if(!password1Value.match(pass)){
        setErrorFor(password1, 'Password must contain 8-20 characters, one uppercase letter, one lowercase letter, one number, and one special character');
    }
    else{
        //add success class
        setSuccessFor(password1);
    }

    //Password2
    if(password2Value === ''){
        //show error
        //add error class
        setErrorFor(password2, 'Password is empty');
    }
    else if(!password2Value.match(pass)){
        setErrorFor(password2, 'Password must contain 8-20 characters, one uppercase letter, one lowercase letter, one number, and one special character');
    }
    else if(password2Value !== password1Value){
        setErrorFor(password2, 'Password is incorrect');
    }
    else{
        //add success class
        setSuccessFor(password2);
    }
}

function checkAgreement(){
    const usernameValue = username.value.trim();
    const dateValue = date.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    
    //Terms and Conditions
    if( (usernameValue !== '') && (dateValue !== '') && (isEmail(emailValue))  && (password1Value.match(pass)) && (password2Value === password1Value) ){
        if(tick.checked === false){
            setError(tick, 'Please press this field to complete your registration')
        }
        else{
            setSuccess(tick);
        }  
    }
}

function setErrorFor(input, message){
    const Data = input.parentElement;
    const small = Data.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    Data.className = 'data error';
}

function setError(input, message){
    const Data = input.parentElement;
    const DATA = Data.parentElement
    const small = DATA.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    DATA.className = 'data error';
}

function setSuccessFor(input){
    const Data = input.parentElement;
    Data.className = 'data success';
}

function setSuccess(input){
    const Data = input.parentElement;
    const DATA = Data.parentElement
    DATA.className = 'data success';
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Show and Hide Password
//new password
eye1.onclick = function(){
    var show1 = document.getElementById('show1');
    var hide1 = document.getElementById('hide1');

    if (password1.type === 'password') {
        password1.type = 'text';
        show1.style.display = 'block';
        hide1.style.display = 'none';
    }
    else {
        password1.type = 'password';
        show1.style.display = 'none';
        hide1.style.display = 'block';
    }
}

//check password
eye2.onclick = function(){
    var show2 = document.getElementById('show2');
    var hide2 = document.getElementById('hide2');

    if (password2.type === 'password') {
        password2.type = 'text';
        show2.style.display = 'block';
        hide2.style.display = 'none';
    }
    else {
        password2.type = 'password';
        show2.style.display = 'none';
        hide2.style.display = 'block';
    }
}

//Registration Done
submit.onclick = function(){
    const usernameValue = username.value.trim();
    const dateValue = date.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    
    //show a success message
    if( (usernameValue !== '') && (dateValue !== '') && (isEmail(emailValue))  && (password1Value.match(pass)) && (password2Value === password1Value) && (tick.checked === true) ){
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
        pop.classList.add("open-popup");
    }
}

done.onclick = function(){
    pop.classList.remove("open-popup");
}