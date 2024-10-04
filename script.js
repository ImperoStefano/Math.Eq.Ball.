body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0; /* Sfondo più chiaro */
    margin: 0;
}

.container {
    position: relative;
    width: 100%;
    height: 400px; /* Altezza della piscina */
}

.line {
    position: absolute;
    left: 50%; /* Posiziona la linea al centro */
    top: 0;
    height: 100%; /* Linea verticale */
    width: 2px; /* Spessore della linea */
    background-color: black; /* Colore della linea */
}

.ball {
    position: absolute;
    bottom: 50%; /* Posiziona la palla al centro verticale */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: green; /* Colore iniziale della palla */
    transition: background-color 0.5s ease; /* Transizione per il cambio di colore */
    left: 0; /* Inizia dalla sinistra */
}
