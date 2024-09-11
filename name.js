function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}
const typingEffect = document.getElementById('live-name');
const texts = ["Welcome to My Portfolio","Hello, I'm Sujeet Kumar"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const pauseTime = 2000; // Time to pause after completing a text

function typeText() {
    if (textIndex >= texts.length) textIndex = 0;
    const currentText = texts[textIndex];
    if (charIndex < currentText.length && !isDeleting) {
        typingEffect.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else if (charIndex === currentText.length && !isDeleting) {
        isDeleting = true;
        setTimeout(typeText, pauseTime);
    } else if (charIndex > 0 && isDeleting) {
        typingEffect.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, deletingSpeed);
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        textIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

typeText();