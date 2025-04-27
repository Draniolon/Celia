// Traduction en anglais "en dur" de tout le site
// Ajoute ce script dans index.html juste avant </body>

const translationsList = [
  { key: "key_1", fr: "Exercice de boucle d’animation 2D afin de comprendre les principes d’animation réalisé sur Toon Boom Harmony.", en: "2D animation loop exercise to understand animation principles, made on Toon Boom Harmony." },
  { key: "key_2", fr: "Exercice d’animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe réalisé sur Toon Boom Harmony.", en: "2D animation exercise applying acquired knowledge to a more complex creature, made on Toon Boom Harmony." },
  { key: "key_3", fr: "Essai d'animation 2D courte pour essayer un style graphique plus souple sur Krita.", en: "Short 2D animation test to try a more flexible graphic style on Krita." },
  { key: "key_4", fr: "Composition originale inspiree par les derniers flocons de 2024, qui s'inscrit dans un univers d'infiltration sous tension. La progression de la musique accompagne l'avancee hypothétique d'un protagoniste indefini a travers a dedale d'obstacles et de gardes, pour une raison qu'il ne tient qu'a vous de definir.", en: "Original composition inspired by the last snowflakes of 2024, set in a tense infiltration universe. The music progression accompanies the hypothetical journey of an undefined protagonist through a maze of obstacles and guards, for a reason you are free to define." },
  { key: "key_5", fr: "Experimentation musicale afin de prendre en main les outils de BandLab, notamment les effets et instruments, les multiples pistes pour creer un effet de choeurs en canon et la gestion des niveaux a travers une melodie inspiree sur le moment.", en: "Musical experimentation to get familiar with BandLab tools, especially effects and instruments, multiple tracks to create a canon choir effect and level management through an inspired melody." },
  { key: "key_6", fr: "Toute premiere creation musicale et composition realisee sur BandLab. Le theme quelque peu chaotique est le fruit d'un essai a tous les niveaux.", en: "First ever musical creation and composition made on BandLab. The somewhat chaotic theme is the result of an experiment at all levels." },
  { key: "key_7", fr: "Premier projet a la main pour apprendre les points les plus frequemment utilises en couture. Dimensions : 10x10 cm.", en: "First hand-sewing project to learn the most frequently used stitches. Size: 10x10 cm." },
  { key: "key_8", fr: "Peluche de crabe de 30 cm de large, concu a partir d'un patron pre-existant, pour mettre en application les connaissances acquises a l'aide du coussin et me mettre au defi. Initiation a la broderie pour les details (yeux, bouches, message sur le torse) et confrontation a de nouveaux tissus.", en: "30cm-wide crab plush, made from a pre-existing pattern, to apply the knowledge acquired with the cushion and challenge myself. Introduction to embroidery for details (eyes, mouths, message on the chest) and trying new fabrics." },
  { key: "key_9", fr: "Peluche de colibri de 15 cm, concu a partir d'un patron original afin d'essayer les tissus que je prevoyais d'utiliser pour le projet suivant. Apprentissage de nouveaux points, d'erreur a ne pas commettre et d'autres essais plus ou moins concluant concernant la taille minimal des pieces a realiser, comme pour le bec par exemple, sans compromettre le tissu.", en: "15cm hummingbird plush, made from an original pattern to try fabrics planned for the next project. Learning new stitches, mistakes to avoid, and other more or less successful attempts regarding the minimum size of pieces to make, such as the beak, without damaging the fabric." },
  { key: "key_10", fr: "Dessins divers associant deux ou trois pokemon afin d'en faire une fusion aussi egale que possible, dans leurs attributs respectifs et le melange des couleurs de chacun.", en: "Various drawings combining two or three Pokémon to create a fusion as balanced as possible, in their respective attributes and color blending." },
  { key: "key_11", fr: "Projet d'art symbolique rassemblant differents elements associes a la vie et la mort, en une composition unique.", en: "Symbolic art project bringing together different elements associated with life and death, in a unique composition." },
  { key: "key_12", fr: "Rassembler en une image tout ce qui nous represente, en s'appuyant sur des questions comme : \"Si j'etais une plante, je serais quoi ?\", le tout au sein d'une composition realisee avec Photoshop.", en: "A symbolic drawing that brings together everything that represents us, based on personal questions, in a unique composition made with Photoshop." },
  { key: "key_13", fr: "Histoire melant deux temps de recit. D'un cote, nous explorons la creation du monde selon Jeremy Drava, a travers des figures emblematiques de la serie Zelda delaissée par les jeux, afin d'expliquer la chronologie sous le prisme de ces personnages oublies. Dans un second temps, on accompagne ce meme Jeremy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l'univers et celle de sa hierarchie, alors qu'il est nomme co-auteur pour le scenario du jeu \"Zelda : Tears of the Kingdom\".", en: "Story mixing two timelines. On one side, we explore the creation of the world according to Jeremy Drava, through emblematic figures from the Zelda series left out by the games, to explain the chronology through the lens of these forgotten characters. On the other, we follow Jeremy in his daily life at Nintendo, struggling between his personal vision of the universe and that of his hierarchy, as he is appointed co-author for the scenario of 'Zelda: Tears of the Kingdom'." },
  { key: "key_14", fr: "Ce projet est ne dix ans plus tot. C'est un univers riche et detaille, allant de la creation a la destruction de ce lieu chimerique. Trois histoires distinctes sont prevues pour explorer les differentes epoques qui ont marque ce monde, en plus d'autres nouvelles et documents complementaires, tous en preparation. A l'heure actuelle, seule une poignee de personnages ont ete rendu public, afin de preserver toute influence exterieure sur la trame narrative prevue pour la trilogie principale.", en: "This project was born ten years earlier. It is a rich and detailed universe, from the creation to the destruction of this chimerical place. Three distinct stories are planned to explore the different eras that marked this world, plus other short stories and complementary documents, all in preparation. Currently, only a handful of characters have been made public, to preserve any outside influence on the planned narrative for the main trilogy." },
  { key: "key_15", fr: "Exploration de la question du \"bon dresseur\" a l'aide d'un recit choral qui retrace l'histoire des jeux \"Pokemon Noir et Blanc\", si notre personnage pouvait reellement agir d'une maniere moins rigide que celle dictee par les jeux. Sous la forme d'une enquete menee par Beladonis apres l'effondrement du Palais de N, ce recit a pour but de clarifier la psychologie des differents personnages presentes dans le recit d'une maniere detaillee et introspective, au sein d'une histoire baignee de mysteres.", en: "Exploring the question of the 'good trainer' through a choral narrative that retraces the story of the games 'Pokémon Black and White', if our character could really act less rigidly than dictated by the games. As an investigation led by Beladonis after the collapse of N’s Castle, this story aims to clarify the psychology of the different characters in a detailed and introspective way, in a mystery-filled story." },
  { key: "key_16", fr: "Petite nouvelle parodique ecrite d'une traite a propos d'une journee typique d'un certain Murphy, charge de surveiller et restreindre les conversations problematique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arreter. Membre de la brigade de la preservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de differents personnages hauts en couleurs qui lui menent la vie dure, au sein d'une routine qu'il subit bien malgre lui.", en: "Short parody written in one go about a typical day of a certain Murphy, in charge of monitoring and restricting problematic conversations of suspicious people, to gather enough evidence to arrest them. Member of the insect preservation brigade, Murphy is an agent living in a mansion with various colorful characters who make his life difficult, in a routine he endures despite himself." },
  { key: "key_17", fr: "Illustration sur Krita pour les versions numerique, reliee et brochee du livre de Luny Asthiers.", en: "Illustration on Krita for the digital, hardcover and paperback versions of Luny Asthiers’ book." },
  { key: "key_18", fr: "Mise en page sur Canva d'une couverture incluant un phoenix, ainsi que du texte qui peut etre remplace aisement pour un vrai titre et un nom d'auteur.", en: "Layout on Canva of a cover including a phoenix, as well as text that can be easily replaced for a real title and author name." },
  { key: "key_19", fr: "Commande realisee sur Krita a la demande d'une cliente, incluant quatre personnages et un decor simple.", en: "Commission made on Krita for a client, including four characters and a simple background." },
  { key: "key_20", fr: "Montage realise sur Photoshop pour Luny Asthiers.", en: "Montage made on Photoshop for Luny Asthiers." },
  { key: "key_21", fr: "Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers. Cette creation est anterieure a mes etudes en graphisme.", en: "Design of Aster (the fox) and its placement on Krita according to Luny Asthiers’ requests. This creation predates my graphic design studies." },
  { key: "key_22", fr: "Communication illustree pour l'occasion de la sortie de Wandel en octobre 2024.", en: "Illustrated communication for the release of Wandel in October 2024." },
  { key: "key_23", fr: "Mise en avant d'une citation de Hamlet avec des visuels et d'une mise en page attirante sur Canva.", en: "Highlighting a Hamlet quote with visuals and an attractive layout on Canva." },
  { key: "key_24", fr: "Mise en avant d'une citation de Harry Potter a l'ecole des sorciers et avec une mise en page et des visuels parlants sur Canva.", en: "Highlighting a quote from Harry Potter and the Philosopher’s Stone with a compelling layout and visuals on Canva." },
  { key: "key_25", fr: "Cadeau de depart pour la Mairie de Montigny-le-Bretonneux afin de pallier a la meconnaissance parfois des stagiaires qui sont places devant le \"Guide Pratique de la Ville\" sans connaissance prealable du logiciel InDesign. Prise d'initiative pour combler un besoin utile a la bonne continuation du projet annuel dans de bonnes conditions.", en: "Farewell gift for the Montigny-le-Bretonneux City Hall to address the lack of knowledge sometimes faced by interns who are given the 'City Practical Guide' without prior knowledge of InDesign. Initiative to fill a useful need for the smooth continuation of the annual project in good conditions." },
  { key: "key_26", fr: "Cadeau de depart pour la Mairie de Montigny-le-Bretonneux afin de pallier a la meconnaissance parfois des stagiaires qui sont places devant le \"Guide Pratique de la Ville\" sans connaissance prealable du logiciel InDesign. Prise d'initiative pour combler un besoin utile a la bonne continuation du projet annuel dans de bonnes conditions.", en: "Farewell gift for the Montigny-le-Bretonneux City Hall to address the lack of knowledge sometimes faced by interns who are given the \"City Practical Guide\" without prior knowledge of InDesign. Initiative to fill a useful need for the smooth continuation of the annual project in good conditions." },
  { key: "key_27", fr: "CÉLIA PÉTILLION", en: "CELIA PETILLION" },
  { key: "key_28", fr: "Edition", en: "Editorial Assistant" },
  { key: "key_29", fr: "Graphiste", en: "Graphic Designer" },
  { key: "key_30", fr: "Curriculum Vitae", en: "Curriculum Vitae" },
  { key: "key_31", fr: "Portfolio", en: "Portfolio" },
  { key: "key_32", fr: "LinkedIn", en: "LinkedIn" },
  { key: "key_33", fr: "Animée depuis toujours par une passion pour le dessin et la littérature, je suis à la recherche d'une alternance d'une durée d’un an, au rythme de 3 semaines en entreprise et 1 semaine à l'école.", en: "Driven by a lifelong passion for drawing and literature, I am seeking a one-year apprenticeship with a schedule of 3 weeks in a company and 1 week at school." },
  { key: "key_34", fr: "LOGICIELS", en: "SOFTWARE" },
  { key: "key_35", fr: "COMPÉTENCES", en: "SKILLS" },
  { key: "key_36", fr: "Rigueur", en: "Precision" },
  { key: "key_37", fr: "Autonomie", en: "Autonomy" },
  { key: "key_38", fr: "Travail en équipe", en: "Teamwork" },
  { key: "key_39", fr: "Anglais niveau B2", en: "English level B2" },
  { key: "key_40", fr: "Force de proposition", en: "Initiative" },
  { key: "key_41", fr: "Gestion du temps", en: "Time management" },
  { key: "key_42", fr: "Créativité", en: "Creativity" },
  { key: "key_43", fr: "IA générative", en: "Generative AI" },
  { key: "key_44", fr: "Communication", en: "Communication" },
  { key: "key_45", fr: "Organisation", en: "Organization" },
  { key: "key_46", fr: "Adaptabilité", en: "Adaptability" },
  { key: "key_47", fr: "Résolution de problèmes", en: "Problem solving" },
  { key: "key_48", fr: "FORMATIONS", en: "EDUCATION" },
  { key: "key_49", fr: "Lycée La Bruyère", en: "La Bruyère High School" },
  { key: "key_50", fr: "Bac Littéraire", en: "Literary Baccalaureate" },
  { key: "key_51", fr: "Option Arts Plastiques", en: "Visual Arts Option" },
  { key: "key_52", fr: "Créapole", en: "Creapole" },
  { key: "key_53", fr: "Bachelor création et design", en: "Bachelor in Creation and Design" },
  { key: "key_54", fr: "CNED", en: "CNED" },
  { key: "key_55", fr: "Formation d’écrivain public", en: "Public Writer Training" },
  { key: "key_56", fr: "Garti", en: "Garti" },
  { key: "key_57", fr: "École supérieure de graphisme", en: "Higher School of Graphic Design" },
  { key: "key_58", fr: "RECOMMANDATIONS", en: "RECOMMENDATIONS" },
  { key: "key_59", fr: "Cliente freelance", en: "Freelance client" },
  { key: "key_60", fr: "Stage", en: "Internship" },
  { key: "key_61", fr: "Mes recommandations", en: "RECOMMENDATIONS" },
  { key: "key_62", fr: "CONTACTS", en: "CONTACTS" },
  { key: "key_63", fr: "Email", en: "Email" },
  { key: "key_64", fr: "Téléphone", en: "Phone" },
  { key: "key_65", fr: "Voir le profil ↗", en: "View profile ↗" },
  { key: "key_66", fr: "Projets Professionnels", en: "Professional Projects" },
  { key: "key_67", fr: "Projets Scolaires", en: "School Projects" },
  { key: "key_68", fr: "Projets Personnels", en: "Personal Projects" },
  { key: "key_69", fr: "Projet démarré en 2025 et mis à jour régulièrement.", en: "Project started in 2025 and updated regularly." },
  { key: "key_70", fr: "© Célia Pétillion, tous droits réservés. Design et contenu protégés.", en: "© Célia Petillion, all rights reserved. Design and content protected." },
  { key: "key_71", fr: "Luny Asthiers", en: "Luny Asthiers" },
  { key: "key_72", fr: "Mairie de Montigny", en: "Montigny-le-Bretonneux" },
  { key: "key_73", fr: "Télécharger", en: "Download" },
  { key: "key_74", fr: "LinkedIn", en: "LinkedIn" }
];

