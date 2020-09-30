const cardBody = document.querySelector('.card-body');
const modalButton = document.querySelector('.btn btn-dark')
const card = document.querySelector('.card')
const modalBody = document.getElementById('modalBody'); 
const modalTitle = document.getElementById('modalTitle'); 

let holiday = 0; 
let cardTitle = document.createElement('h5'); 
cardBody.appendChild(cardTitle);
card.insertBefore(cardTitle, cardBody);

async function calendarFetch() {
    await fetch('https://calendarific.com/api/v2/holidays?&api_key=6c217b97b6744628dbb803d5baf907e4212ba4e0&country=US&year=2020')
    .then(res => res.json())
    .then(data => displayResults(data, holiday))
}

async function unsplashFetch() {
    await fetch('https://api.unsplash.com/photos/random/?client_id=Y93L5vRmLyZHtY2rXQdX0B9f8nu7bUveWTS6aB392xs')
    .then(response => response.json())
    .then(data => displayImage(data))
}

function displayResults(info, holiday){
    console.log(info); 
    
    cardTitle.innerText = info.response.holidays[holiday].name;
    modalBody.innerText = info.response.holidays[holiday].description;
    modalTitle.innerText = info.response.holidays[holiday].name; 
    cardTitle.style = 'margin-bottom: -8px; margin-top: 25px; padding: -5px; font-size: 25px; font-weight: bolder; color: #C18633;  font-family: Merriweather, serif;'
}

function displayImage(data) {
    console.log(data); 
    let firstImg = document.getElementById('cardImg');
    firstImg.src = data.urls.regular

}

function nextCard () {
    holiday++; 
    calendarFetch(); 
    unsplashFetch(); 
    console.log(holiday); 
}

function previousCard () {
    if (holiday > 0) {
        holiday--; 
        calendarFetch(); 
        unsplashFetch(); 
        console.log(holiday);   
    }
}


calendarFetch(); 
unsplashFetch(); 
