// Génération automatique du contenu des sections projets à partir des assets
// Ce script suppose que les assets sont organisés par dossier (pro, perso, ecole)
// et que chaque sous-dossier ou fichier représente un projet ou une ressource.
// Les images et pdf sont pris en compte, les vidéos/audio/odt sont listés comme liens.

const projectsData = {
    pro: [
        {
            title: "Illustration rémunérée dragons Fourth Wings",
            folder: "assets/projets/pro/Illustration rémunérée dragons Fourth Wings",
            files: [
                "Dragon.png",
                "Illu cadeau - fourth wing - rendu final.pdf",
                "Illu cadeau - fourth wing - rendu final.png",
                "Illu cadeau - fourth wing base aplats.png",
                "Illu cadeau - fourth wing clean 2.png",
                "Illu cadeau - fourth wing clean.png",
                "Illu cadeau - fourth wing clean3.png",
                "Illu cadeau - fourth wing.png"
            ]
        },
        {
            title: "Illustrations rémunérées pour Luny",
            folder: "assets/projets/pro/Illustrations rémunérées pour Luny",
            files: ["Illu renard essai.png"]
        },
        {
            title: "Logos pour Luny",
            folder: "assets/projets/pro/Logos pour Luny",
            files: ["Logo pour Luny.png"]
        },
        {
            title: "Petit guide du stagiaire",
            folder: "assets/projets/pro/Petit guide du stagiaire",
            files: ["Guides pratiques.png", "Le petit guide du stagiaire - complet.pdf"]
        },
        {
            title: "Semaine stage Luny",
            folder: "assets/projets/pro/Semaine stage Luny",
            files: [
                "Images.png", "Images2.png", "Images3.png", "Images4.png", "Images5.png"
            ]
        }
    ],
    perso: [
        {
            title: "Animation-Vidéo",
            folder: "assets/projets/perso/Animation-Vidéo",
            files: ["Balle_rebondissante_2.gif", "Test anim.gif", "dragon_animation_base_2.gif", "draniolon_run_17.gif"]
        },
        {
            title: "Couture",
            folder: "assets/projets/perso/Couture",
            files: ["Créations Peluches.pdf", "Créations Peluches.png", "Tobias2.png"]
        }
    ],
    ecole: [
        {
            title: "Créapole",
            folder: "assets/projets/ecole/Créapole",
            files: ["2CAJV_Petillion_Celia_Carte_plan_dessus1.png", "2CAJV_Petillion_Celia_Maison_Ab_rendu.png", "2CAJV_Petillion_Celia_Moodboard_Carte.png"]
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
