// Traduction en anglais "en dur" de tout le site
// Ajoute ce script dans index.html juste avant </body>

const translationsList = [
  { key: "key_1", fr: "Exercice d'animation 'stretch and squash' afin de comprendre les fondamentaux, réalisé sur Toon Boom Harmony.", en: "'Stretch and squash' animation exercise to understand the fundamentals, created using Toon Boom Harmony." },
  { key: "key_2", fr: "Exercice d’animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe réalisé sur Toon Boom Harmony.", en: "2D animation exercise that applies acquired knowledge to a more complex creature, created using Toon Boom Harmony." },
  { key: "key_3", fr: "Essai d’animation courte pour essayer un style graphique plus souple sur Krita.", en: "Short animation test exploring a more flexible graphic style on Krita." },
  { key: "key_4", fr: "Composition originale inspirée par les derniers flocons de 2024, qui s’inscrit dans un univers d’infiltration sous tension. La progression de la musique accompagne l’avancée hypothétique d’un protagoniste indéfini à travers à dédale d’obstacles et de gardes, pour une raison qu’il ne tient qu’à vous de définir.", en: "An original composition inspired by the last snowflakes of 2024, fitting within a tense infiltration setting. The musical progression accompanies the hypothetical advancement of an undefined protagonist navigating a maze of obstacles and guards, for reasons left to your interpretation." },
  { key: "key_5", fr: "Expérimentation musicale afin de prendre en main les outils de BandLab, notamment les effets et instruments, les multiples pistes pour créer un effet de chœurs en canon et la gestion des niveaux à travers une mélodie inspirée sur le moment.", en: "Musical experimentation to get familiar with BandLab tools, particularly effects, instruments, layered tracks to create a canon choir effect, and level management through an impromptu melody." },
  { key: "key_6", fr: "Toute première création musicale et composition réalisée sur BandLab. Le thème quelque peu chaotique est le fruit d’un essai à tous les niveaux.", en: "My very first musical creation and composition made using BandLab. The somewhat chaotic theme is the result of an all-out experiment." },
  { key: "key_7", fr: "Premier projet à la main pour apprendre les points les plus fréquemment utilisés en couture. Dimensions : 10cm x 10cm.", en: "First handmade project to learn the most frequently used stitches in sewing. Dimensions: 10cm x 10cm." },
  { key: "key_8", fr: "Peluche de crabe de 30cm de large, conçu à partir d’un patron pré-existant, pour mettre en application les connaissances acquises à l’aide du coussin et me mettre au défi. Initiation à la broderie pour les détails (yeux, bouches, message sur le torse) et confrontation à de nouveaux tissus.", en: "A 30cm-wide crab plushie, created using a pre-existing pattern to apply acquired skills from the cushion project and challenge myself. Introduction to embroidery for details (eyes, mouth, torso message) and exploration of new fabrics." },
  { key: "key_9", fr: "Peluche de colibri de 15cm, conçu à partir d’un patron original afin d’essayer les tissus destinés au projet suivant. Apprentissage de nouveaux points, d’erreur à ne pas commettre et d’autres essais plus ou moins concluants concernant la taille minimale des pièces à réaliser, comme pour le bec par exemple, sans compromettre le tissu.", en: "A 15cm hummingbird plushie, designed from an self-made pattern to test materials intended for the next project. Learning new stitches, recognizing errors to avoid, and conducting various trials regarding the minimum size of components — such as the beak — without compromising the fabric." },
  { key: "key_10", fr: "Fusions ou création de pokémon pour maintenir une pratique régulière du dessin.", en: "Pokémon Fusions or creations of Pokémon to maintain regular drawing practice." },
  { key: "key_11", fr: "Illustration du chat de Jérémy pour le projet d'histoire The Legend of Zelda.", en: "Illustration of Jeremy’s cat for The Legend of Zelda story project." },
  { key: "key_12", fr: "Imagination d'un personnage-objet.", en: "Imagining a character-object." },
  { key: "key_13", fr: "Exploration de la question du « bon dresseur » à l’aide d’un récit choral qui retrace l’histoire de 'Pokémon Noir et Blanc', si notre personnage pouvait réellement agir d’une manière moins rigide que celle dictée par les jeux officiels. Sous la forme d’une enquête menée par Beladonis après l’effondrement du Palais de N, ce récit a pour but de clarifier la psychologie des différents personnages présentés dans le récit, d’une manière détaillée et introspective, au sein d’une histoire baignée de mystères.", en: "Exploring the concept of a 'good trainer' through a choral narrative that retraces the story of Pokémon Black and White, envisioning a protagonist capable of acting beyond the rigid constraints imposed by the official games. Structured as an investigation led by Beladonis after the collapse of N’s Castle, this story aims to clarify the psychology of the various characters presented, offering a detailed and introspective approach within a mystery- laden narrative." },
  { key: "key_14", fr: "Petite nouvelle parodique écrite d’une traite à propos d’une journée typique d’un certain Murphy, chargé de surveiller et restreindre les conversations problématique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arrêter. Membre de la brigade de la préservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de différents personnages hauts en couleurs qui lui mènent la vie dure, au sein d’une routine qu’il subit bien malgré lui.", en: "A short parody written in one sitting about a typical day of Murphy, tasked with monitoring and restricting problematic conversations among suspicious individuals to gather enough evidence for their arrest. As a member of the Insect Preservation Brigade, Murphy is an agent living in a mansion alongside eccentric characters who make his life difficult, trapped in a routine he endures against his will." },
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
  { key: "key_77", fr: "Couverture de Livres", en: "Book Covers" },
  { key: "key_78", fr: "Illustrations", en: "Illustrations" },
  { key: "key_79", fr: "Logos", en: "Logos" },
  { key: "key_80", fr: "Réseaux sociaux", en: "Social Media" },
  { key: "key_81", fr: "Tutoriel", en: "Tutorial" },
  { key: "key_82", fr: "Design graphique,", en: "Graphic design" },
  { key: "key_83", fr: "Horloge", en: "Clock" },
  { key: "key_84", fr: "Imagination d'un personnage-objet.", en: "Imagining a character-object." },
  { key: "key_85", fr: "Smile", en: "Smile" },
  { key: "key_86", fr: "Création d’une marque fille de cannettes issues de la marque mère Smile, création d’une charte graphique et conception de différents modèles de cannettes autour de parfums : deux canettes de la gamme permanente et une édition collector à l’aide de Photoshop, Illustrator, Krita et InDesign.", en: "Creation of a sub-brand of cans derived from the parent brand Smile, development of a graphic charter, and design of various can models based on different flavors: two cans for the permanent range and a collector’s edition using Photoshop, Illustrator, Krita, and InDesign." },
  { key: "key_87", fr: "L'échappée Gourmande", en: "The Gourmet’s escape" },
  { key: "key_88", fr: "Défi de réalisation d’une charte graphique complète avec affiches, posts réseaux sociaux et mise en situations des produits en moins de deux jours.", en: "Challenge to create a complete graphic charter including posters, social media posts, and product mock-ups in less than two days."},
  { key: "key_89", fr: "Kleneex", en: "Kleenex"},
  { key: "key_90", fr: "Réalisation d’une nouvelle gamme de produits Kleenex et campagne complète pour deux périodes différentes de l’année et deux publics cibles très différents: une gamme pour la rentrée destinée aux enfants et une gamme été familiale qui parle à petits et grands. Ce projet a été présenté devant un jury professionnel dans le cadre de ma scolarité à Garti.", en: "Development of a new range of Kleenex products and a complete campaign for two different periods of the year and two distinct target audiences: a back-to-school range for children and a summer family range appealing to both young and old. This project was presented before a professional jury as part of my studies at Garti."},
  { key: "key_91", fr: "Swaroski", en: "Swaroski"},
  { key: "key_92", fr: "Projet de groupe consistant à réaliser deux axes de communication pour de l’ouverture d’un concept store autour des strass dentaires Swarovski. Création d’une charte graphique pour chaque axe, photographie des mannequins en studio, mise en page des affiches, mise en situations pour les deux axes et campagne réseaux sociaux pour un axe choisi. Ce projet a été présenté devant un jury professionnel dans le cadre de ma scolarité à Garti.", en: "Group project consisting of creating two campaign approaches for the opening of a concept store featuring Swarovski dental rhinestones. Development of a graphic charter for each approach, studio photography of models, poster layout, product placements for both approaches, and a social media campaign for a selected approach. This project was presented before a professional jury as part of my studies at Garti."},
  { key: "key_93", fr: "Pierre", en: "Stone"},
  { key: "key_94", fr: "Étude photographique de la pierre dans la ville à travers d’un traitement graphique traditionnel qui vous invite à une promenade parmi les allées de Montigny-le-Bretonneux.", en: "Photographic study of stone in the city through a traditional graphic treatment that invites viewers to take a stroll through the alleys of Montigny-le-Bretonneux."},
  { key: "key_95", fr: "Portrait Chinois", en: "Chinese Portrait"},
  { key: "key_96", fr: "Rassembler en une image tout ce qui nous représente, en s’appuyant sur des questions comme: « Si j’étais une plante, je serais quoi ? », le tout au sein d’une composition réalisée avec Photoshop.", en: "Gathering in one image everything that represents us, based on questions such as: “If I were a plant, what would I be?”, all within a composition created using Photoshop."},
  { key: "key_97", fr: "Le printemps renaît toujours", en: "Le printemps renaît toujours" },
  { key: "key_98", fr: "Histoire mêlant deux temps de récit. D’un côté, nous explorons la création du monde selon Jérémy Drava, à travers des figures emblématiques de la série Zelda délaissée par les jeux, afin d’expliquer la chronologie sous le prisme de ces personnages oubliés. Dans un second temps, on accompagne ce même Jérémy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l’univers et celle de sa hiérarchie, alors qu’il est nommé co- auteur pour le scénario du jeu 'Zelda: Tears of the Kingdom'.", en: "The Legend of Zelda A story intertwining two timelines. On one side, we explore the creation of the world according to Jérémy Drava, through emblematic figures of the Zelda series left aside by the games, explaining the chronology through these forgotten characters. In the second timeline, we follow the same Jérémy in his daily life at Nintendo, struggling between his personal vision of the universe and that of his hierarchy after being named co- author for the script of 'Zelda: Tears of the Kingdom.'" },
  { key: "key_99", fr: "Il suffit de trois tours", en: "Il suffit de trois tours" },
  { key: "key_100", fr: "Proposition d'un titre-logo pour l'un des romans de Luny Asthiers.", en: "Customized title proposition for one novel written by Luny Asthiers." },
  { key: "key_101", fr: "Fourth Wing", en: "Fourth Wing" },
  { key: "key_102", fr: "Illustration réalisée sur Krita à la demande d’une cliente, incluant deux personnages de la série, deux personnages du monde réel et un décor simple.", en: "Commission made on Krita on a client’s request, including two characters of the official books, two characters from the real world and a simple background." },
  { key: "key_103", fr: "Le renard améthyste", en: "Le renard améthyste" },
  { key: "key_104", fr: "Proposition de couverture réalisé sur Photoshop pour Luny Asthiers.", en: "Book cover proposal created in Photoshop for Luny Asthiers." },
  { key: "key_105", fr: "Logo Luny ASTHIERS", en: "Logo Luny ASTHIERS" },
  { key: "key_106", fr: "Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers pour son logo personnel. Cette création est antérieure à mes études en graphisme.", en: "Design of Aster (the fox) and its placement created in Krita according to the requests of Luny Asthiers for their personal logo. This creation predates my graphic design studies." },
  { key: "key_107", fr: "Wandel", en: "Wandel" },
  { key: "key_108", fr: "Communication illustrée pour l’occasion de la sortie de 'Wandel' en octobre 2024.", en: "Illustrated communication for the release of 'Wandel' in October 2024." },
  { key: "key_109", fr: "Hamlet", en: "Hamlet" },
  { key: "key_110", fr: "Mise en avant d’une citation de 'Hamlet' à l'aide d'une mise en page attirante sur Canva.", en: "Highlighting a quote from 'Hamlet' using an attractive layout on Canva." },
  { key: "key_111", fr: "Harry Potter", en: "Harry Potter" },
  { key: "key_112", fr: "Mise en avant d’une citation de Harry Potter à l’école des sorciers avec des visuels éloquents sur Canva.", en: "Highlighting a quote from 'Harry Potter and the Sorcerer’s Stone' with eloquent visuals on Canva." },
  { key: "key_113", fr: "Guide InDesign 2024", en: "InDesign 2024 Guide" },
  { key: "key_114", fr: "'Le Petit Guide du Stagiaire' a été mon cadeau de départ pour la Mairie de Montigny-le-Bretonneux, afin de pallier à la méconnaissance des stagiaires qui sont placés devant le 'Guide Pratique de la Ville' sans forcément avoir de connaissances préalables du logiciel InDesign. Prise d’initiative pour combler un besoin utile à la bonne continuation du projet annuel dans de bonnes conditions.", en: "The Practical Intern's Guide was my farewell gift to the Montigny-le-Bretonneux Town Hall, aimed at addressing the interns' lack of familiarity with InDesign. Often, interns are presented with the City's Practical Guide without prior knowledge of the software. This initiative helped ensure the project's smooth annual continuation in optimal conditions." },
  { key: "key_115", fr: "Balle Rebondissante", en: "Bouncing Ball" },
  { key: "key_116", fr: "Cycle de Course", en: "Running cycle" },
  { key: "key_117", fr: "Sommeil", en: "Rest" },
  { key: "key_118", fr: "The Legend of Zelda", en: "The Legend of Zelda" },
  { key: "key_127", fr: "Ce projet est né dix ans plus tôt. C’est un univers riche et détaillé, allant de la création à la destruction de ce lieu chimérique. Trois histoires distinctes sont prévues pour explorer les différentes époques qui ont marqué ce monde, en plus d’autres nouvelles et documents complémentaires, tous en préparation. À l’heure actuelle, seule une poignée de personnages ont été rendu public, afin de préserver toute influence extérieure sur la trame narrative prévue pour la trilogie principale : 'LE MANOIR DE MURPHY'", en: "A project that began ten years ago. It is a rich and detailed universe, spanning from creation to destruction of this mythical place. Three distinct stories are planned to explore various eras that shaped this world, alongside additional short stories and complementary documents, all in preparation. Currently, only a handful of characters have been made public to preserve external influences on the narrative framework of the main trilogy." },
  { key: "key_128", fr: "Exploration de la question du 'bon dresseur' à l’aide d’un récit choral qui retrace l’histoire des jeux 'Pokémon Noir et Blanc', si notre personnage pouvait réellement agir d’une manière moins rigide que celle dictée par les jeux. Sous la forme d’une enquête menée par Beladonis après l’effondrement du Palais de N, ce récit a pour but de clarifier la psychologie des différents personnages présentés dans le récit d’une manière détaillée et introspective, au sein d’une histoire baignée de mystères.", en: "Exploration of the 'good trainer' question through a choral story that retraces the history of the 'Pokémon Black and White' games, if our character could really act in a less rigid way than dictated by the games. In the form of an investigation led by Beladonis after the collapse of N's Castle, this story aims to clarify the psychology of the various characters presented in the narrative in a detailed and introspective manner, within a mystery-filled story." },
  { key: "key_129", fr: "Petite nouvelle parodique écrite d’une traite à propos d’une journée typique d’un certain Murphy, chargé de surveiller et restreindre les conversations problématique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arrêter. Membre de la brigade de la préservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de différents personnages hauts en couleurs qui lui mènent la vie dure, au sein d’une routine qu’il subit bien malgré lui.", en: "Short parodic story written in one go about a typical day of a certain Murphy, tasked with monitoring and restricting problematic conversations of suspicious people, in order to gather enough evidence to arrest them. Member of the insect preservation brigade, Murphy is an agent living in a mansion with various colorful characters who make his life difficult, within a routine he endures despite himself." },
  { key: "key_130", fr: "Rôder dans la neige", en: "Lurking in the snow" },
  { key: "key_131", fr: "Quelque chose mais pas tant", en: "Something yet not so much" },
  { key: "key_132", fr: "Première tentative", en: "First attempt" },
  { key: "key_133", fr: "Coussin", en: "Cushion" },
  { key: "key_134", fr: "Tobias", en: "Tobias" },
  { key: "key_135", fr: "Yoslan", en: "Yoslan" },
  { key: "key_136", fr: "Recomposition d'un projet de vitrail de 50cm x 50cm.", en: "Recomposition of a 50cm x 50cm stained glass project." },
  { key: "key_137", fr: "Animation 2D", en: "Animation 2D" },
  { key: "key_138", fr: "Écriture", en: "Writing" },
  { key: "key_139", fr: "Le Monde d’Abhosia", en: "The Abhosia World" },
  { key: "key_140", fr: "Au cœur du silence", en: "The core of silence" },
  { key: "key_141", fr: "Le Manoir de Murphy", en: "Murphy's Mansion" },
  { key: "key_142", fr: "Musiques", en: "Music" },
  { key: "key_143", fr: "Artisanats", en: "Handicraft" },
  { key: "key_144", fr: "Vitrail", en: "Stained Glass" },
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
    translationsList.forEach(({ key }) => {
        // Sélectionne tous les éléments existants avec l'ID correspondant
        const elements = document.querySelectorAll(`[id='${key}']`);
        elements.forEach(el => {
            el.textContent = getTranslation(key, lang);
            if (['H1', 'H2', 'P', 'DIV', 'H4'].includes(el.tagName)) {
                el.style.display = 'block';
            } else {
                el.style.display = '';
            }
        });
    });

    // Traduction des éléments avec data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const translation = getTranslation(key, lang);
        if (translation) {
            el.textContent = translation;
        }
    });

    // Traduction des alt d'images
    document.querySelectorAll('img[alt]').forEach((img) => {
        const keyMatch = img.alt && img.alt.trim().match(/^key_\d+$/);
        if (keyMatch) {
            img.alt = getTranslation(keyMatch[0], lang);
        }
    });
}

