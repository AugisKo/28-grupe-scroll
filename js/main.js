const backToTopDOM = document.querySelector('.back-to-top');
const headerDOM = document.querySelector('header');
let wasStickyAtLeastOne = false;
let notStickyTimer = null;

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopDOM.classList.remove('hide');
    } else {
        backToTopDOM.classList.add('hide');
    }

    if (window.scrollY > 150) {
        wasStickyAtLeastOne = true;
        headerDOM.classList.add('sticky');
        headerDOM.classList.remove('not-sticky');
    } else {
        headerDOM.classList.remove('sticky');
        if (wasStickyAtLeastOne) {
            headerDOM.classList.add('not-sticky');

            notStickyTimer = setTimeout(() => {
                headerDOM.classList.remove('not-sticky');
                wasStickyAtLeastOne = false;
            }, 2000)
        }
    }
})
