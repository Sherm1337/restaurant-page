import './style.css';

import homepage from './homepage.js';

const contentContainer = document.createElement('div');
contentContainer.classList.add('content orange-background');
document.body.appendChild(contentContainer);

(function createHeader() {
    const header = document.createElement('header');
    document.body.appendChild(header);
    
    const compNameContainer = document.createElement('div');
    compNameContainer.classList.add('comp-name-container');
    const companyName = document.createElement('p');
    companyName.textContent = "Company Name";
    compNameContainer.appendChild(companyName);

    const nav = document.createElement('div');
    nav.classList.add('header-nav');
    let buttons = [
        {
            name: "Home",
            script: homepage(),
        },
        {
            name: "Home",
            script: console.log("menu.js works"),
        }
    ];
    buttons.forEach(button => {
        const navButton = document.createElement('button');
        navButton.textContent = `${button.name};`;
        navButton.onclick(button.script);
        nav.appendChild(navButton);        
    });
})();

homepage();