// Stockage des textes originaux
const originalTexts = [];
const originalAlts = [];

// Fonction utilitaire pour récupérer la traduction d'une clé
function getTranslation(key, lang = 'fr') {
    const entry = translationsList.find(t => t.key === key);
    return entry ? entry[lang] : key;
}

// Fonction principale d'application des traductions
function applyTranslations(lang = 'fr') {
    // Traduction des éléments avec un id key_xx
    translationsList.forEach(({key}) => {
        const elements = document.querySelectorAll(`[id='${key}']`);
        elements.forEach(el => {
            el.textContent = getTranslation(key, lang);
            // Rendre visible l'élément (block pour titres, inline pour span, etc.)
            if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'P' || el.tagName === 'DIV') {
                el.style.display = 'block';
            } else {
                el.style.display = '';
            }
        });
    });
    // Pour compatibilité : ancienne méthode sur le reste du DOM
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        if (node.parentNode && ['SCRIPT', 'STYLE'].includes(node.parentNode.tagName)) continue;
        const keyMatch = node.nodeValue && node.nodeValue.trim().match(/^key_\d+$/);
        if (keyMatch) {
            node.nodeValue = getTranslation(keyMatch[0], lang);
        }
    }
    // Pour les alt d'images
    document.querySelectorAll('img[alt]').forEach((img) => {
        const keyMatch = img.alt && img.alt.trim().match(/^key_\d+$/);
        if (keyMatch) {
            img.alt = getTranslation(keyMatch[0], lang);
        }
    });
}


