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

    var extendedCardX;
    var extendedCardY;
    let otherCards = document.getElementsByClassName('portfolio__card');

    if (window.innerWidth > 600) {

        extendedCardY = card.offsetHeight;
        portfolioContainer.appendChild(card);
        portfolioContainer.insertBefore(card, otherCards[0]);
        card.childNodes[1].style.width = '98.25%';
        card.childNodes[1].style.marginLeft = '0.875%';

        if (window.innerWidth > 1200) {
            extendedCardX = 25;

            navStickyContainer.style.height = '400%';

            var id = setInterval(frame, 5);

            function frame() {

                if (extendedCardX == 100) {
                    clearInterval(id);
                }
                else {
                    extendedCardX++;
                    extendedCardY += 8;
                    card.style.width = extendedCardX + "%";
                    card.style.height = extendedCardY + "px";
                }
            }
        }

        else {
            extendedCardX = 50;

            var id = setInterval(frame, 10);

            function frame() {

                if (extendedCardX == 100) {
                    clearInterval(id);
                }
                else {
                    extendedCardX++;
                    extendedCardY += 8;
                    card.style.width = extendedCardX + "%";
                    card.style.height = extendedCardY + "px";
                }
            }
        }

        let collapsedCards = document.getElementsByClassName('collapsed');

        for (let i = 0; i < collapsedCards.length; i++) {
            collapsedCards[i].style.width = "33.3%";
        }
    }
}


function collapsePortfolioCard(card, btn) {

    btn.innerHTML = 'More Info';
    card.classList.add('collapsed');
    card.classList.remove('extended');

    var extendedCardX;
    var extendedCardY;

    if (window.innerWidth > 600) {

        extendedCardY = card.offsetHeight;

        card.childNodes[1].style.width = '95%';
        card.childNodes[1].style.marginLeft = '2.5%';

        if (window.innerWidth > 1200) {
            extendedCardX = 100;

            navStickyContainer.style.height = '300%';

            var id = setInterval(frame, 5);

            function frame() {

                if (extendedCardX == 25) {
                    clearInterval(id);
                }
                else {
                    extendedCardX--;
                    extendedCardY -= 8;
                    card.style.width = extendedCardX + "%";
                    card.style.height = extendedCardY + "px";
                }
            }

            let collapsedCards = document.getElementsByClassName('collapsed');

            for (let i = 0; i < collapsedCards.length; i++) {
                collapsedCards[i].style.width = "25%";
            }
        }

        else {
            extendedCardX = 100;

            var id = setInterval(frame, 10);

            function frame() {

                if (extendedCardX == 50) {
                    clearInterval(id);
                }
                else {
                    extendedCardX--;
                    extendedCardY -= 8;
                    card.style.width = extendedCardX + "%";
                    card.style.height = extendedCardY + "px";
                }
            }

            let collapsedCards = document.getElementsByClassName('collapsed');

            for (let i = 0; i < collapsedCards.length; i++) {
                collapsedCards[i].style.width = "50%";
            }
        }
    }
}