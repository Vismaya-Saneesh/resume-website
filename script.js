document.addEventListener('DOMContentLoaded', () => 
    {

    const phrases = [
        "Aspiring Data Scientist.",
        "AI & DS Student.",
        "Web Developer."
    ];
    const typedEl = document.getElementById('typing-text');

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (deleting) {
            typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        typedEl.classList.add('cursor');

        let typingSpeed = deleting ? 35 : 70;

        if (!deleting && charIndex === currentPhrase.length) {
            typingSpeed = 1300;
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        modeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
    });
function showSection() {
        const hash = window.location.hash.slice(1) || 'about';
        document.querySelectorAll('main section').forEach(section => {
            section.classList.toggle('active', section.id === hash);
        });
    }

    window.addEventListener('hashchange', showSection);
    showSection();
});
