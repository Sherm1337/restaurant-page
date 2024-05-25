import './style.css';
import './menu.css';

import homepage from './homepage.js';
import menu from './menu.js';


function createHeader() {
    const header = document.createElement('header');
    document.body.appendChild(header);
    
    const compNameContainer = document.createElement('div');
    compNameContainer.classList.add('comp-name-container');
    const companyName = document.createElement('p');
    companyName.textContent = "Company Name";
    compNameContainer.appendChild(companyName);
    header.appendChild(compNameContainer);

    const navDiv = document.createElement('div');
    navDiv.classList.add('header-nav');
    let buttons = [
        {
            name: "Home",
            script: homepage,
        },
        {
            name: "Menu",
            script: menu,
        }
    ];
    buttons.forEach((button) => {
        const navButton = document.createElement('button');
        navButton.textContent = `${button.name}`;
        navButton.addEventListener("click", function() {
            for (let i = document.body.childElementCount; i > 1 ; i--) {
                const body = document.body;
                body.removeChild(body.lastChild);
            }
        });
        const script = button.script;
        navButton.addEventListener("click", script);
    
        navDiv.appendChild(navButton);
    });
    header.appendChild(navDiv);
    homepage();
};
createHeader();