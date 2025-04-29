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
  { key: "key_11", fr: "Projet d’art symbolique rassemblant différents éléments associés à la vie et la mort, en une composition unique.", en: "Symbolic art project bringing together different elements associated with life and death, in a unique composition." },
  { key: "key_12", fr: "Rassembler en une image tout ce qui nous représente, en s’appuyant sur des questions comme : « Si j’étais une plante, je serais quoi ? », le tout au sein d’une composition réalisée avec Photoshop.", en: "Gather in one image everything that represents us, relying on questions like: 'If I were a plant, what would I be?', all within a composition made with Photoshop." },
  { key: "key_13", fr: "Exploration de la question du 'bon dresseur' à l’aide d’un récit choral qui retrace l’histoire des jeux 'Pokémon Noir et Blanc', si notre personnage pouvait réellement agir d’une manière moins rigide que celle dictée par les jeux. Sous la forme d’une enquête menée par Beladonis après l’effondrement du Palais de N, ce récit a pour but de clarifier la psychologie des différents personnages présentés dans le récit d’une manière détaillée et introspective, au sein d’une histoire baignée de mystères.", en: "Exploration of the 'good trainer' question through a choral story that retraces the history of the 'Pokémon Black and White' games, if our character could really act in a less rigid way than dictated by the games. In the form of an investigation led by Beladonis after the collapse of N's Castle, this story aims to clarify the psychology of the various characters presented in the narrative in a detailed and introspective manner, within a mystery-filled story." },
  { key: "key_14", fr: "Petite nouvelle parodique écrite d’une traite à propos d’une journée typique d’un certain Murphy, chargé de surveiller et restreindre les conversations problématique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arrêter. Membre de la brigade de la préservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de différents personnages hauts en couleurs qui lui mènent la vie dure, au sein d’une routine qu’il subit bien malgré lui.", en: "Short parodic story written in one go about a typical day of a certain Murphy, tasked with monitoring and restricting problematic conversations of suspicious people, in order to gather enough evidence to arrest them. Member of the insect preservation brigade, Murphy is an agent living in a mansion with various colorful characters who make his life difficult, within a routine he endures despite himself." },
  { key: "key_15", fr: "Histoire melant deux temps de recit. D'un cote, nous explorons la creation du monde selon Jeremy Drava, a travers des figures emblematiques de la serie Zelda delaissée par les jeux, afin d'expliquer la chronologie sous le prisme de ces personnages oublies. Dans un second temps, on accompagne ce meme Jeremy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l'univers et celle de sa hierarchie, alors qu'il est nomme co-auteur pour le scenario du jeu \"Zelda : Tears of the Kingdom\".", en: "Story mixing two timelines. On one side, we explore the creation of the world according to Jeremy Drava, through emblematic figures from the Zelda series left out by the games, to explain the chronology through the lens of these forgotten characters. On the other, we follow Jeremy in his daily life at Nintendo, struggling between his personal vision of the universe and that of his hierarchy, as he is appointed co-author for the scenario of 'Zelda: Tears of the Kingdom'." },
  { key: "key_16", fr: "Ce projet est ne dix ans plus tot. C'est un univers riche et detaille, allant de la creation a la destruction de ce lieu chimerique. Trois histoires distinctes sont prevues pour explorer les differentes epoques qui ont marque ce monde, en plus d'autres nouvelles et documents complementaires, tous en preparation. A l'heure actuelle, seule une poignee de personnages ont ete rendu public, afin de preserver toute influence exterieure sur la trame narrative prevue pour la trilogie principale.", en: "This project was born ten years earlier. It is a rich and detailed universe, from the creation to the destruction of this chimerical place. Three distinct stories are planned to explore the different eras that marked this world, plus other short stories and complementary documents, all in preparation. Currently, only a handful of characters have been made public, to preserve any outside influence on the planned narrative for the main trilogy." },
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
  { key: "key_33", fr: "Animée depuis toujours par une passion pour le dessin et la littérature, je suis à la recherche d'une alternance d’une durée d’un an, au rythme de 3 semaines en entreprise et 1 semaine à l'école.", en: "Driven by a lifelong passion for drawing and literature, I am seeking a one-year apprenticeship with a schedule of 3 weeks in a company and 1 week at school." },
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
  { key: "key_74", fr: "LinkedIn", en: "LinkedIn" },
  { key: "key_75", fr: "Publicités", en: "Advertisements" },
  { key: "key_76", fr: "Exercices", en: "Exercises" },
  { key: "key_77", fr: "Couverture de Livre", en: "Book Covers" },
  { key: "key_78", fr: "Illustrations", en: "Illustrations" },
  { key: "key_79", fr: "Logos", en: "Logos" },
  { key: "key_80", fr: "Reseau Sociaux", en: "Social Media" },
  { key: "key_81", fr: "Tutoriel", en: "Tutorial" },
  { key: "key_82", fr: "Dessins", en: "Drawings" },
  { key: "key_83", fr: "Horloge", en: "Clock" },
  { key: "key_84", fr: "Rassembler en une image tout ce qui nous représente, en s’appuyant sur des questions comme : « Si j’étais une plante, je serais quoi ? », le tout au sein d’une composition réalisée avec Photoshop.", en: "Gather in one image everything that represents us, relying on questions like: 'If I were a plant, what would I be?', all within a composition made with Photoshop." },
  { key: "key_85", fr: "Smile", en: "Smile" },
  { key: "key_86", fr: "Création d’une marque fille de cannettes issues de la marque mère Smile, création d’une charte graphique et conception de différents modèles de cannettes autour de parfums&nbsp;: deux canettes de la gamme permanente et une édition collector à l’aide de Photoshop, Illustrator, Krita et InDesign.", en: "Conception of a soda child-brand from a mother brand named Smile, creation of the complete design guidelines and the prototypes of some sodas flavors&nbsp;: two can designs for the main line and one limited edition can with Photoshop, Illustrator, Krita and InDesign." },
  { key: "key_87", fr: "Chocolat Carmen", en: "Carmen Chocolate" },
  { key: "key_88", fr: "Défi de réalisation d’une charte graphique complète avec affiches, posts réseaux sociaux et mise en situations des produits en moins de deux jours.", en: "Conception of a design guidelines within two days, along with flyers, social media posts and mock-ups of the products."},
  { key: "key_89", fr: "Kleneex", en: "Kleenex"},
  { key: "key_90", fr: "Réalisation d’une nouvelle gamme de produits Kleenex et campagne complète pour deux périodes différentes de l’année et deux publics cibles très différents&nbsp;: une gamme pour la rentrée destinée aux enfants et une gamme été familiale qui parle à petits et grands.", en: "Creation of a new set of Kleenex’s products, alongside a promotion campaign for two seperate times of the year, targeting two different types of clients&nbsp;: one set for young kids going back to school after the holidays, and one set for the whole family."},
  { key: "key_91", fr: "Swaroski", en: "Swaroski"},
  { key: "key_92", fr: "Réalisation de deux axes de communication pour de l’ouverture d’un concept store autour des Strass Dentaires Swarovski. Création d’une charte graphique pour chaque axe, photographie des mannequins en studio, mise en page des affiches, mise en situations pour les deux axes et campagne réseaux sociaux pour un axe choisi.", en: "Conception of two marketing proposition to celebrate the opening of a concept store about Swarovski’s Dental Rhinestones. Creation of design guidelines for both proposition, studio photo shooting of the mannequins, flyers montage, mock-ups for both propositions and a social media campaign for one of them."},
  { key: "key_93", fr: "Pierre", en: "Stone"},
  { key: "key_94", fr: "Étude photographique de la pierre dans la ville à travers d’un traitement graphique traditionnel qui vous invite à une promenade parmi les allées de Montigny-le-Bretonneux.", en: "Study of the stone in the city with a traditionnal processing on pictures gathered in a booklet. This project invites you to travel through the streets of Montigny-le-Bretonneux."},
  { key: "key_95", fr: "Portrait Chinois", en: "CHINESE PORTRAIT"},
  { key: "key_96", fr: "Rassembler en une image tout ce qui nous représente, en s’appuyant sur des questions comme&nbsp;: «&nbsp;Si j’étais une plante, je serais quoi&nbsp;?&nbsp;», le tout au sein d’une composition réalisée avec Photoshop.", en: "Gathering in one picture what defines us, leaning on question like&nbsp;: 'If I could be a plant, what would I be?' inside a composition made on Photoshop."}
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




