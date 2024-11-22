// Hämta checkboxen via dess id
const checkbox = document.querySelector("#divStyle")

// Hämtar alla textfält som en HTLMCollection
const textFields = document.getElementsByClassName("textfield");

// Hämtar knappen via dess id
const button = document.getElementById("actionButton");

// Hämtar div-element (0=första elementet)
const divElement = document.getElementsByTagName("div")[0];

// Kontrollera att variablerna är hämtade korrekt (för felsökning)
console.log("Checkbox:", checkbox);
console.log("Textfält:", textFields);
console.log("Knapp:", button);
console.log("Div-element:", divElement);


// Definiera en funktion som fungerar som eventlyssnare
function handleInputEvent(e) {
    // Logga avsändaren (target) i konsolen
    console.log("Avsändare (target):", e.target);

    // Ta reda på name-attributet för target
    const targetName = e.target.name;
    console.log("Name-attribut:", targetName);

    // Om target har id "content", uppdatera div-elementet
    if (e.target.id === "content") {
        const inputValue = e.target.value; // Hämta värdet i inputfältet
        divElement.innerHTML = inputValue; // Skriv ut värdet i div-elementet
    }
}

// Lägg till eventlyssnare för alla textfält
Array.from(textFields).forEach(field => {
    field.addEventListener("input", handleInputEvent);
});