// Structure des sections, h2 et h4
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
                { titre: "Moustache", sousTitre: "key_11", image: "assets/projets/perso/Dessins/Moustache.png" },
                { titre: "key_144", sousTitre: "key_136", image: "assets/projets/perso/Dessins/Dranio_vitrail.jpg" },
                { titre: "Pokémon", sousTitre: "key_10", image: "assets/projets/perso/Dessins/Folivane.png", customClass: "pokemon-img" }
            ],
            "key_137": [
                { titre: "key_115", sousTitre: "key_1", image: "assets/projets/perso/Animations/Balle_rebondissante_2.gif" },
                { titre: "key_116", sousTitre: "key_2", image: "assets/projets/perso/Animations/dragon_animation_base_2.gif" },
                { titre: "key_117", sousTitre: "key_3", image: "assets/projets/perso/Animations/Test anim.gif" }
            ],
            "key_138": [
                { titre: "key_118", sousTitre: "key_98", image: "assets/projets/perso/Ecriture/Zelda.png" },
                { titre: "key_139", sousTitre: "key_127", image: "assets/projets/perso/Ecriture/Abhosia.png" },
                { titre: "key_140", sousTitre: "key_128", image: "assets/projets/perso/Ecriture/poke.jpg" },
                { titre: "key_141", sousTitre: "key_129", image: "assets/projets/perso/Ecriture/murphy.png" }
            ],
            "key_142": [
                { titre: "key_130", sousTitre: "key_4", image: "https://as2.ftcdn.net/jpg/02/45/55/81/1000_F_245558111_VvoBPyZrDXEseNy2Y4cqmgUGzuYcscJE.jpg", customClass: "music-img" },
                { titre: "key_131", sousTitre: "key_5", image: "https://png.pngtree.com/background/20210712/original/pngtree-color-glare-music-banner-background-picture-image_1186650.jpg", customClass: "music-img" },
                { titre: "key_132", sousTitre: "key_6", image: "https://static.vecteezy.com/ti/vecteur-libre/p1/11000296-conception-de-banniere-d-onde-sonore-de-musique-abstraite-gratuit-vectoriel.jpg", customClass: "music-img" }
            ],
            "key_143": [
                { titre: "key_133", sousTitre: "key_7", image: "assets/projets/perso/Couture/Coussin.jpg", customClass: "coussin-img" },
                { titre: "key_134", sousTitre: "key_8", image: "assets/projets/perso/Couture/Tobias2.jpg" },
                { titre: "key_135", sousTitre: "key_9", image: "assets/projets/perso/Couture/Yoslan2.jpg", customClass: "yoslan-img" }
            ]
        }
    },
    pro: {
        h1: "key_66",
        h2: {
            "key_77": [
                { titre: "key_97", sousTitre: "key_98", image: "assets/projets/pro/Couverture_de_Livre/printemps.png" },
                { titre: "key_99", sousTitre: "key_100", image: "assets/projets/pro/Couverture_de_Livre/3tours.png" }
            ],
            "key_78": [
                { titre: "key_103", sousTitre: "key_104", image: "assets/projets/pro/Illustrations/luny_Illu_renard.png" },
                { titre: "key_101", sousTitre: "key_102", image: "assets/projets/pro/Illustrations/freelance_fourth_wing.png" },
                { titre: "key_105", sousTitre: "key_106", image: "assets/projets/pro/Logos/Logo_pour_Luny.png" }
            ],
            "key_80": [
                { titre: "key_107", sousTitre: "key_108", image: "assets/projets/pro/Reseau_Sociaux/Post Wandel13.png" },
                { titre: "key_109", sousTitre: "key_110", image: "assets/projets/pro/Reseau_Sociaux/Post_Hamlet1.png" },
                { titre: "key_111", sousTitre: "key_112", image: "assets/projets/pro/Reseau_Sociaux/Post_Harry_Potter4.png" }
            ],
            "key_81": [
                { titre: "key_113", sousTitre: "key_114", image: "assets/projets/pro/Tutoriels/Guides pratiques.png" }
            ]
        }
    }
};

// Gere l'activation des drapeaux
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
    currentLang = 'fr';
    applyTranslations('fr')
});
document.getElementById('flag-en').addEventListener('click', function () {
    setActiveFlag('flag-en');
    currentLang = 'en';
    applyTranslations('en')
});

// Au chargement de la page, on applique la traduction française par défaut
window.addEventListener('DOMContentLoaded', () => {
    setActiveFlag('flag-fr');
    applyTranslations('fr');
});