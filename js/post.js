// global variable to count no of likes by user
var likeCount = 0;

// event handling function on save/edit button click
function editClick() {
    var button = document.getElementById('blogEdit');
    if (button.innerHTML == 'Save') {
        document.getElementById('blogEdit').innerHTML = 'Edit';
        document.getElementById('blogBody').contentEditable = 'false';
        document.getElementById('blogTitleNew').contentEditable = 'false';

    } else {
        document.getElementById('blogEdit').innerHTML = 'Save';
        document.getElementById('blogBody').contentEditable = 'true';
        document.getElementById('blogTitleNew').contentEditable = 'true';
    }


}

// event handling function on like button click
function like() {
    likeCount++;
    document.getElementsByClassName('likeButton')[0].innerText = 'Liked';
    if (likeCount == 1) {
        document.getElementById('likeCount').innerHTML = likeCount + ' person likes this!';
    } else {
        document.getElementById('likeCount').innerHTML = likeCount + ' people have liked this!';
    }
}

// event handling function on comment button click
function addComments(id) {

    //dynamically create a element to add the comments
    document.getElementById('commentSection').style.backgroundColor = 'lightgrey';
    document.getElementById('commentSection').insertAdjacentHTML('afterbegin', '<p id="newComment">' + id.value + '</p>');

}


