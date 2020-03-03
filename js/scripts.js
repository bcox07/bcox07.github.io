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
    if (pos > window.innerHeight + 40 && window.innerWidth > 600) {
        navbar.style.display = "block";
    }
    else if (window.innerWidth > 600){
        navbar.style.display = "none";
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


    let title = card.childNodes[3];
    let info = card.childNodes[5];

    info.style.height = 'inherit';
    info.style.marginBottom = '20px';

    $(card.id).find('hidden');

    btn.innerHTML = 'Less Info';
    card.classList.add('extended');
    card.classList.add('mobile');
    card.classList.remove('collapsed');

    unhideElements(card);
}


function collapsePortfolioCard(card, btn) {

    for(let i=0; i<4; i++){
        let thumbnail = document.getElementById(i);
        console.log(thumbnail);
        thumbnail.remove();
        
    }


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