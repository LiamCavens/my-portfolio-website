window.addEventListener("scroll", fixHeader);

const navbar = document.getElementById("nav-bar");
const sticky = navbar.offsetTop;

function fixHeader() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navbar-sticky");
  } else {
    navbar.classList.remove("navbar-sticky");
  }
}

function toggleCodes(on) {
  const obj = document.getElementById("icons");

  if (on) {
    obj.className += " codesOn";
  } else {
    obj.className = obj.className.replace(" codesOn", "");
  }
}


const offset = 45;
const bodyRect = document.body.getBoundingClientRect().top;
const elementRect = element.getBoundingClientRect().top;
const elementPosition = elementRect - bodyRect;
const offsetPosition = elementPosition - offset;

function jumpTo(element) {
    const ele = document.getElementById(element);
    const offset = 60;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = ele.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
