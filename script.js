
// Hämtar det som står i textfältet för färg genom id
const colorInput = document.getElementById("color");

// Skapar en variabel checkbox och hämtar via dess id
const checkbox = document.querySelector("#divStyle") 

// Skapar en variabel textFields som hämtar alla textfält via klassnamn
const textFields = document.getElementsByClassName("textfield");

// OBS ANVÄNDS EJ ÄNNU Skapar en variabel button och hämtar via dess id
const button = document.getElementById("actionButton");

// OBS ANVÄNDS EJ ÄNNU Skapar en variabel divElement och hämtar via tag-namn (0=första elementet)
const divElement = document.getElementsByTagName("div")[0];

// OBS ANVÄNDS EJ ÄNNU Skapar en variabel contentInput och hämtar via dess id
const contentInput = document.getElementById("content");

// Skapar en variabel outputDiv och hämtar via dess id
const outputDiv = document.getElementById("outputDiv");

// Kontrollera att variablerna är hämtade korrekt (för felsökning)
console.log("Checkbox:", checkbox);
console.log("Textfält:", textFields);
console.log("Knapp:", button);
console.log("Div-element:", divElement);

// Fördefinerad funktion (uppgift 5)
// e tar emot ett event
function handleTextFieldEvent(e) { 
    // e.taget är den som triggade eventet och det skrivs här ut i konsolen
    console.log("Avsändare (target):", e.target);
    // Hämta namnet på elementet och spar till variabeln fieldName
    const fieldName = e.target.name;
    //Skriver ut i konsolen
    console.log("Name-attribut:", fieldName);
    // Om name-attributet är "content", uppdatera div-elementet
    if (fieldName === "content") {
        const fieldValue = e.target.value.trim(); // Hämta och trimma värdet
        outputDiv.innerHTML = fieldValue || "Test test, denna ska tas bort sen"; 
    }
}


// Lägg till en anonym lyssnare till checkbox (uppgift 6)
checkbox.addEventListener("change", () => {
    // När värdet ändras hämtas den nya färgen och lagras i en lokal variabel
    const colorValue = colorInput.value.trim();
    if (checkbox.checked) {
        if (colorValue) {
            // Om fältet har ett värde, ändra bakgrundsfärgen
            outputDiv.style.backgroundColor = colorValue;
            console.log(`Checkbox markerad: Bakgrundsfärgen ändrades till: ${colorValue}`);
        } else {
            // Om fältet är tomt, återställ bakgrundsfärgen
            outputDiv.style.backgroundColor = ""; 
            console.log("Checkbox markerad men inget färgvärde angivet. Bakgrundsfärgen återställd.");
        }
    } else {
        // Återställ till den ursprungliga bakgrundsfärgen om checkboxen är avmarkerad
        outputDiv.style.backgroundColor = ""; 
        console.log("Checkbox avmarkerad: Bakgrundsfärgen återställd till ursprungligt läge.");
    }
});


// Koppla eventlyssnare till varje textfält (uppgift 6 tillsammans med 5)
Array.from(textFields).forEach(field => {
    field.addEventListener("input", handleTextFieldEvent); // Använd funktionen från uppgift 5
});





