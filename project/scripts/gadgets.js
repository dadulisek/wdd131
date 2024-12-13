// const year = document.querySelector("#currentyear");

// const currentYear = new Date().getFullYear();

// year.textContent = currentYear;

// const lastModifiedDate = new Date(document.lastModified);

function getYear (){
    const year = document.querySelector("#currentyear");

    const currentYear = new Date().getFullYear();
    
    year.textContent = currentYear;
    
    const lastModifiedDate = new Date(document.lastModified);
}

getYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', ()=> {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});