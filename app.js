
const signupForm = document.querySelector('#user-signup-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const personalId= document.querySelector('#personalid');
const mobileNumber= document.querySelector('#mobile_number');
const position = document.querySelector('#position')

const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const personalidError = document.querySelector('#id-error');
const mobileNumberError = document.querySelector('#mobileNumber_error');
const positionError = document.querySelector ('#position_error')


function validateUsername(){
  if(!username.validity.valid){
    username.classList.add('has-error');
    username.classList.remove('has-success');
    if(username.validity.tooShort){
      usernameError.innerText = 'Username must be 4 length or more';
    } else {
      usernameError.innerText = 'Username is required.';
    }
    return false;
  } else {
    username.classList.remove('has-error');
    username.classList.add('has-success');
    usernameError.innerText = '';
    return true;
  }
}

function validateEmail(){
  if(!email.validity.valid){
    email.classList.add('has-error');
    username.classList.remove('has-success');
    if(email.validity.typeMismatch){
      emailError.innerText = 'Please enter valid email.';
    } else {
      emailError.innerText = 'Email is required.';
    }
    return false;
  } else {
    email.classList.remove('has-error');
    email.classList.add('has-success');
    emailError.innerText = '';
    return true;
  }
}
function validatemobileNumber(){
    if (mobileNumber.value.length > mobileNumber.maxLength){
        mobileNumber.value = mobileNumber.value.slice(0, mobileNumber.maxLength);
    }

    if( mobileNumber.value.length == 0){
        mobileNumber.classList.add('has-error');
        username.classList.remove('has-success');
        mobileNumberError.innerText = 'Mobile Number is required.';
    } else if(mobileNumber.value.length < mobileNumber.minLength){
        mobileNumber.classList.add('has-error');
        username.classList.remove('has-success');
        mobileNumberError.innerText = 'Please enter valid Number.';
    }else{
        mobileNumber.classList.remove('has-error');
        mobileNumber.classList.add('has-success');
        mobileNumberError.innerText = '';
        return true;
    }
}

function validatepersonalId(){
    if (personalId.value.length > personalId.maxLength){
        personalId.value = personalId.value.slice(0, personalId.maxLength);
    }

    if( personalId.value.length == 0){
        personalidError.innerText = 'ID is required.';
    } else if(personalId.value.length < personalId.minLength){
        personalId.classList.add('has-error');
        personalidError.innerText = 'Please enter valid ID.';
    }else{
        personalId.classList.remove('has-error');
        personalId.classList.add('has-success');
        personalidError.innerText = '';
        return true;
    }
}

username.addEventListener('input', () => {
  validateUsername();
});

email.addEventListener('input', () => {
  validateEmail();
});
mobileNumber.addEventListener ('input', () => {
    validatemobileNumber();
});

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    position.classList.add('has-success');
    const isValidUsername = validateUsername();
    const isValidEmail = validateEmail();
    const isValidId = validatepersonalId();
    const isvalidmobileNumber = validatemobileNumber();
});


