//Skapar variabler (uppgift 4)
// Skapar en variabel button och hämtar via dess id
const button = document.getElementById("actionButton");
// Skapar en variabel outputDiv och hämtar via dess id 
const divElement = document.getElementById("outputDiv");
// Skapar en variabel checkbox och hämtar via dess id
const checkbox = document.querySelector("#divStyle") 
// Skapar en variabel textFields som hämtar alla textfält via klassnamn
const textFields = document.getElementsByClassName("textfield");


// Fördefinerad funktion (uppgift 5)
// e är eventet-objektet som skickas till funktionen när eventet triggas
function handleTextFieldEvent(e) { 
    // Skriver ut i konsollen vilket HTML-element som utlöste eventet
    console.log("Avsändare (target):", e.target);
    // Hämta namnet på elementet och spar till variabeln fieldName
    const fieldName = e.target.name;
    //Skriver ut name-attributet i konsolen 
    console.log("Name-attribut:", fieldName);
    // Om name-attributet är "content", uppdateras div-elementet
    if (fieldName === "content") {
        const fieldValue = e.target.value.trim(); // Hämta och trimma värdet
        // Uppdaterar innehållet i divElement med värdet från fieldValue.
        // Om fieldValue är tomt, sätts en tom sträng som innehåll istället.
        divElement.innerHTML = fieldValue || ""; 
    }
}

// Koppla eventlyssnare till varje textfält (uppgift 6 tillsammans med 5)
// Konverterar textfälten till en array för att möjliggöra iteration över dem
Array.from(textFields).forEach(field => {
    // Lägger till en eventlyssnare på varje textfält för "input"-event
    field.addEventListener("input", handleTextFieldEvent); 
    // Input-eventet triggas när någon ändrar innehållet i någon av textfälten
    // där den fördefinerade funktionen hanterar vad som ska hända
});

// Lägg till en anonym lyssnare till checkbox (uppgift 6)
checkbox.addEventListener("change", () => {
    // När värdet ändras hämtas den nya färgen och lagras i en lokal variabel
    const colorValue = textFields[0].value.trim();
    if (checkbox.checked) {
        if (colorValue) {
            // Om fältet har ett värde, ändra bakgrundsfärgen
            divElement.style.backgroundColor = colorValue;
            console.log(`Checkbox markerad: Bakgrundsfärgen ändrades till: ${colorValue}`);
        } else {
            // Om fältet är tomt, återställ bakgrundsfärgen
            divElement.style.backgroundColor = ""; 
            console.log("Checkbox markerad men inget färgvärde angivet. Bakgrundsfärgen återställd.");
        }
    } else {
        // Återställ till den ursprungliga bakgrundsfärgen om checkboxen är avmarkerad
        divElement.style.backgroundColor = ""; 
        console.log("Checkbox avmarkerad: Bakgrundsfärgen återställd till ursprungligt läge.");
    }
});

// Lägg till en anonym lyssnare till button
button.addEventListener("click", (e) => {
    e.preventDefault(); // Förhindrar formulär från att uppdatera sidan 
    // Kontrollerar om divElement finns kvar i DOM-trädet
    if (document.body.contains(divElement)) {
        divElement.remove(); // Ta bort div från DOM
        console.log("Div-elementet har raderats.");
    } else {
        console.log("Div-elementet finns redan inte i DOM-trädet.");
    }
});


