// Holt das Element mit der ID "anfrage" aus dem DOM und speichert es in einer Variablen namens 'box'.
var box = document.getElementById("anfrage")

// Gibt "eingebunden" in der Konsole aus.
console.log("eingebunden")

// Definiert eine asynchrone Funktion namens 'backendFragen'.
async function backendFragen(){
    // Sendet eine Anfrage an "http://127.0.0.1:5000/nachricht" und wartet auf die Antwort.
    var nachricht = await fetch("http://127.0.0.1:5000/nachricht")
    
    // Wandelt die Antwort in Text um und wartet, bis dieser Vorgang abgeschlossen ist.
    var txt = await nachricht.text()
    
    // Setzt den Text des 'box'-Elements auf den empfangenen Text.
    box.innerText = txt
}

// Ruft die Funktion 'backendFragen' auf.
backendFragen()


// Dieser Code holt ein Element aus dem DOM, sendet eine Anfrage an einen Server, wartet auf die Antwort, wandelt 

// die Antwort in Text um und setzt den Text des Elements auf den empfangenen Text. Es verwendet dabei die Fetch-API, 

// um die Anfrage zu senden und die Antwort zu empfangen. Die Funktion backendFragen ist asynchron, was bedeutet, dass 

// sie nicht den gesamten Code blockiert, während sie auf die Antwort des Servers wartet.