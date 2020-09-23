const contacUs = () => {
    const mainDiv = document.getElementById('content');

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact-page');

    mainDiv.appendChild(contact);

    // let greenCircle = document.createElement('img');
    // greenCircle.setAttribute('src', '../img/circle.svg');
    // greenCircle.setAttribute('alt', 'Green circle')
    // greenCircle.classList.add('circle-svg-three');

    // contact.appendChild(greenCircle);

    let contactTag = document.createElement('h1');
    contactTag.innerHTML = 'contact<br>us';
    contactTag.classList.add('contact-tag');

    contact.appendChild(contactTag);

    let restaurantInfo = document.createElement('h2');
    restaurantInfo.classList.add('restaurant-info');
    restaurantInfo.innerHTML = '<strong>find us here:</strong><br> Orange Street, 1<br>86251 / New York<br><br>🕻: 55 6789 928 <br> ✉: hi@breakfastclub.com';

    contact.appendChild(restaurantInfo);
}

export default contacUs;