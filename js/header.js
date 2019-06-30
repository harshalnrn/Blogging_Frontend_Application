/* Adding Display Functionality for the Sign-In Modal Box */

var modal_sign_in = document.getElementById("SignInModal");
var modal = document.getElementById("SignUpModal");

function Sign_In() {
    modal_sign_in.style.display = "block";
}
function span_SignIn() {
    modal_sign_in.style.display = "none";
}

function Sign_Up_Sign_In() {
    modal_sign_in.style.display = "none";
    modal.style.display = "block";

}

