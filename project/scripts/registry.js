const regiments = [
    {
      name: "13th Georgia",
      side: "Confederacy",
      type: "Infantry",
      members: 40,
      location: "Savannah, GA",
      phone: "(518) 580-9453",
      email: "13thGeorgia@georgiahistory.org" 
    },
    {
      name: "7th New York",
      side: "Union",
      type: "Infantry",
      members: 60,
      location: "New York, NY",
      phone: "(212) 555-1234",
      email: "ny7th@nyhistory.org"
    },
    {
      name: "2nd Texas Cavalry",
      side: "Confederacy",
      type: "Cavalry",
      members: 35,
      location: "Dallas, TX",
      phone: "(214) 555-8765",
      email: "txcav2nd@texashistory.net"
    },
    {
      name: "54th Massachusetts",
      side: "Union",
      type: "Infantry",
      members: 55,
      location: "Boston, MA",
      phone: "(617) 555-9876",
      email: "mass54th@masshistorical.org"
    },
    {
      name: "1st Virginia",
      side: "Confederacy",
      type: "Infantry",
      members: 48,
      location: "Richmond, VA",
      phone: "(804) 555-4321",
      email: "va1st@virginiahistory.org"
    },
    {
      name: "9th Pennsylvania",
      side: "Union",
      type: "Infantry",
      members: 62,
      location: "Philadelphia, PA",
      phone: "(215) 555-7654",
      email: "pa9th@phillyhistory.org"
    },
    {
      name: "4th Alabama",
      side: "Confederacy",
      type: "Infantry",
      members: 42,
      location: "Montgomery, AL",
      phone: "(334) 555-3210",
      email: "alabama4th@alabamahistory.org"
    },
    {
      name: "1st Michigan",
      side: "Union",
      type: "Infantry",
      members: 58,
      location: "Detroit, MI",
      phone: "(313) 555-6543",
      email: "michigan1st@michiganhistory.org"
    },
    {
      name: "15th Louisiana",
      side: "Confederacy",
      type: "Infantry",
      members: 38,
      location: "New Orleans, LA",
      phone: "(504) 555-2109",
      email: "la15th@louisianahistory.org"
    },
    {
      name: "20th Indiana",
      side: "Union",
      type: "Infantry",
      members: 65,
      location: "Indianapolis, IN",
      phone: "(317) 555-9087",
      email: "indiana20th@indianahistory.org"
    },
    {
      name: "Virginia Battery A",
      side: "Confederacy",
      type: "Artillery",
      members: 25,
      location: "Richmond, VA",
      phone: "(804) 555-1111",
      email: "vabatteryA@virginiahistory.org"
    },
    {
      name: "1st Rhode Island Battery",
      side: "Union",
      type: "Artillery",
      members: 28,
      location: "Providence, RI",
      phone: "(401) 555-2222",
      email: "ribattery1st@rhodeislandhistory.org"
    }
  ];

const regimentList = document.getElementById('regiment-list');
const displayAllButton = document.getElementById('display-all');
const displaySouthButton = document.getElementById('display-south');
const displayNorthButton = document.getElementById('display-north');

function displayRegiments(filteredRegiments) {
    regimentList.innerHTML = '';

    filteredRegiments.forEach(regiment => {
        const regimentDiv = document.createElement('div');
        regimentDiv.classList.add(regiment.side.toLowerCase()); // Add "union" or "confederate" class
      
        const h3 = document.createElement('h3');
        h3.textContent = regiment.name;
        regimentDiv.appendChild(h3);
      
        const side = document.createElement('p');
        side.textContent = `Side: ${regiment.side}`;
        regimentDiv.appendChild(side);
      
        const type = document.createElement('p');
        type.textContent = `Type(s): ${regiment.type}`;
        regimentDiv.appendChild(type);
      
        const members = document.createElement('p');
        members.textContent = `Approximate Members: ${regiment.members}`;
        regimentDiv.appendChild(members);
      
        const location = document.createElement('p');
        location.textContent = `Location: ${regiment.location}`;
        regimentDiv.appendChild(location);
      
        const phoneP = document.createElement('p'); // Create separate paragraph for phone
        phoneP.textContent = `Phone: ${regiment.phone}`;
        regimentDiv.appendChild(phoneP);
      
        const emailP = document.createElement('p'); // Create separate paragraph for email
        emailP.textContent = `Email: ${regiment.email}`;
        regimentDiv.appendChild(emailP);
      
        regimentList.appendChild(regimentDiv);
      });
}

displayAllButton.addEventListener('click', () => {
    displayRegiments(regiments); 
  });
  
  displaySouthButton.addEventListener('click', () => {
    const confederateRegiments = regiments.filter(regiment => regiment.side === "Confederacy");
    displayRegiments(confederateRegiments);
  });
  
  displayNorthButton.addEventListener('click', () => {
    const unionRegiments = regiments.filter(regiment => regiment.side === "Union");
    displayRegiments(unionRegiments);
  });

  displayRegiments(regiments); 

  // This is for the form

const form = document.getElementById('unitForm');
const outputContainer = document.getElementById('outputContainer');
const unitNameError = document.getElementById('unitNameError');
const unitSideError = document.getElementById('unitSideError');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    unitNameError.textContent = "";
    unitSideError.textContent = "";

    const unitName = document.getElementById('unitName').value;
    const unitSide = document.getElementById('unitSide').value;

    if (unitName === "") {
        unitNameError.textContent = "Unit Name is required.";
        return;
    }

    if (unitSide === "") {
        unitSideError.textContent = "Side is required.";
        return;
    }

    const unitTypeInfantry = document.getElementById('unitTypeInfantry').checked;
    const unitTypeCavalry = document.getElementById('unitTypeCavalry').checked;
    const unitTypeArtillery = document.getElementById('unitTypeArtillery').checked;

    let unitTypes = [];
    if (unitTypeInfantry) {
        unitTypes.push('Infantry');
    }
    if (unitTypeCavalry) {
        unitTypes.push('Cavalry');
    }
    if (unitTypeArtillery) {
        unitTypes.push('Artillery');
    }

    const numMembers = parseInt(document.getElementById('numMembers').value) || 0; // Default to 0 if no value or invalid input
    const unitLocation = document.getElementById('unitLocation').value;
    const unitPhone = document.getElementById('unitPhone').value;
    const unitEmail = document.getElementById('unitEmail').value;

    const unitData = {
        name: unitName,
        side: unitSide,
        types: unitTypes,
        members: numMembers,
        location: unitLocation,
        phone: unitPhone,
        email: unitEmail
    };

    saveUnitData(unitData);
    displayUnitData(unitData);
});

function saveUnitData(unitData) {
    let units = JSON.parse(localStorage.getItem('units')) || [];
    units.push(unitData);
    localStorage.setItem('units', JSON.stringify(units));
}

function displayUnitData(unitData) {
    outputContainer.innerHTML = `
        <div class="output">
            <h3>${unitData.name}</h3>
            <p>Side: ${unitData.side}</p>
            <p>Type(s): ${unitData.types.join(', ')}</p>
            <p>Approximate Members: ${unitData.members || 'N/A'}</p>
            <p>Location: ${unitData.location || 'N/A'}</p>
            <p>Phone: ${unitData.phone || 'N/A'}</p>
            <p>Email: ${unitData.email || 'N/A'}</p>
        </div>
    `;
    outputContainer.appendChild(outputDiv);
}