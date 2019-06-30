/* Adding Functionality for All-Posts and Create-Post button */

var modal_create_post = document.getElementById("CreatePostModal");

// When user clicks on Create-post button, Display the pop-up Modal
function Create_Post() {
    modal_create_post.style.display="block";
}

// When user clicks on span (x), close the modal
function span_CreatePost() {
    modal_create_post.style.display="none";
}

// When user clicks on All-Posts button, redirect to bloglist.html
function All_posts() {
    window.location.href='./html/bloglist.html';

}