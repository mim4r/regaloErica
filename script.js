function empezarReto() {
    // Ocultar la pantalla de bienvenida y mostrar los enigmas
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("enigmas").style.display = "block";
    // Mostrar el primer enigma
    document.getElementById("enigma1").style.display = "block";
    // Reproducir la música
    document.getElementById('musica-inicio').play();
}

function checkAnswer1() {
// Variantes válidas para la respuesta 1
    const validAnswers1 = ['hilo', 'el hilo', 'hilos', 'los hilos'];
    const answer1 = document.getElementById('respuesta1').value.toLowerCase().trim();
    const feedback1 = document.getElementById('feedback1');

    if (validAnswers1.includes(answer1)) {
        feedback1.textContent = "¡Correcto! ¡Hilas sueños y creas maravillas!";
        feedback1.style.color = "green";
        nextEnigma(2);
    } else {
        feedback1.textContent = "¡Ups! Intenta de nuevo.";
        feedback1.style.color = "red";
    }
}


function checkAnswer2() {
    // Variantes válidas para la respuesta 2
    const validAnswers2 = [
        'escuela', 'la escuela','801', 'escuela 801', 'la escuela 801', 
        'la bafico', 'carmen f de bafico', 'la escuela carmen f de bafico', 
        'escuela carmen bafico', 'la escuela carmen bafico', 'la 801'
    ];
    const answer2 = document.getElementById('respuesta2').value.toLowerCase().trim();
    const feedback2 = document.getElementById('feedback2');

    if (validAnswers2.includes(answer2)) {
        feedback2.textContent = "¡Correcto! ¡Sigue iluminando caminos!";
        feedback2.style.color = "green";
        nextEnigma(3);
    } else {
        feedback2.textContent = "¡Ups! Intenta de nuevo.";
        feedback2.style.color = "red";
    }
}

function checkAnswer3() {
    // Variantes válidas para la respuesta 3
    const validAnswers3 = ['50', 'cincuenta'];
    const answer3 = document.getElementById('respuesta3').value.trim();
    const feedback3 = document.getElementById('feedback3');

    if (validAnswers3.includes(answer3)) {
        feedback3.textContent = "¡Correcto! ¡El mejor año!";
        feedback3.style.color = "green";
        nextEnigma(4);
    } else {
        feedback3.textContent = "¡Ups! Intenta de nuevo.";
        feedback3.style.color = "red";
    }
}

function checkAnswer4() {
    // Variantes válidas para la respuesta 4
    const validAnswers4 = ['erica', 'erica martinez'];
    const answer4 = document.getElementById('respuesta4').value.trim();
    const feedback4 = document.getElementById('feedback4');

    if (validAnswers4.includes(answer4.toLowerCase())) {  // Convertir a minúsculas antes de verificar
        feedback4.textContent = "¡Correcto! ¡Ah belleza!";
        feedback4.style.color = "green";
        showFinalMessage();
    } else {
        feedback4.textContent = "¡Ups! Intenta de nuevo.";
        feedback4.style.color = "red";
    }
}

function nextEnigma(num) {
    document.getElementById(`enigma${num}`).style.display = 'block';
}

function showFinalMessage() {
    // Mostrar el mensaje final con líneas separadas
    document.getElementById('regalo').style.display = 'block';
    document.getElementById('final-message').innerHTML = "<span>¡Felicidades Erica!</span>";
}

function verRegalo() {
    // Redirigir a una nueva página con el haiku
    window.location.href = "haiku.html";
}
