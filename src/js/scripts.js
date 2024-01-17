const menu = {
    tag: 'header',
    classeMobile: '.mobile-menu',
}

function menuShow(){    
    const menuMobile = document.querySelector(menu.classeMobile);
    console.log('ola')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icone-menu-mobile').src = "src/images/menu-mobile/button_mobile.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icone-menu-mobile').src = "src/images/menu-mobile/close_mobile.svg";
    }
}