

function getScrollPosition() {
    let pos = document.body.scrollTop;
    var navbar = document.getElementById("stickyNav");
    var navbarMobile = document.getElementById("stickyNavMobile");
    if(pos > window.innerHeight + 40 && window.innerWidth > 600){
        console.log("navbar added");
        navbar.style.display = "block";
    }
    else if (pos > window.innerHeight + 40) {
        navbarMobile.style.display = "block";
    }
    else {
        navbar.style.display = "none";
        navbarMobile.style.display = "none";
    }
}