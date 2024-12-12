const bar = document.getElementById("hamerberg");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    nav.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}