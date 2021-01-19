const nav = document.querySelector('.nav');

function scrollFn() {
    const bodyScrollTop = document.body.scrollTop;
    const htmlScrollTop = document.documentElement.scrollTop;
    if (bodyScrollTop > 20 || htmlScrollTop > 20) {
        nav.style.backgroundColor = "#FFF";
    } else {
        nav.style.backgroundColor = "transparent";
    }
};

window.onscroll = () => { scrollFn() };