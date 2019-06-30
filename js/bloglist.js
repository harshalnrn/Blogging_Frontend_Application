
var modal_delete_blog = document.getElementById("DeleteBlogModal");

function deleteBlog() {
modal_delete_blog.style.display="block";
}

function delete_modal_failure() {
    modal_delete_blog.style.display="none";
}

function delete_modal_success(){
    window.location.href='./html/post.html';
}