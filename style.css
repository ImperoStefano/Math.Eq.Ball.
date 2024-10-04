const ball = document.querySelector('.ball');
const line = document.querySelector('.line');
const equationDisplay = document.getElementById('equation');

let crossings = 0;

// Array di equazioni
let equations = [
    "E=mc²",
    "a² + b² = c²",
    "F = ma",
    "c² = a² + b²",
    "d = rt",
    "pV = nRT",
    "i = V/R",
    "V = IR",
    "A = πr²",
    "F = G(m1*m2)/r²",
    "x = (-b ± √(b²-4ac)) / 2a",
    "s = ut + ½at²",
    "PV = nRT",
    "E = hf",
    "S = (n/2)(a + l)",
    "K.E. = ½mv²",
    "P = F/A",
    "V = IR",
    "λ = h/p",
    "x = x₀ + vt"
];

// Funzione per cambiare il colore della palla
function changeBallColor() {
    const colorValue = Math.floor(255 * (crossings / 7)); // Calcola il valore del colore
    const color = `rgb(0, ${255 - colorValue}, ${colorValue})`; // Passa dal verde al blu
    ball.style.backgroundColor = color;
}

// Funzione per muovere la palla
function moveBall() {
    let position = 0;

    const interval = setInterval(() => {
        if (position >= window.innerWidth) {
            position = 0; // Ripristina la posizione
            crossings++;
            changeBallColor(); // Cambia il colore della palla

            // Mostra una nuova equazione
            if (crossings % 7 === 0) {
                let equation = equations[Math.floor(crossings / 7) % equations.length];
                equationDisplay.innerText = equation;
            }
        }
        ball.style.left = position + 'px'; // Muovi la palla
        position += 5; // Incrementa la posizione
    }, 50); // Velocità del movimento
}

// Avvia il movimento della palla
moveBall();
