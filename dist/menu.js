const ourMenu = () => {
    const mainDiv = document.getElementById('content');

    const ourMenu = document.createElement('div');
    ourMenu.setAttribute('id', 'our-menu');

    mainDiv.appendChild(ourMenu);

    let menuTag = document.createElement('h1');
    menuTag.innerHTML = 'our<br>menu';
    menuTag.classList.add('menu-tag');

    ourMenu.appendChild(menuTag);

    const menuGallery = document.createElement('div');
    menuGallery.classList.add('gallery');

    ourMenu.appendChild(menuGallery);

    const imageContainerOne = document.createElement('div');
    imageContainerOne.classList.add('pic-container');

    menuGallery.appendChild(imageContainerOne);
    
    let pictureOne = document.createElement('img');
    pictureOne.setAttribute('src', '../img/banana-bowl.jpg');
    pictureOne.setAttribute('alt', 'Banana bowl');
    pictureOne.classList.add('picture');

    imageContainerOne.appendChild(pictureOne);

    const imageContainerTwo = document.createElement('div');
    imageContainerTwo.classList.add('pic-container');

    menuGallery.appendChild(imageContainerTwo);
    
    let pictureTwo = document.createElement('img');
    pictureTwo.setAttribute('src', '../img/waffle.jpg');
    pictureTwo.setAttribute('alt', 'Waffle');
    pictureTwo.classList.add('picture');

    imageContainerTwo.appendChild(pictureTwo);

    const imageContainerThree = document.createElement('div');
    imageContainerThree.classList.add('pic-container');

    menuGallery.appendChild(imageContainerThree);

    let pictureThree = document.createElement('img');
    pictureThree.setAttribute('src', '../img/poached-egg-salad.jpg');
    pictureThree.setAttribute('alt', 'Poached Egg Salad');
    pictureThree.classList.add('picture');

    imageContainerThree.appendChild(pictureThree);

    const imageContainerFour = document.createElement('div');
    imageContainerFour.classList.add('pic-container');

    menuGallery.appendChild(imageContainerFour);

    let pictureFour = document.createElement('img');
    pictureFour.setAttribute('src', '../img/vegetable-salad.jpg');
    pictureFour.setAttribute('alt', 'Vegetable Salad');
    pictureFour.classList.add('picture');

    imageContainerFour.appendChild(pictureFour);

    const imageContainerFive = document.createElement('div');
    imageContainerFive.classList.add('pic-container');

    menuGallery.appendChild(imageContainerFive);

    let pictureFive = document.createElement('img');
    pictureFive.setAttribute('src', '../img/tea.jpg');
    pictureFive.setAttribute('alt', 'Herbal Tea');
    pictureFive.classList.add('picture');

    imageContainerFive.appendChild(pictureFive);

    const imageContainerSix = document.createElement('div');
    imageContainerSix.classList.add('pic-container');

    menuGallery.appendChild(imageContainerSix);

    let pictureSix = document.createElement('img');
    pictureSix.setAttribute('src', '../img/iced-coffee.jpg');
    pictureSix.setAttribute('alt', 'Iced Coffee');
    pictureSix.classList.add('picture');

    imageContainerSix.appendChild(pictureSix);


    // let greenCircle = document.createElement('img');
    // greenCircle.setAttribute('src', '../img/circle.svg');
    // greenCircle.setAttribute('alt', 'Green circle')
    // greenCircle.classList.add('circle-svg-two');

    // ourMenu.appendChild(greenCircle);
    
}

export default ourMenu;