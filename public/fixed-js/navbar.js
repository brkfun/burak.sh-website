
let navbar = function(){
    return document.getElementsByClassName("navbar").item(0);
};
let app = function(){
    return document.getElementById('app');
};
function buttonClick() {
    console.log('x');
    if (navbar().style.top === '-60px') {
        navbar().style.top = '0px';
        app().style.marginTop = '60px';
    } else {
        navbar().style.top = '-60px';
        app().style.marginTop = '0px';
    }
}

if (null !== navbar()) {
    navbar().style.top = '-60px';
    let navbarButton = document.createElement('div');
    navbarButton.classList.add('navbar-expander-button');
    document.body.appendChild(navbarButton);
    navbarButton.addEventListener('click', buttonClick);
}