let currentLang = 'fr';
function setActiveFlag(flag) {
    document.getElementById('flag-fr').classList.add('flag-active');
    document.getElementById('flag-en').classList.remove('flag-active');
    if (flag === 'flag-en') {
        document.getElementById('flag-fr').classList.remove('flag-active');
        document.getElementById('flag-en').classList.add('flag-active');
    }
}
document.getElementById('flag-fr').addEventListener('click', function () {
    setActiveFlag('flag-fr');
});
document.getElementById('flag-en').addEventListener('click', function () {
    setActiveFlag('flag-en');
});
// Initialisation : activer le drapeau FR par défaut
setActiveFlag('flag-fr');




// Structure des sections, h2 et h3
const sectionData = {
    ecole: {
        h1: "key_67",
        h2: {
            "key_82": [
                { titre: "key_85", sousTitre: "key_86", image: "assets/projets/ecole/Pub/Cannettes_Smile/mock-up1.png" },
                { titre: "key_87", sousTitre: "key_88", image: "assets/projets/ecole/Pub/Chocolats_Carmen/Base boîte D.png" },
                { titre: "key_89", sousTitre: "key_90", image: "assets/projets/ecole/Pub/Kleneex/kleenex.png" },
                { titre: "key_91", sousTitre: "key_92", image: "assets/projets/ecole/Pub/Swarovski/swaroski.png" }
            ],
            "key_76": [
                { titre: "key_93", sousTitre: "key_94", image: "assets/projets/ecole/Exercices/Depliant A.png" },
                { titre: "key_95", sousTitre: "key_96", image: "assets/projets/ecole/Exercices/Portrait chinois.png" }
            ]
        }
    },
    perso: {
        h1: "key_68",
        h2: {
            "key_82": [
                { titre: "key_83", sousTitre: "key_84", image: "assets/projets/perso/Dessins/Horloge.png" },
                { titre: "Moustache", sousTitre: "Projet d’art symbolique rassemblant différents éléments associés à la vie et la mort, en une composition unique.", image: "assets/projets/perso/Dessins/Moustache.png" },
                { titre: "Dranio Vitrail", image: "assets/projets/perso/Dessins/Dranio_vitrail.jpg" },
                { titre: "Pokemon", sousTitre: "key_10", image: "assets/projets/perso/Dessins/Folivane.png", customClass: "pokemon-img" }
            ],
            "key_76": [
                { titre: "key_1", sousTitre: "key_1", image: "assets/projets/perso/Animations/Balle_rebondissante_2.gif" },
                { titre: "key_2", sousTitre: "key_2", image: "assets/projets/perso/Animations/dragon_animation_base_2.gif" },
                { titre: "key_3", sousTitre: "key_3", image: "assets/projets/perso/Animations/Test anim.gif" }
            ],
            "key_77": [
                { titre: "Zelda", sousTitre: "key_2", image: "assets/projets/perso/Ecriture/Zelda.png" },
                { titre: "Abhosia", sousTitre: "Ce projet est né dix ans plus tôt. C’est un univers riche et détaillé, allant de la création à la destruction de ce lieu chimérique. Trois histoires distinctes sont prévues pour explorer les différentes époques qui ont marqué ce monde, en plus d’autres nouvelles et documents complémentaires, tous en préparation. À l’heure actuelle, seule une poignée de personnages ont été rendu public, afin de préserver toute influence extérieure sur la trame narrative prévue pour la trilogie principale.", image: "assets/projets/perso/Ecriture/Abhosia.png" },
                { titre: "Pokemon", sousTitre: "Exploration de la question du 'bon dresseur' à l’aide d’un récit choral qui retrace l’histoire des jeux 'Pokémon Noir et Blanc', si notre personnage pouvait réellement agir d’une manière moins rigide que celle dictée par les jeux. Sous la forme d’une enquête menée par Beladonis après l’effondrement du Palais de N, ce récit a pour but de clarifier la psychologie des différents personnages présentés dans le récit d’une manière détaillée et introspective, au sein d’une histoire baignée de mystères.", image: "assets/projets/perso/Ecriture/poke.jpg" },
                { titre: "Murphy", sousTitre: "Petite nouvelle parodique écrite d’une traite à propos d’une journée typique d’un certain Murphy, chargé de surveiller et restreindre les conversations problématique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arrêter. Membre de la brigade de la préservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de différents personnages hauts en couleurs qui lui mènent la vie dure, au sein d’une routine qu’il subit bien malgré lui.", image: "assets/projets/perso/Ecriture/murphy.png" }
            ],
            "key_78": [
                { titre: "key_4", sousTitre: "key_4", image: "https://as2.ftcdn.net/jpg/02/45/55/81/1000_F_245558111_VvoBPyZrDXEseNy2Y4cqmgUGzuYcscJE.jpg", customClass: "music-img" },
                { titre: "key_5", sousTitre: "key_5", image: "https://png.pngtree.com/background/20210712/original/pngtree-color-glare-music-banner-background-picture-image_1186650.jpg", customClass: "music-img" },
                { titre: "key_6", sousTitre: "key_6", image: "https://static.vecteezy.com/ti/vecteur-libre/p1/11000296-conception-de-banniere-d-onde-sonore-de-musique-abstraite-gratuit-vectoriel.jpg", customClass: "music-img" }
            ],
            "key_79": [
                { titre: "key_7", sousTitre: "key_7", image: "assets/projets/perso/Couture/Coussin.jpg", customClass: "coussin-img" },
                { titre: "key_8", sousTitre: "key_8", image: "assets/projets/perso/Couture/Tobias2.jpg" },
                { titre: "key_9", sousTitre: "key_9", image: "assets/projets/perso/Couture/Yoslan2.jpg", customClass: "yoslan-img" }
            ]
        }
    },
    pro: {
        h1: "key_66",
        h2: {
            "key_77": [
                { titre: "Le printemps renait toujours", sousTitre: "Illustration sur Krita pour les versions numérique, reliée et brochée du livre de Luny Asthiers.", image: "assets/projets/pro/Couverture_de_Livre/printemps.png" },
                { titre: "Couverture livre mockup", sousTitre: "Mise en page sur Canva d’une couverture incluant un phœnix, ainsi que du texte qui peut être remplacé aisément pour un vrai titre et un nom d’auteur.", image: "assets/projets/pro/Couverture_de_Livre/3tours.png" }
            ],
            "key_78": [
                { titre: "freelance_fourth_wing", sousTitre: "Commande réalisée sur Krita à la demande d’une cliente, incluant quatre personnages et un décor simple.", image: "assets/projets/pro/Illustrations/freelance_fourth_wing.png" },
                { titre: "luny_Illu_renard", sousTitre: "Montage réalisé sur Photoshop pour Luny Asthiers.", image: "assets/projets/pro/Illustrations/luny_Illu_renard.png" }
            ],
            "key_79": [
                { titre: "Logo_pour_Luny", sousTitre: "Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers. Cette création est antérieure à mes études en graphisme.", image: "assets/projets/pro/Logos/Logo_pour_Luny.png" }
            ],
            "key_80": [
                { titre: "Post Wandel", sousTitre: "Communication illustrée pour l’occasion de la sortie de Wandel en octobre 2024.", image: "assets/projets/pro/Reseau_Sociaux/Post Wandel13.png" },
                { titre: "Hamlet", sousTitre: "Mise en avant d’une citation de Hamlet avec des visuels et d’une mise en page attirante sur Canva.", image: "assets/projets/pro/Reseau_Sociaux/Post_Hamlet1.png" },
                { titre: "Harry Potter", sousTitre: "Mise en avant d’une citation de Harry Potter à l’école des sorciers et avec une mise en page et des visuels parlants sur Canva.", image: "assets/projets/pro/Reseau_Sociaux/Post_Harry_Potter4.png" }
            ],
            "key_81": [
                { titre: "Petit Guide du Stagiaire", sousTitre: "Cadeau de départ pour la Mairie de Montigny-le-Bretonneux afin de pallier à la méconnaissance parfois des stagiaires qui sont placés devant le 'Guide Pratique de la Ville' sans connaissance préalable du logiciel InDesign. Prise d’initiative pour combler un besoin utile à la bonne continuation du projet annuel dans de bonnes conditions.", image: "assets/projets/pro/Tutoriels/Guides pratiques.png" }
            ]
        }
    }
};