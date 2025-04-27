// Traduction en anglais "en dur" de tout le site
// Ajoute ce script dans index.html juste avant </body>

const translations = {
    fr: {
        // Ajoute ici les clés/français si besoin
    },
    en: {
        'CÉLIA PÉTILLION': 'CELIA PETILLION',
        'Graphiste': 'Graphic Designer',
        'Télécharger mon CV': 'Download my CV',
        'Portfolio': 'Portfolio',
        'LinkedIn': 'LinkedIn',
        'Animée depuis toujours par une passion pour le dessin et la littérature, je suis à la recherche d\'une alternance d\'une durée d’un an, au rythme d’1 semaine en formation et de 3 semaines en entreprise.':
          'Creative and passionate about both drawing and literature, I am currently seeking a one-year apprenticeship in graphic design. My ideal rhythm is 1 week in school and 3 weeks in a company, where I can contribute my artistic skills and learn from real-world experience.',
        'LOGICIELS': 'SOFTWARE',
        'COMPÉTENCES': 'SKILLS',
        'Rigueur': 'Precision',
        'Autonomie': 'Autonomy',
        'Travail en équipe': 'Teamwork',
        'Anglais niveau B2': 'English level B2',
        'Force de proposition': 'Initiative',
        'Gestion du temps': 'Time management',
        'Créativité': 'Creativity',
        'IA générative': 'Generative AI',
        'Communication': 'Communication',
        'Organisation': 'Organization',
        'Adaptabilité': 'Adaptability',
        'Résolution de problèmes': 'Problem solving',
        'FORMATIONS': 'EDUCATION',
        'Lycée La Bruyère': 'La Bruyère High School',
        'Bac Littéraire': 'Literary Baccalaureate',
        'Option Arts Plastiques': 'Visual Arts Option',
        'Créapole': 'Creapole',
        'Bachelor création et design': 'Bachelor in Creation and Design',
        'CNED': 'CNED',
        'Formation d’écrivain public': 'Public Writer Training',
        'Garti': 'Garti',
        'École supérieure de graphisme': 'School of Graphic Design',
        'RECOMMANDATIONS': 'RECOMMENDATIONS',
        'Cliente freelance': 'Freelance client',
        'Stage': 'Internship',
        'Mes recommandations': 'RECOMMENDATIONS',
        'CONTACTS': 'CONTACTS',
        'Email': 'Email',
        'Téléphone': 'Phone',
        'Voir le profil ↗': 'View profile ↗',
        'Projets Professionnels': 'Professional Projects',
        'Projets Scolaires': 'School Projects',
        'Projets Personnels': 'Personal Projects',
        'Projet démarré en 2025 et mis à jour régulièrement.': 'Project started in 2025 and updated regularly.',
        '© Célia Pétillion, tous droits réservés. Design et contenu protégés.': '© Célia Petillion, all rights reserved. Design and content protected.'
    }
};

// Stockage des textes originaux
const originalTexts = [];
const originalAlts = [];

// Initialisation des textes originaux au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    // Stocke tous les textes
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;
    while ((n = walker.nextNode())) {
        originalTexts.push(n.nodeValue);
    }
    // Stocke tous les alt d'images
    document.querySelectorAll('img[alt]').forEach((img) => {
        originalAlts.push(img.alt);
    });
});

function translateTo(lang = 'en') {
    const t = translations[lang];
    if (!t) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    let i = 0;
    if (lang === 'en') {
        // Toujours stocker les textes originaux si non déjà fait
        if (originalTexts.length === 0) {
            let n;
            while ((n = walker.nextNode())) {
                originalTexts.push(n.nodeValue);
            }
        } else {
            // Réinitialise le walker
            walker.currentNode = document.body;
        }
        // Toujours stocker les alt originaux si non déjà fait
        if (originalAlts.length === 0) {
            document.querySelectorAll('img[alt]').forEach((img) => {
                originalAlts.push(img.alt);
            });
        }
        // Applique la traduction
        while ((node = walker.nextNode())) {
            const txt = node.nodeValue.trim().replace(/\s+/g, ' ');
            // Recherche stricte
            if (t[txt]) {
                node.nodeValue = t[txt];
            } else {
                // Recherche plus souple : on cherche si le texte du noeud contient une clé de traduction (utile pour la bio sur plusieurs lignes)
                for (const key in t) {
                    const keyNormalized = key.replace(/\s+/g, ' ');
                    if (txt.includes(keyNormalized)) {
                        node.nodeValue = node.nodeValue.replace(key, t[key]);
                        break;
                    }
                }
            }
            i++;
        }
        // Attributs alt des images
        document.querySelectorAll('img[alt]').forEach((img, idx) => {
            if (originalAlts.length === 0) originalAlts.push(img.alt);
            if (t[img.alt]) img.alt = t[img.alt];
        });
    } else if (lang === 'fr') {
        // Restaure les textes originaux
        if (originalTexts.length > 0) {
            walker.currentNode = document.body;
            let j = 0;
            while ((node = walker.nextNode())) {
                node.nodeValue = originalTexts[j++] || node.nodeValue;
            }
        }
        // Restaure les alt originaux
        document.querySelectorAll('img[alt]').forEach((img, idx) => {
            if (originalAlts[idx]) img.alt = originalAlts[idx];
        });
    }
}