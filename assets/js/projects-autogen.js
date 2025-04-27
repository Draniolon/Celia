// Structure dynamique avec catégories statiques et toggles interactifs

const categories = [
  {
    key: 'pro',
    title: 'Pro',
    image: 'assets/img/pro.png', // à remplacer par ta miniature
    subcategories: [
      {
        key: 'logos',
        title: 'Logos',
        image: 'assets/projets/pro/Logos/miniature.png', // à remplacer
        projects: [
          // Liste des projets/fichiers pour Logos
          'Logo pour Luny',
          'Logo pour Entreprise X',
        ]
      },
      {
        key: 'illustrations',
        title: 'Illustrations',
        image: 'assets/projets/pro/Illustrations/miniature.png', // à remplacer
        projects: [
          'Illustration rémunérée dragons Fourth Wings',
          'Illustrations rémunérées pour Luny',
        ]
      },
      {
        key: 'reseau',
        title: 'Réseau Sociaux',
        image: 'assets/projets/pro/Reseau_Sociaux/miniature.png',
        projects: [
          'Post Instagram',
          'Bannière Facebook',
        ]
      }
      // ... autres sous-catégories
    ]
  },
  // Ajoute ici les autres catégories (perso, ecole, etc.)
];

function renderCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';
  categories.forEach(cat => {
    // Catégorie principale (image + titre)
    const catDiv = document.createElement('div');
    catDiv.className = 'category-block flex flex-col items-center my-8';
    const img = document.createElement('img');
    img.src = cat.image;
    img.alt = cat.title;
    img.className = 'category-img cursor-pointer w-48 h-48 object-cover rounded-full shadow-lg mb-4';
    // Titre H1 (caché par défaut)
    const h1 = document.createElement('h1');
    h1.textContent = cat.title;
    h1.className = 'category-title text-4xl font-bold my-4 hidden';
    // Grille des bulles (cachée par défaut)
    const grid = document.createElement('div');
    grid.className = 'subcategory-grid grid grid-cols-2 md:grid-cols-3 gap-8 justify-center hidden';
    // Génère les bulles
    cat.subcategories.forEach(sub => {
      const bubble = document.createElement('div');
      bubble.className = 'subcategory-bubble flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gray-100 shadow-lg cursor-pointer transition hover:bg-blue-200';
      // H2 centré
      const h2 = document.createElement('h2');
      h2.textContent = sub.title;
      h2.className = 'text-xl font-semibold text-center';
      bubble.appendChild(h2);
      // Liste des projets (cachée par défaut)
      const projList = document.createElement('ul');
      projList.className = 'project-list mt-4 hidden';
      sub.projects.forEach(proj => {
        const li = document.createElement('li');
        li.textContent = proj;
        li.className = 'text-base text-gray-700 py-1';
        projList.appendChild(li);
      });
      bubble.appendChild(projList);
      // Toggle sur la bulle
      bubble.addEventListener('click', (e) => {
        e.stopPropagation();
        projList.classList.toggle('hidden');
      });
      grid.appendChild(bubble);
    });
    // Toggle sur l’image de catégorie
    img.addEventListener('click', () => {
      h1.classList.toggle('hidden');
      grid.classList.toggle('hidden');
    });
    catDiv.appendChild(img);
    catDiv.appendChild(h1);
    catDiv.appendChild(grid);
    container.appendChild(catDiv);
  });
}

document.addEventListener('DOMContentLoaded', renderCategories);
// Ajoute un div id="categories-container" dans ton HTML là où tu veux afficher les catégories

// Ici commence la déclaration de la structure principale
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

function createProjectCard(project, categoryLabel) {
    let html = `<span class="block text-xs text-[#2bb8b8] font-semibold mb-1 text-center">${categoryLabel}</span>`;
    html += `<div class="project-card bg-white/10 rounded-lg shadow-lg p-4 flex flex-col gap-4">`;
    html += `<h4 class="font-bold text-xl text-white mb-2 text-center">titre</h4>`;
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

function renderProjectsSection(sectionId, projects, categoryLabel = "") {
    const container = document.querySelector(`#${sectionId} .grid`);
    if (!container) return;
    container.innerHTML = projects.map(project => createProjectCard(project, categoryLabel)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjectsSection('pro-details', projectsData.pro, 'Projets Professionnels');
    renderProjectsSection('perso-details', projectsData.perso, 'Projets Personnels');
    renderProjectsSection('scolaire-details', projectsData.ecole, 'Projets Scolaires');
});
