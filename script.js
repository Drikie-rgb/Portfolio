console.log("Portfolio Online 🟢");

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Reveal cards on scroll
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

// Typewriter effect for hero text
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
const originalText = "SLOOTE DERYCK RAOËL";
heroText.innerHTML = "";
typeWriter(heroText, originalText, 120);

// Dark/Light mode toggle
const toggle = document.createElement("button");
toggle.textContent = "Dark / Light️";
toggle.className = "btn";
toggle.style.position = "fixed";
toggle.style.top = "20px";
toggle.style.right = "20px";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
