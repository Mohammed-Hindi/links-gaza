window.addEventListener("DOMContentLoaded", () => {
    const welcome = document.getElementById("welcomeScreen");
    const text = document.getElementById("welcomeText");
    const sub = document.getElementById("welcomeSub");

    text.classList.add("show");
    sub.classList.add("show");
    welcome.addEventListener("click", hideWelcome)
    setTimeout(hideWelcome, 2000);

    function hideWelcome() {
        welcome.style.opacity = 0;
        welcome.style.pointerEvents = "none"; 
        setTimeout(() => {
            welcome.style.display = "none"; 
        }, 500);
    }
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    let opacity = 1;
    let increasing = false;

    setInterval(() => {
        if (increasing) {
            opacity += 0.005; 
            if (opacity >= 1) increasing = false;
        } else {
            opacity -= 0.005; 
            if (opacity <= 0.92) increasing = true;
        }
        card.style.opacity = opacity;
    }, 20 + index * 5); 
});
