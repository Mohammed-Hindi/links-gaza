window.addEventListener("DOMContentLoaded", () => {
    const welcome = document.getElementById("welcomeScreen");
    const text = document.getElementById("welcomeText");
    const sub = document.getElementById("welcomeSub");

    text.classList.add("show");
    sub.classList.add("show");

    // السماح للمستخدم بالنقر لتخطي الترحيب
    welcome.addEventListener("click", hideWelcome);

    // إخفاء تلقائي بعد 3 ثواني
    setTimeout(hideWelcome, 2000);

    function hideWelcome() {
        welcome.style.opacity = 0;
        welcome.style.pointerEvents = "none"; // إزالة التفاعل فور الاختفاء
        setTimeout(() => {
            welcome.style.display = "none"; // السماح بالوصول الكامل للمحتوى
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
// نختار كل الكروت
const cards = document.querySelectorAll('.card');

// لكل كارت نعمل وميض خفيف بشكل مستمر
cards.forEach((card, index) => {
    let opacity = 1;
    let increasing = false;

    setInterval(() => {
        if (increasing) {
            opacity += 0.005; // زيادة بسيطة
            if (opacity >= 1) increasing = false;
        } else {
            opacity -= 0.005; // تقليل بسيط
            if (opacity <= 0.92) increasing = true;
        }
        card.style.opacity = opacity;
    }, 20 + index * 5); // اختلاف بسيط لتزامن طبيعي بين الكروت
});
