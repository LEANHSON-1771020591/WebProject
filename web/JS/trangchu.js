function openTag(evt, tagName) {
    var i, tagcontent, taglinks;
    tagcontent = document.getElementsByClassName("tagcontent");
    for (i = 0; i < tagcontent.length; i++) {
        tagcontent[i].style.display = "none";
    }
    taglinks = document.getElementsByClassName("taglinks");
    for (i = 0; i < taglinks.length; i++) {
        taglinks[i].className = taglinks[i].className.replace(" active", "");
    }
    document.getElementById(tagName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tagcontent")[0].style.display = "block";
});