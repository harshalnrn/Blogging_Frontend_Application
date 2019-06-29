var likeCount=0;
function editClick() {
var button= document.getElementById('blogEdit');
    if (button.innerHTML== 'Save') {
        document.getElementById('blogEdit').innerHTML = 'Edit';
        document.getElementById('blogBody').contentEditable = 'false';
    }
    else {
        document.getElementById('blogEdit').innerHTML = 'Save';
        document.getElementById('blogBody').contentEditable = 'true';
    }


}

function like() {
    likeCount++;
    document.getElementsByClassName('likeButton')[0].innerText = 'Liked';
    if (likeCount == 1) {
        document.getElementById('likeCount').innerHTML = likeCount + ' person likes this!';
    } else {
        document.getElementById('likeCount').innerHTML = likeCount + ' people have liked this!';
    }
}

function addComments(id){

    //dynamically create a element to add the comments
    document.getElementById('commentSection').style.backgroundColor='lightgrey';
    document.getElementById('commentSection').innerHTML+='<p id="newComment">'+id.value+'</p>';

}


