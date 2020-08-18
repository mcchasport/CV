///////////////////////////////////////////////////////////////////////
// Show / hide sidebar
///////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

function closeNav() {
    $("#sidebar").removeClass("active");
};

///////////////////////////////////////////////////////////////////////
// Button 'Go to top' 
///////////////////////////////////////////////////////////////////////

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////////////////////////
// Show / hide flag, collapse and 'Go to top' buttons with scroll
///////////////////////////////////////////////////////////////////////

var prevScrollpos = window.pageYOffset;
var mybutton = document.getElementById("myBtn");

window.onscroll = function () {

    // Show / Hide  flag and collapse buttons
    var currentScrollPos = window.pageYOffset;
    var largeur = window.innerWidth;
    if (prevScrollpos > currentScrollPos) {
        if (largeur < 769) {
    document.getElementById("langue").style.top = "10px";
        }
        document.getElementById("sidebarCollapse").style.top = "10px";
    } else {
        if (largeur < 769) {
    document.getElementById("langue").style.top = "-50px";
        }
        document.getElementById("sidebarCollapse").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;

   // Show / Hide button 'Go to top'
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}