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

// Rest of the code

const temp = 4;
const windSpeed = 7;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 5) {
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

const windChillCelsiues = calculateWindChill(temp, windSpeed);
const windChillLabel = document.querySelector('#windchill');
if (temp <= 10 && windSpeed > 5){
    windChillLabel.textContent = `${windChillCelsiues}℃`;
} else{
    windChillLabel.textContent = 'N/A';
}