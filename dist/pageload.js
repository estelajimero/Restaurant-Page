const pageLoad = () => {
   const mainDiv = document.getElementById('content');

    // HEADER
    const header = document.createElement('header');
    header.classList.add('main-header');

    mainDiv.appendChild(header);

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('top-header');

    header.appendChild(headerDiv);

    const logo = document.createElement('img');
    logo.setAttribute('src', '../img/Logo.svg');
    logo.setAttribute('alt', 'Restaurant logo');
    logo.classList.add('logo');

    headerDiv.appendChild(logo);

    // NAV
    let navBar = document.createElement('nav');
    navBar.classList.add('top-navigation');

    headerDiv.appendChild(navBar);

    let tabMenu = document.createElement('ul');
    tabMenu.classList.add('tab-menu');

    navBar.appendChild(tabMenu);

    let menuItem = document.createElement('li');
    menuItem.classList.add('item-li');

    tabMenu.appendChild(menuItem);

    let homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#main-content');
    homeLink.innerHTML = 'home';
    homeLink.classList.add('home-link');

    menuItem.appendChild(homeLink)

    let menuItemTwo = document.createElement('li');
    menuItemTwo.classList.add('item-li');

    tabMenu.appendChild(menuItemTwo);

    let menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#our-menu');
    menuLink.innerHTML = 'our menu';
    menuLink.classList.add('menu-link');

    menuItemTwo.appendChild(menuLink)

    let menuItemThree = document.createElement('li');
    menuItemThree.classList.add('item-li');

    tabMenu.appendChild(menuItemThree);

    let contactLink = document.createElement('a');
    contactLink.setAttribute('href', '#contact-page');
    contactLink.innerHTML = 'contact';
    contactLink.classList.add('contact-link');

    menuItemThree.appendChild(contactLink);

    // MAIN CONTENT
    let landingDiv = document.createElement('div');
    landingDiv.setAttribute('id', 'main-content');

    mainDiv.appendChild(landingDiv);

    let introLanding = document.createElement('div');
    introLanding.classList.add('intro-landing');

    mainDiv.appendChild(introLanding);

    let landingPic = document.createElement('img');
    landingPic.setAttribute('src', '../img/fruit-salad.jpg')
    landingPic.setAttribute('alt', 'Fruit salad');
    landingPic.classList.add('landing-page');

    introLanding.appendChild(landingPic);

    let mainSlogan = document.createElement('h1');
    mainSlogan.innerHTML = 'only for <br>breakfast <br>lovers';
    mainSlogan.classList.add('slogan-text');

    introLanding.appendChild(mainSlogan);

    let restaurantDescription = document.createElement('h2');
    restaurantDescription.innerHTML = 'we are a coffe shop / bakery / bruncherie <br>located downtown. we have vegan and <br>vegetarian options. <br><br> come say hello!'
    restaurantDescription.classList.add('text-description');

    introLanding.appendChild(restaurantDescription);

    // let greenCircle = document.createElement('img');
    // greenCircle.setAttribute('src', '../img/circle.svg');
    // greenCircle.setAttribute('alt', 'Green circle')
    // greenCircle.classList.add('circle-svg');

    // restaurantDescription.appendChild(greenCircle);
}

export default pageLoad;



