var theseus;
var updog;
var osmoe;
var emmy;

var theseusExtendBtn;
var updogExtendBtn;
var osmoeExtendBtn;
var emmyExtendBtn;

var portfolioContainer;
var navStickyContainer;



function load() {
    theseus = document.getElementById('theseus');
    updog = document.getElementById('updog');
    osmoe = document.getElementById('osmoe');
    emmy = document.getElementById('emmy');

    theseusExtendBtn = document.getElementById('theseusBtn');
    updogExtendBtn = document.getElementById('updogBtn');
    osmoeExtendBtn = document.getElementById('osmoeBtn');
    emmyExtendBtn = document.getElementById('emmyBtn');

    portfolioContainer = document.getElementById('portfolio_object_container');
    navStickyContainer = document.getElementsByClassName('nav__sticky__container')[0];




    theseusExtendBtn.addEventListener("click", function () { adjustPortfolioCard(theseus, theseusExtendBtn) }, true);
    updogExtendBtn.addEventListener("click", function () { adjustPortfolioCard(updog, updogExtendBtn) }, true);
    osmoeExtendBtn.addEventListener("click", function () { adjustPortfolioCard(osmoe, osmoeExtendBtn) }, true);
    emmyExtendBtn.addEventListener("click", function () { adjustPortfolioCard(emmy, emmyExtendBtn) }, true);

}









function getScrollPosition() {
    let pos = document.body.scrollTop;
    var navbar = document.getElementById("stickyNav");
    var navbarMobile = document.getElementById("stickyNavMobile");
    if (pos > window.innerHeight + 40 && window.innerWidth > 600) {
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


function adjustPortfolioCard(card, btn) {

    if (card.classList.contains('collapsed')) {
        extendPortfolioCard(card, btn);
    }
    else {
        collapsePortfolioCard(card, btn);
    }

}

function extendPortfolioCard(card, btn) {

    btn.innerHTML = 'Less Info';
    card.classList.add('extended');
    card.classList.remove('collapsed');

    unhideElements(card);
}


function collapsePortfolioCard(card, btn) {

    btn.innerHTML = 'More Info';
    card.classList.add('collapsed');
    card.classList.remove('extended');
    hideElements(card);
}

function unhideElements(card) {
    let imageContainer = card.childNodes[1];

    let thumbContainer = card.childNodes[15];

    let imageString = 'url("./images/' + card.id + '.png")';
    console.log(imageString);
    imageContainer.style.height = imageContainer.clientWidth * 0.182 + 'px';
    imageContainer.style.backgroundImage = imageString;
}

function hideElements(card) {
    let imageContainer = card.childNodes[1];

    let thumbContainer = card.childNodes[15];

    let imageString = 'url("./images/' + card.id + '-thumb.png")';

    imageContainer.style.height = '150px';
    imageContainer.style.backgroundImage = imageString;
}