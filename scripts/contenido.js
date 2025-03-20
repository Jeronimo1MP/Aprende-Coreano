const audios = [
    "audios/adios.mp3", "audios/ㄱ.mp3", "audios/ㄹ.mp3", "audios/ㅅ.mp3", "audios/ㅊ.mp3", "audios/ㅍ.mp3",
    "audios/buenos dias.mp3", "audios/ㄴ.mp3", "audios/ㅁ.mp3", "audios/ㅇ.mp3", "audios/ㅋ.mp3", "audios/ㅎ.mp3",
    "audios/hola.mp3", "audios/ㄷ.mp3", "audios/ㅂ.mp3", "audios/ㅈ.mp3", "audios/ㅌ.mp3"
];

function xd() {
    audios.forEach(n => {
        n.play().catch(error => console.error("Error al reproducir:", error));
    });
}

function reproducir(numero) {
    let audio = new Audio(audios[numero]);
    audio.play();
}

let nuevoElemento = document.createElement("button");
nuevoElemento.textContent = "Hola, soy un nuevo elemento";
document.body.appendChild(nuevoElemento);

nuevoElemento.addEventListener("click", function() {
    reproducir(2);
});

