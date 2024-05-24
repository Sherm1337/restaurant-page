export default function homepage() {
    const quoteDiv = document.createElement('div')
    quoteDiv.classList.add('subcontent-container quote');
    const quote = document.createElement('p');
    quote.textContent = "XYZ Company is a beacon of excellence in its industry, renowned for its unwavering commitment to quality, innovation, and customer satisfaction. With a dedicated team of experts and a culture that fosters creativity and collaboration, XYZ consistently delivers cutting-edge solutions that surpass expectations. Their stellar reputation and track record of success make them a top choice for clients seeking unparalleled service and results.";
    quoteDiv.appendChild(quote);
    const author = document.createElement('h2');
    author.textContent = "Name Here";
    quoteDiv.appendChild(author);
    contentContainer.appendChild(quoteDiv);

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('subcontent-container hours');
    const hoursTitle = document.createElement('h1');
    hoursTitle.textContent= "Hours";
    hoursDiv.appendChild(hoursTitle);
    const hoursList = document.createElement('ul');
    hoursDiv.appendChild(hoursList);
    const hoursArray = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ]
    hoursArray.forEach( day => {
        const hoursListItem = document.createElement('li');
        hoursListItem.textContent = day;
        hoursList.appendChild(hoursListItem);
    });
    contentContainer.appendChild(hoursDiv);

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('subcontent-container location');
    const locationTitle = document.createElement('h1');
    locationTitle.textContent = "Location";
    locationDiv.appendChild(locationTitle);
    const locationAddress = document.createElement('h2');
    locationAddress.textContent = "Company Address Here";
    locationDiv.appendChild(locationAddress);
}