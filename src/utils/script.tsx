let prevScrollpos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    const header = document.getElementById("header");

    if (prevScrollpos > currentScrollPos && header) {
        header.style.top = "0";
    } else if (header) {
        header.style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
}