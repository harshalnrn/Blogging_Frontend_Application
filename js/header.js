/* Adding Display Functionality for the Sign-In Modal */

var modal_sign_in = document.getElementById("SignInModal");
var modal_sign_up = document.getElementById("SignUpModal");

function Sign_In() {
    modal_sign_in.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function span_SignIn() {
    modal_sign_in.style.display = "none";
}

// When user clicks on Sign-Up link in Sign-In modal, close Sign-In Modal and open Sign-Up Modal
function Sign_Up_Sign_In() {
    modal_sign_in.style.display = "none";
    modal_sign_up.style.display = "block";

}

/*  Adding Display Functionality for the Sign-Up Modal */

function Sign_Up() {
    modal_sign_up.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function span_signUp() {
    modal_sign_up.style.display = "none";
}