// Au chargement de la page, on applique la traduction française par défaut
window.addEventListener('DOMContentLoaded', () => {
    applyTranslations('fr');
    // Gestion des drapeaux
    document.getElementById('flag-fr')?.addEventListener('click', () => applyTranslations('fr'));
    document.getElementById('flag-en')?.addEventListener('click', () => applyTranslations('en'));
});

function normalizeText(str) {
    if (!str) return '';
    // Remplace apostrophes courbes, guillemets, accents, entités, etc.
    return str
        .replace(/[’‘`´]/g, "'")
        .replace(/[“”«»]/g, '"')
        .replace(/é|è|ê|ë/g, 'e')
        .replace(/à|â|ä/g, 'a')
        .replace(/î|ï/g, 'i')
        .replace(/ô|ö/g, 'o')
        .replace(/ù|û|ü/g, 'u')
        .replace(/ç/g, 'c')
        .replace(/œ/g, 'oe')
        .replace(/æ/g, 'ae')
        .replace(/–|—/g, '-')
        .replace(/…/g, '...')
        .replace(/&nbsp;/g, ' ')
        .replace(/\u0027/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

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
            const txt = normalizeText(node.nodeValue);
            // Recherche stricte avec normalisation
            if (t[txt]) {
                node.nodeValue = t[txt];
            } else {
                // Recherche plus souple : on cherche si le texte du noeud contient une clé de traduction (utile pour la bio sur plusieurs lignes)
                for (const key in t) {
                    const keyNormalized = normalizeText(key);
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