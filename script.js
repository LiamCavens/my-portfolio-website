window.addEventListener('scroll', fixHeader);

const navbar = document.getElementById('nav-bar');
const sticky = navbar.offsetTop;

function fixHeader() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-sticky");
    } else {
        navbar.classList.remove("navbar-sticky");
    }
}

function toggleCodes(on) {
    var obj = document.getElementById('icons');

    if (on) {
        obj.className += ' codesOn';
    } else {
        obj.className = obj.className.replace(' codesOn', '');
    }
}