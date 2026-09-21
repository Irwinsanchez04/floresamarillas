// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres tú", time: 1 },
  { text: "Túruru", time: 4 },
  { text: "Eres tú", time: 8 },
  { text: "Mmm, oh, oh", time: 15 },
  { text: "La que me fascina", time: 33 },
  { text: "La que me domina", time: 37 },
  { text: "Mi mente se alinea cuando caminas", time: 40 },
  { text: "Eres tú la calma y la ruina", time: 45 },
  { text: "La voz que suena cuando el alma suspira", time: 52 },
  { text: "Tus ojos son fuego en la neblina", time: 62 },
  { text: "Tu risa me quema, me ilumina", time: 68.5 },
  { text: "Y si no estás, el mundo gira", time: 72 },
  { text: "Pero sin rumbo, sin salida", time: 74 },
  { text: "Eres tan perfecta", time: 109 },
  { text: "Tan sincera, tan real, que me desespera", time: 113 },
  { text: "Eres la razón por la que aún espero", time: 118 },
  { text: "La voz que suena cuando muero", time: 122 },
  { text: "Eres tú la que me enciende por dentro", time: 125 },
  { text: "Eres tú mi mejor pensamiento", time: 133 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );
  
  if (currentLine) {
    document.getElementById("lyrics").innerText = currentLine.text;
  }
}

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);