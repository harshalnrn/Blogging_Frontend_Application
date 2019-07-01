var modal_delete_blog = document.getElementById("DeleteBlogModal");

/* Display the Delete Modal on clicking the Trash icon in each blog post */
function deleteBlog() {
    modal_delete_blog.style.display = "block";
}

/* When user Clicks on No button, close the Modal */
function delete_modal_failure() {
    modal_delete_blog.style.display = "none";
}

/* Redirect to post.html on clicking the (...) icon */
function displayText() {
    window.location.href = '../html/post.html';
}