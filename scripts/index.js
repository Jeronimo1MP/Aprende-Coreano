const textArray = ["안녕하세요! Bienvenido a tu sitio de coreano", "Aprende coreano desde cero"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const container = document.getElementById("typing");

function typeEffect() {
    let currentText = textArray[textIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    container.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2500); // Espera antes de borrar
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 1000);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : speed);
    }
}

typeEffect();