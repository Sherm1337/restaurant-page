
export default function menu() {
        let menuItems = [
            {
                dishName: "lasagna",
                description: "This is the description."
            },
            {
                dishName: "Icecream",
                description: "Pick your favorite flavor!"
            }
        ];

        for (let i = 0; i < menuItems.length; i++) {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item-container');
            const descriptionPara = document.createElement('p');
            descriptionPara.textContent = menuItems[i].description;
            menuItemDiv.appendChild(descriptionPara);
            const dishNamePara = document.createElement('h1');
            dishNamePara.textContent = menuItems[i].dishName;
            menuItemDiv.appendChild(dishNamePara);
            document.body.appendChild(menuItemDiv);
        }
}