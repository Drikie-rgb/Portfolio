console.log("Portfolio Online 🟢");

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
     });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

function typeWriter(element, text, speed = 100) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

const heroText = document.querySelector('.hero h1');
const originalText = "SLOOTE DERYCK RAOEL";
heroText.innerHTML = "";
typeWriter(heroText, originalText, 120);

