// Importiert das Express-Modul und speichert es in einer Variablen namens 'express'.
const express = require('express')

// Erstellt eine neue Express-Anwendung und speichert sie in einer Variablen namens 'app'.
const app = express()

// Definiert den Port, auf dem die Anwendung laufen soll.
const port = 80

// Importiert das CORS-Modul und speichert es in einer Variablen namens 'cors'.
const cors = require('cors');

// Fügt der Anwendung die CORS-Middleware hinzu, um Cross-Origin-Anfragen zu ermöglichen.
app.use(cors());

// Stellt statische Dateien aus dem 'public'-Verzeichnis bereit.
app.use('/', express.static('public'))

// Startet die Anwendung und lässt sie auf dem definierten Port lauschen. Gibt eine Meldung auf der Konsole aus, wenn die Anwendung gestartet wurde.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Dieser Code erstellt einen einfachen Webserver mit Node.js und Express. Der Server stellt statische Dateien aus 

// dem ‘public’-Verzeichnis bereit und ermöglicht Cross-Origin-Anfragen durch Verwendung der CORS-Middleware. Der Server läuft 

// auf Port 80. Wenn der Server erfolgreich gestartet wurde, wird eine Meldung auf der Konsole ausgegeben.