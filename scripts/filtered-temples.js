const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const container = document.querySelector('.gallery');
const infoHeader = document.querySelector('#info-header');

const homeButton = document.getElementById('home');
const oldButton = document.querySelector('#old');
const newButton = document.getElementById('new');
const largeButton = document.getElementById('large');
const smallButton = document.getElementById('small');


function templesToHTML(temples) {
    const container = document.querySelector('.gallery');

    temples.forEach(temple => {
        const figure = document.createElement('figure');
        figure.classList.add('temple');

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.templeName + ' temple';
        image.width = '400';
        image.height = 'auto';
        image.loading = 'lazy';
        figure.appendChild(image);

        const figcaption = document.createElement('figcaption');
        const title = document.createElement('h2');
        title.textContent = temple.templeName;
        figcaption.appendChild(title);

        const location = document.createElement('p');
        location.textContent = 'Location: ' + temple.location;
        figcaption.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.textContent = 'Dedicated: ' + temple.dedicated;
        figcaption.appendChild(dedicated);

        const area = document.createElement('p');
        area.textContent = 'Area: ' + temple.area + ' sq ft';
        figcaption.appendChild(area);

        figure.appendChild(figcaption);
        container.appendChild(figure);
    });
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756499-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-894724-wallpaper.jpg"
    },
    {
        templeName: "Mérida Mexico",
        location: "Mérida, Mexico",
        dedicated: "2000, July, 8",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/merida-mexico/400x250/merida-mexico-temple-lds-643985-wallpaper.jpg"
    },
    // Add more temple objects here...
];

const oldTemples = temples.filter(temple =>{ 
    const [templeYear] = temple.dedicated.split(', ');
    return parseInt(templeYear) < 1900;
})
const newTemples = temples.filter(temple =>{ 
    const [templeYear] = temple.dedicated.split(', ');
    return parseInt(templeYear) > 2000;
})
const smallTemples = temples.filter(temple => temple.area < 10000);
const largeTemples = temples.filter(temple => temple.area > 100000);

templesToHTML(temples);

homeButton.addEventListener('click', function(){
    infoHeader.textContent = 'Home';
    container.innerHTML = '';
    templesToHTML(temples);
});

oldButton.addEventListener('click', function(){
    infoHeader.textContent = 'Old';
    container.innerHTML = '';
    templesToHTML(oldTemples);
});

newButton.addEventListener('click', function(){
    infoHeader.textContent = 'New';
    container.innerHTML = '';
    templesToHTML(newTemples);
});

largeButton.addEventListener('click', function(){
    infoHeader.textContent = 'Large';
    container.innerHTML = '';
    templesToHTML(largeTemples);
});

smallButton.addEventListener('click', function(){
    infoHeader.textContent = 'Small';
    container.innerHTML = '';
    templesToHTML(smallTemples);
});