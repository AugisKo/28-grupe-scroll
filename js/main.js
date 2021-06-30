const backToTopDOM = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopDOM.classList.remove('hide');
    } else {
        backToTopDOM.classList.add('hide');
    }
})
