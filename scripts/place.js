// This is for the footer
// Maybe I should turn this into a function
const year = document.querySelector("#currentyear");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);

const lastModifiedElement = document.querySelector("#lastModified");

const formattedDate = lastModifiedDate.toLocaleDateString('en-US');

const formattedTime = lastModifiedDate.toLocaleTimeString('en-US', { hour12: false });

lastModifiedElement.textContent = `Last Modification: ${formattedDate} ${formattedTime}`;