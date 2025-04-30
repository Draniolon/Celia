const slides = document.querySelectorAll('#carousel .slide');
        const dotsContainer = document.getElementById('carousel-dots');
        let index = 0;

        // Génère les dots dynamiquement
        function renderDots() {
            dotsContainer.innerHTML = '';
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = `w-4 h-4 rounded-full border border-white bg-white/60 transition-colors duration-200`;
                dot.setAttribute('data-index', i);
                dot.addEventListener('click', () => showSlide(i));
                dotsContainer.appendChild(dot);
            });
            // Forcer le premier dot à être blanc
            if (dotsContainer.children.length > 0) {
                dotsContainer.children[0].classList.add('bg-white');
                dotsContainer.children[0].classList.remove('bg-white/60');
            }
        }

        // Affiche uniquement la première slide au chargement
        slides.forEach((s, idx) => s.classList.toggle('active', idx === 0));
        renderDots();

        function showSlide(i) {
            slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
            Array.from(dotsContainer.children).forEach((d, idx) => {
                d.classList.toggle('bg-white', idx === i);
                d.classList.toggle('bg-white/60', idx !== i);
            });
            index = i;
        }
        document.getElementById('next').addEventListener('click', () => showSlide((index + 1) % slides.length));
        document.getElementById('prev').addEventListener('click', () => showSlide((index - 1 + slides.length) % slides.length));