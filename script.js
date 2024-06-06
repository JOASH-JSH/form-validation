const fnameInput = document.getElementById("first-name");
const lnameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone-number");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const createAccountButton = document.getElementById("create-account-btn");

const fnameErrorMsg = document.getElementById("fname-error-msg");
const lnameErrorMsg = document.getElementById("lname-error-msg");
const emailErrorMsg = document.getElementById("email-error-msg");
const phoneNumberErrorMsg = document.getElementById("phone-number-error-msg");
const passwordErrorMsg = document.getElementById("password-error-msg");
const confirmPasswordErrorMsg = document.getElementById("confirm-password-error-msg");

function nameValidation() {
    const nameFormat = /^[a-zA-z]{3,20}$/;

    const fname = fnameInput.value;
    const lname = lnameInput.value;

    if (fname.length < 3) {
        fnameErrorMsg.innerText = "* First name must be at least 3 characters long.";
        fnameInput.classList.add("input-red-outline");
    } else if (!nameFormat.test(fname)) {
        fnameErrorMsg.innerText = "* First name can only contain alphabetic characters.";
        fnameInput.classList.add("input-red-outline");
    } else {
        fnameErrorMsg.innerText = "";
        fnameInput.classList.remove("input-red-outline");
    }

    if (lname.length < 3) {
        lnameErrorMsg.innerText = "* Last name must be at least 3 characters long.";
        lnameInput.classList.add("input-red-outline");
    } else if (!nameFormat.test(lname)) {
        lnameErrorMsg.innerText = "* Last name can only contain alphabetic characters.";
        lnameInput.classList.add("input-red-outline");
    } else {
        lnameErrorMsg.innerText = "";
        lnameInput.classList.remove("input-red-outline");
    }
}

function contactValidation() {
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberFormat = /^\d{10}$/; 

    const email = emailInput.value;
    const phoneNumber = phoneNumberInput.value;

    if (!emailFormat.test(email)) {
        emailErrorMsg.innerText = "* Please enter a valid email address.";
        emailInput.classList.add("input-red-outline");
    } else {
        emailErrorMsg.innerText = "";
        emailInput.classList.remove("input-red-outline");
    }
 
    if (phoneNumber.length !== 0) {
        if (phoneNumber.length < 10) {
            phoneNumberErrorMsg.innerText = "* Phone number must be exactly 10 digits long.";
            phoneNumberInput.classList.add("input-red-outline");
        } else if (!phoneNumberFormat.test(phoneNumber)) {
            phoneNumberErrorMsg.innerText = "* Please enter a valid phone number.";
            phoneNumberInput.classList.add("input-red-outline");
        } else {
            phoneNumberErrorMsg.innerText = "";
            phoneNumberInput.classList.remove("input-red-outline");
        }
    }
}

function passwordValidation() {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{8,}/;

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password.length < 8) {
        passwordErrorMsg.innerText = "* Password must be at least 8 characters long.";
        passwordInput.classList.add("input-red-outline");    
    } else if (!passwordFormat.test(password)) {
        passwordErrorMsg.innerText = "* Password can contain letters, numbers, and special characters: \"!\"#$%&'()*+,-./:;<=>?@[\\]^_{}|~";
        passwordInput.classList.add("input-red-outline");    
    } else {
        passwordErrorMsg.innerText = "";
        passwordInput.classList.remove("input-red-outline");    
    }

    if (confirmPassword === "") {
        confirmPasswordErrorMsg.innerText = "* Please confirm your password.";
        confirmPasswordInput.classList.add("input-red-outline");    
    } else {
        confirmPasswordErrorMsg.innerText = "";
        confirmPasswordInput.classList.remove("input-red-outline");    
    }
}

createAccountButton.addEventListener("click", () => {
    nameValidation();
    contactValidation();
    passwordValidation();
});