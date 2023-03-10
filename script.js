const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message
}

// show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // return re.test(String(input).toLowerCase());
    if(re.test(String(input.value).trim().toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }

}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    if(input.id ==='password2'){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1,-1);
    }
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordsMatch(input1, input2) {
    if(input1.value != input2.value) {
        showError(input1, 'Passwords do not match')
    }
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // if(username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }

    // if(email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid')
    // } else {
    //     showSuccess(email);
    // }

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkLength(password2, 6, 25);
    checkEmail(email);
    // checkPasswordsMatch(password, password2)

})

