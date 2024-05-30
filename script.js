const fnameInput = document.getElementById("first-name");
const lnameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone-number");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const createAccountButton = document.getElementById("create-account-btn");

const fnameErrorMsg = document.getElementById("error-msg-fname");
const lnameErrorMsg = document.getElementById("error-msg-lname");
const emailErrorMsg = document.getElementById("error-msg-email");
const phoneNumberErrorMsg = document.getElementById("error-msg-phone-number");
const passwordErrorMsg = document.getElementById("error-msg-passord");
const confirmPasswordErrorMsg = document.getElementById("error-msg-confirm-password");

function nameValidation() {
    const nameFormat = /^[a-zA-z]{3,20}$/;

    const fname = fnameInput.value;
    const lname = lnameInput.value;

    if (fname.length < 3) {
        fnameErrorMsg.innerText = "First name must be at least 3 characters long.";
    } else if (!nameFormat.test(fname)) {
        fnameErrorMsg.innerText = "First name can only contain alphabetic characters.";
    } else {
        fnameErrorMsg.innerText = "";
    }

    if (lname !== "") {
        if (lname.length < 3) {
            lnameErrorMsg.innerText = "Last name must be at least 3 characters long.";
        } else if (!nameFormat.test(lname)) {
            lnameErrorMsg.innerText = "Last name can only contain alphabetic characters.";
        } else {
            lnameErrorMsg.innerText = "";
        }
    }
}

function contactValidation() {
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberFormat = /^\d{10}$/; 

    const email = emailInput.value;
    const phoneNumber = phoneNumberInput.value;

    if (!emailFormat.test(email)) {
        emailErrorMsg.innerText = "Please enter a valid email address.";
    } else {
        emailErrorMsg.innerText = "";
    }
 
    if (phoneNumber !== "") {
        if (phoneNumber.length < 10) {
            phoneNumberErrorMsg.innerText = "Phone number must be exactly 10 digits long.";
        } else if (!phoneNumberFormat.test(phoneNumber)) {
            phoneNumberErrorMsg.innerText = "Please enter a valid phone number.";
        } else {
            phoneNumberErrorMsg.innerText = "";
        }
    }
}

function passwordValidation() {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{8,}/;

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password.length < 8) {
        passwordErrorMsg.innerText = "Password must be at least 8 characters long.";
    } else if (!passwordFormat.test(password)) {
        passwordErrorMsg.innerText = "Password can contain letters, numbers, and special characters: \"!\"#$%&'()*+,-./:;<=>?@[\\]^_{}|~";
    } else {
        passwordErrorMsg.innerText = "";
    }

    if (confirmPassword === "") {
        confirmPasswordErrorMsg.innerText = "Please confirm your password.";
    } else {
        confirmPasswordErrorMsg.innerText = "";
    }
}

createAccountButton.addEventListener("click", () => {
    nameValidation();
    contactValidation();
    passwordValidation();
});


