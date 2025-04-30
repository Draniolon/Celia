// Gestion des sections de projets
const projectCards = document.querySelectorAll('.project-card');
const projectDetails = document.querySelectorAll('.project-details');
let currentProject = null;

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectType = card.dataset.project;
        const detailsSection = document.getElementById(`${projectType}-details`);

        if (currentProject === detailsSection) {
            // Si on clique sur le même projet, on le cache
            detailsSection.classList.add('hidden');
            currentProject = null;
        } else {
            // Cacher la section précédente si elle existe
            if (currentProject) {
                currentProject.classList.add('hidden');
            }
            // Afficher la nouvelle section
            detailsSection.classList.remove('hidden');
            currentProject = detailsSection;
            // Scroll vers la section
            detailsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});