function renderSectionStructure(sectionKey) {
    // Vide tous les containers
    document.querySelectorAll('.section-structure').forEach(div => div.innerHTML = '');
    const section = sectionData[sectionKey];
    if (!section) return;

    let html = '';
    let catIndex = 0;
    let categories = Object.keys(section.h2);
    
    categories.forEach((h2, idx) => {
        if (!section.h2[h2]) return;
        const h3s = section.h2[h2];
        html += `
        <h2 class="text-2xl font-bold text-white text-opacity-70 mb-4 text-center">${getTranslation(h2, currentLang)}</h2>
        `;
        h3s.forEach((h3, idx) => {
            // Supporte les deux formats : string ou objet
            let titre = h3.titre || h3;
            let sousTitre = getTranslation(h3.sousTitre, currentLang) || '';
            let image = h3.image || 'assets/images/profil/default.png'; // image par défaut
            const isEven = (catIndex + idx) % 2 === 0;
            let customClass = h3.customClass ? h3.customClass : '';
            if (isEven) {
                // Image à gauche, bloc à droite
                html += `
                <div class="trapeze-row">
                    <div class="trapeze-img img-left">
                        <img src="${image}" alt="Image projet ${titre}" style="width:100%;object-fit:cover;display:block;margin:auto;" class="${customClass}" />
                    </div>
                    <div class="trapeze-content">
                        <h3 class="text-lg font-semibold text-black mb-2 text-center">${getTranslation(titre, currentLang)}</h3>
<p class='text-sm text-gray-400 text-center mb-2'>${sousTitre}</p>
                    </div>
                </div>
                `;
            } else {
                // Bloc à gauche, image à droite
                html += `
                <div class="trapeze-row">
                    <div class="trapeze-content right">
                        <h3 class="text-lg font-semibold text-black mb-2 text-center">${getTranslation(titre, currentLang)}</h3>
<p class='text-sm text-gray-400 text-center mb-2'>${sousTitre}</p>
                    </div>
                    <div class="trapeze-img right">
                        <img src="${image}" alt="Image projet ${titre}" style="width:100%;object-fit:cover;display:block;margin:auto;" class="${customClass}" />
                    </div>
                </div>
                `;
            }
        });
        catIndex += h3s.length;
    });

    document.getElementById(`${sectionKey}-structure`).innerHTML = html;
}

// Ajoute l'écouteur sur les images de section (pro, perso, ecole)
document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', function (e) {
        const sectionKey = card.dataset.project;
        if (sectionData[sectionKey]) {
            renderSectionStructure(sectionKey);
        }
    });
});