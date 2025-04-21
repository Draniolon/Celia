// Version 100% statique pour fonctionnement local sans serveur
const projectsData = {
    pro: [
        {
            title: "Illustration rémunérée dragons Fourth Wings",
            folder: "assets/projets/pro/Illustration rémunérée dragons Fourth Wings",
            files: ["dragon1.png", "dragon2.jpg"]
        },
        {
            title: "Illustrations rémunérées pour Luny",
            folder: "assets/projets/pro/Illustrations rémunérées pour Luny",
            files: ["illu1.png", "illu2.jpg"]
        },
        {
            title: "Logos pour Luny",
            folder: "assets/projets/pro/Logos pour Luny",
            files: ["logo1.svg", "logo2.png"]
        },
        {
            title: "Petit guide du stagiaire",
            folder: "assets/projets/pro/Petit guide du stagiaire",
            files: ["guide1.pdf"]
        },
        {
            title: "Semaine stage Luny",
            folder: "assets/projets/pro/Semaine stage Luny",
            files: ["Images.png", "Images2.png", "Images3.png", "Images4.png", "Images5.png"]
        }
    ],
    perso: [
        {
            title: "Animation-Vidéo",
            folder: "assets/projets/perso/Animation-Vidéo",
            files: ["video1.mp4"]
        },
        {
            title: "Composition musicale",
            folder: "assets/projets/perso/Composition musicale",
            files: ["musique1.mp3"]
        },
        {
            title: "Couture",
            folder: "assets/projets/perso/Couture",
            files: ["robe.jpg"]
        },
        {
            title: "Dessins - Décors",
            folder: "assets/projets/perso/Dessins/Décors",
            files: ["deco1.jpg", "deco2.jpg"]
        }
    ],
    ecole: [
        {
            title: "Projet Brainshift AI",
            folder: "assets/projets/ecole/Projet Brainshift AI",
            files: ["ai1.png", "ai2.png"]
        }
    ]
};

function createProjectCard(project) {
    let html = `<div class="project-card bg-white/10 rounded-lg shadow-lg p-4 flex flex-col gap-4">`;
    html += `<h4 class="font-bold text-xl text-white mb-2 text-center">${project.title}</h4>`;
    html += `<div class="flex flex-wrap gap-2">`;
    for (const file of project.files) {
        const ext = file.split('.').pop().toLowerCase();
        const isImg = ["png","jpg","jpeg","gif","webp"].includes(ext);
        const isPdf = ext === "pdf";
        if (isImg) {
            html += `<img src="${project.folder}/${file}" alt="${file}" class="max-h-40 rounded shadow border border-white/20" loading="lazy">`;
        } else if (isPdf) {
            html += `<a href="${project.folder}/${file}" target="_blank" class="text-white underline hover:text-[#2bb8b8]">${file.replace(/_/g, ' ')}</a>`;
        } else {
            html += `<a href="${project.folder}/${file}" target="_blank" class="text-white/80 text-xs underline">${file}</a>`;
        }
    }
    html += `</div></div>`;
    return html;
}

function renderProjectsSection(sectionId, projects) {
    const container = document.querySelector(`#${sectionId} .grid`);
    if (!container) return;
    container.innerHTML = projects.map(createProjectCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjectsSection('pro-details', projectsData.pro);
    renderProjectsSection('perso-details', projectsData.perso);
    renderProjectsSection('scolaire-details', projectsData.ecole);
});
