const body = document.body
const container = document.querySelector('.container');
const containerChildCount = container.children.length; // Counts direct child elements

const newParagraph = document.createElement('p');
const palePinkButton = document.querySelector('.testingColorPallete');

palePinkButton.addEventListener("click", function () {

    // const palePinkDivPopUp = document.createElement('div');
    // palePinkDivPopUp.className = 'pale-pink-popUp';
    // palePinkDivPopUp.style.backgroundColor = "#DCC6E0";
    // palePinkDivPopUp.appendChild(newParagraph);
    // newParagraph.textContent = "This is a pale pink color."


    const overlay = document.createElement('div');
    overlay.className('overlay');

    const popup = document.createElement('div');
    popup.className = 'popup';
    
    const closeButton = document.createElement('span');
    closeButton.className = 'popup-close';
    closeButton.className = 'material-symbols-outlined icon';
    closeButton.textContent = 'close';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    });

    const message = document.createElement('p');
    message.textContent = 'This is a popup!';

    popup.appendChild(closeButton);
    popup.appendChild(message);

    document.body.appendChild(overlay);
    document.body.appendChild(popup);
});



// color pallete 
/*
Here’s a soothing **Pastel Dream** color palette:

### **Primary Colors:**
1. **Lavender** - `#DCC6E0`
2. **Pale Pink** - `#FAD4D8`
3. **Baby Blue** - `#A9D6E5`
### **Accent Colors:**
4. **Mint Green** - `#BEE3DB`
5. **Soft Gray** - `#EAEAEA`
### **Text and Background Colors:**
6. **Background (Light)** - `#FFFFFF`
7. **Text (Dark Gray)** - `#505050`
---
### **Palette in Action:**
- **Background**: Soft gray or white.
- **Headers**: Lavender or baby blue.
- **Buttons**: Pale pink or mint green with subtle hover effects.
- **Links/Icons**: Baby blue or lavender.
- **Text**: Dark gray for readability.
---
*/

const colorPallete = {

    // Primary Colors
    // --------------

    "pale_pink": "#FAD4D8",
    "Lavender": "#DCC6E0",
    "Baby_Blue": "#A9D6E5",

    // ---------------------
    // Accent Colors
    // ---------------------

    "Mint_Green": "#BEE3DB",
    "Soft_Gray": "#EAEAEA",
    
    // Background Colors 

    "white": "#FFFFFF",
    "dark_gray": "#505050"

}
// -- Add Div Button --

const addDivButton = document.getElementById('addDivButton')
addDivButton.style.backgroundColor = colorPallete["pale_pink"];



function createNewDiv() {

    const div = document.createElement('div');
    container.appendChild(div);
    div.textContent = "custom div";
    div.style.backgroundColor = "#EAEAEA";
    div.style.padding = "5rem";
    div.style.marginInline = "1rem";
}

function customizeContainer() {
    
    if (containerChildCount <= 0) {
        
        createNewDiv();

    } else {
        // const myFunction = (parameter) => condition ? valueIfTrue : valueIfFalse;

        const test = (containerChildCount) => containerChildCount > 3 ? console.log("Max") : createNewDiv();

        if (test) {
            console.log("div added!")
        } else {
            console.log("div wasn't added.")
        }
    }
}

addDivButton.addEventListerner("click", function () {
    
    createNewDiv();

    alert("Div successfully created");
})


/*

Here’s a soothing **Pastel Dream** color palette:

### **Primary Colors:**
1. **Lavender** - `#DCC6E0`
2. **Pale Pink** - `#FAD4D8`
3. **Baby Blue** - `#A9D6E5`

### **Accent Colors:**
4. **Mint Green** - `#BEE3DB`
5. **Soft Gray** - `#EAEAEA`

### **Text and Background Colors:**
6. **Background (Light)** - `#FFFFFF`
7. **Text (Dark Gray)** - `#505050`

---

### **Palette in Action:**
- **Background**: Soft gray or white.
- **Headers**: Lavender or baby blue.
- **Buttons**: Pale pink or mint green with subtle hover effects.
- **Links/Icons**: Baby blue or lavender.
- **Text**: Dark gray for readability.

---

Let me know if you want me to create an example layout or CSS styles for this palette!

*/