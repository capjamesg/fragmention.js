// Note: This function is case sensitive.
function annotate () {
    if (window.location.hash) {
        // remove # from the beginning and replace + with spaces
        var hash = window.location.hash.substring(1).replace(/\+/g, " ");

        var paragraph = document.getElementById(hash);

        if (paragraph) {
            paragraph.classList.add('highlight');
            paragraph.scrollIntoView();
        }

        var all_paragraphs = document.getElementsByTagName('p');

        for (var p of all_paragraphs) {
            if (p.textContent.includes(hash)) {
                p.classList.add('highlight');
                p.scrollIntoView();
                break;
            }
        }
    }
}

// on full dom
document.addEventListener("DOMContentLoaded", annotate);
