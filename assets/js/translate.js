// Traduction en anglais "en dur" de tout le site
// Ajoute ce script dans index.html juste avant </body>

const translations = {
    fr: {
        // Descriptions normalisées (apostrophes simples, pas d’entités)
        'Exercice de boucle d\'animation 2D afin de comprendre les principes d\'animation realisé sur Toon Boom Harmony.': 'Exercice de boucle d\'animation 2D afin de comprendre les principes d\'animation realisé sur Toon Boom Harmony.',
        'Exercice d\'animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe realisé sur Toon Boom Harmony.': 'Exercice d\'animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe realisé sur Toon Boom Harmony.',
        'Essai d\'animation 2D courte pour essayer un style graphique plus souple sur Krita.': 'Essai d\'animation 2D courte pour essayer un style graphique plus souple sur Krita.',
        'Composition originale inspiree par les derniers flocons de 2024, qui s\'inscrit dans un univers d\'infiltration sous tension. La progression de la musique accompagne l\'avancee hypothétique d\'un protagoniste indefini a travers a dedale d\'obstacles et de gardes, pour une raison qu\'il ne tient qu\'a vous de definir.': 'Composition originale inspiree par les derniers flocons de 2024, qui s\'inscrit dans un univers d\'infiltration sous tension. La progression de la musique accompagne l\'avancee hypothétique d\'un protagoniste indefini a travers a dedale d\'obstacles et de gardes, pour une raison qu\'il ne tient qu\'a vous de definir.',
        'Experimentation musicale afin de prendre en main les outils de BandLab, notamment les effets et instruments, les multiples pistes pour creer un effet de choeurs en canon et la gestion des niveaux a travers une melodie inspiree sur le moment.': 'Experimentation musicale afin de prendre en main les outils de BandLab, notamment les effets et instruments, les multiples pistes pour creer un effet de choeurs en canon et la gestion des niveaux a travers une melodie inspiree sur le moment.',
        'Toute premiere creation musicale et composition realisee sur BandLab. Le theme quelque peu chaotique est le fruit d\'un essai a tous les niveaux.': 'Toute premiere creation musicale et composition realisee sur BandLab. Le theme quelque peu chaotique est le fruit d\'un essai a tous les niveaux.',
        'Premier projet a la main pour apprendre les points les plus frequemment utilises en couture. Dimensions : 10x10 cm.': 'Premier projet a la main pour apprendre les points les plus frequemment utilises en couture. Dimensions : 10x10 cm.',
        'Peluche de crabe de 30 cm de large, concu a partir d\'un patron pre-existant, pour mettre en application les connaissances acquises a l\'aide du coussin et me mettre au defi. Initiation a la broderie pour les details (yeux, bouches, message sur le torse) et confrontation a de nouveaux tissus.': 'Peluche de crabe de 30 cm de large, concu a partir d\'un patron pre-existant, pour mettre en application les connaissances acquises a l\'aide du coussin et me mettre au defi. Initiation a la broderie pour les details (yeux, bouches, message sur le torse) et confrontation a de nouveaux tissus.',
        'Peluche de colibri de 15 cm, concu a partir d\'un patron original afin d\'essayer les tissus que je prevoyais d\'utiliser pour le projet suivant. Apprentissage de nouveaux points, d\'erreur a ne pas commettre et d\'autres essais plus ou moins concluant concernant la taille minimal des pieces a realiser, comme pour le bec par exemple, sans compromettre le tissu.': 'Peluche de colibri de 15 cm, concu a partir d\'un patron original afin d\'essayer les tissus que je prevoyais d\'utiliser pour le projet suivant. Apprentissage de nouveaux points, d\'erreur a ne pas commettre et d\'autres essais plus ou moins concluant concernant la taille minimal des pieces a realiser, comme pour le bec par exemple, sans compromettre le tissu.',
        'Dessins divers associant deux ou trois pokemon afin d\'en faire une fusion aussi egale que possible, dans leurs attributs respectifs et le melange des couleurs de chacun.': 'Dessins divers associant deux ou trois pokemon afin d\'en faire une fusion aussi egale que possible, dans leurs attributs respectifs et le melange des couleurs de chacun.',
        'Projet d\'art symbolique rassemblant differents elements associes a la vie et la mort, en une composition unique.': 'Projet d\'art symbolique rassemblant differents elements associes a la vie et la mort, en une composition unique.',
        'Rassembler en une image tout ce qui nous represente, en s\'appuyant sur des questions comme : "Si j\'etais une plante, je serais quoi ?", le tout au sein d\'une composition realisee avec Photoshop.': 'Rassembler en une image tout ce qui nous represente, en s\'appuyant sur des questions comme : "Si j\'etais une plante, je serais quoi ?", le tout au sein d\'une composition realisee avec Photoshop.',
        'Histoire melant deux temps de recit. D\'un cote, nous explorons la creation du monde selon Jeremy Drava, a travers des figures emblematiques de la serie Zelda delaissée par les jeux, afin d\'expliquer la chronologie sous le prisme de ces personnages oublies. Dans un second temps, on accompagne ce meme Jeremy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l\'univers et celle de sa hierarchie, alors qu\'il est nomme co-auteur pour le scenario du jeu "Zelda : Tears of the Kingdom".': 'Histoire melant deux temps de recit. D\'un cote, nous explorons la creation du monde selon Jeremy Drava, a travers des figures emblematiques de la serie Zelda delaissée par les jeux, afin d\'expliquer la chronologie sous le prisme de ces personnages oublies. Dans un second temps, on accompagne ce meme Jeremy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l\'univers et celle de sa hierarchie, alors qu\'il est nomme co-auteur pour le scenario du jeu "Zelda : Tears of the Kingdom".',
        'Ce projet est ne dix ans plus tot. C\'est un univers riche et detaille, allant de la creation a la destruction de ce lieu chimerique. Trois histoires distinctes sont prevues pour explorer les differentes epoques qui ont marque ce monde, en plus d\'autres nouvelles et documents complementaires, tous en preparation. A l\'heure actuelle, seule une poignee de personnages ont ete rendu public, afin de preserver toute influence exterieure sur la trame narrative prevue pour la trilogie principale.': 'Ce projet est ne dix ans plus tot. C\'est un univers riche et detaille, allant de la creation a la destruction de ce lieu chimerique. Trois histoires distinctes sont prevues pour explorer les differentes epoques qui ont marque ce monde, en plus d\'autres nouvelles et documents complementaires, tous en preparation. A l\'heure actuelle, seule une poignee de personnages ont ete rendu public, afin de preserver toute influence exterieure sur la trame narrative prevue pour la trilogie principale.',
        'Exploration de la question du "bon dresseur" a l\'aide d\'un recit choral qui retrace l\'histoire des jeux "Pokemon Noir et Blanc", si notre personnage pouvait reellement agir d\'une maniere moins rigide que celle dictee par les jeux. Sous la forme d\'une enquete menee par Beladonis apres l\'effondrement du Palais de N, ce recit a pour but de clarifier la psychologie des differents personnages presentes dans le recit d\'une maniere detaillee et introspective, au sein d\'une histoire baignee de mysteres.': 'Exploration de la question du "bon dresseur" a l\'aide d\'un recit choral qui retrace l\'histoire des jeux "Pokemon Noir et Blanc", si notre personnage pouvait reellement agir d\'une maniere moins rigide que celle dictee par les jeux. Sous la forme d\'une enquete menee par Beladonis apres l\'effondrement du Palais de N, ce recit a pour but de clarifier la psychologie des differents personnages presentes dans le recit d\'une maniere detaillee et introspective, au sein d\'une histoire baignee de mysteres.',
        'Petite nouvelle parodique ecrite d\'une traite a propos d\'une journee typique d\'un certain Murphy, charge de surveiller et restreindre les conversations problematique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arreter. Membre de la brigade de la preservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de differents personnages hauts en couleurs qui lui menent la vie dure, au sein d\'une routine qu\'il subit bien malgre lui.': 'Petite nouvelle parodique ecrite d\'une traite a propos d\'une journee typique d\'un certain Murphy, charge de surveiller et restreindre les conversations problematique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arreter. Membre de la brigade de la preservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de differents personnages hauts en couleurs qui lui menent la vie dure, au sein d\'une routine qu\'il subit bien malgre lui.',
        'Illustration sur Krita pour les versions numerique, reliee et brochee du livre de Luny Asthiers.': 'Illustration sur Krita pour les versions numerique, reliee et brochee du livre de Luny Asthiers.',
        'Mise en page sur Canva d\'une couverture incluant un phoenix, ainsi que du texte qui peut etre remplace aisement pour un vrai titre et un nom d\'auteur.': 'Mise en page sur Canva d\'une couverture incluant un phoenix, ainsi que du texte qui peut etre remplace aisement pour un vrai titre et un nom d\'auteur.',
        'Commande realisee sur Krita a la demande d\'une cliente, incluant quatre personnages et un decor simple.': 'Commande realisee sur Krita a la demande d\'une cliente, incluant quatre personnages et un decor simple.',
        'Montage realise sur Photoshop pour Luny Asthiers.': 'Montage realise sur Photoshop pour Luny Asthiers.',
        'Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers. Cette creation est anterieure a mes etudes en graphisme.': 'Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers. Cette creation est anterieure a mes etudes en graphisme.',
        'Communication illustree pour l\'occasion de la sortie de Wandel en octobre 2024.': 'Communication illustree pour l\'occasion de la sortie de Wandel en octobre 2024.',
        'Mise en avant d\'une citation de Hamlet avec des visuels et d\'une mise en page attirante sur Canva.': 'Mise en avant d\'une citation de Hamlet avec des visuels et d\'une mise en page attirante sur Canva.',
        'Mise en avant d\'une citation de Harry Potter a l\'ecole des sorciers et avec une mise en page et des visuels parlants sur Canva.': 'Mise en avant d\'une citation de Harry Potter a l\'ecole des sorciers et avec une mise en page et des visuels parlants sur Canva.',
        'Cadeau de depart pour la Mairie de Montigny-le-Bretonneux afin de pallier a la meconnaissance parfois des stagiaires qui sont places devant le "Guide Pratique de la Ville" sans connaissance prealable du logiciel InDesign. Prise d\'initiative pour combler un besoin utile a la bonne continuation du projet annuel dans de bonnes conditions.': 'Cadeau de depart pour la Mairie de Montigny-le-Bretonneux afin de pallier a la meconnaissance parfois des stagiaires qui sont places devant le "Guide Pratique de la Ville" sans connaissance prealable du logiciel InDesign. Prise d\'initiative pour combler un besoin utile a la bonne continuation du projet annuel dans de bonnes conditions.',
        // Ajoute ici les clés/français si besoin
        'Graphiste': 'Graphiste',
        'Edition': 'Edition',
        'Exercice de boucle d’animation 2D afin de comprendre les principes d’animation réalisé sur Toon Boom Harmony.': 'Exercice de boucle d’animation 2D afin de comprendre les principes d’animation réalisé sur Toon Boom Harmony.',
        'Exercice d’animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe réalisé sur Toon Boom Harmony.': 'Exercice d’animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe réalisé sur Toon Boom Harmony.',
        'Essai d’animation 2D courte pour essayer un style graphique plus souple sur Krita.': 'Essai d’animation 2D courte pour essayer un style graphique plus souple sur Krita.',
        'Composition originale inspirée par les derniers flocons de 2024, qui s’inscrit dans un univers d’infiltration sous tension. La progression de la musique accompagne l’avancée hypothétique d’un protagoniste indéfini à travers à dédale d’obstacles et de gardes, pour une raison qu’il ne tient qu’à vous de définir.': 'Composition originale inspirée par les derniers flocons de 2024, qui s’inscrit dans un univers d’infiltration sous tension. La progression de la musique accompagne l’avancée hypothétique d’un protagoniste indéfini à travers à dédale d’obstacles et de gardes, pour une raison qu’il ne tient qu’à vous de définir.',
        'Expérimentation musicale afin de prendre en main les outils de BandLab, notamment les effets et instruments, les multiples pistes pour créer un effet de chœurs en canon et la gestion des niveaux à travers une mélodie inspirée sur le moment.': 'Expérimentation musicale afin de prendre en main les outils de BandLab, notamment les effets et instruments, les multiples pistes pour créer un effet de chœurs en canon et la gestion des niveaux à travers une mélodie inspirée sur le moment.',
        'Toute première création musicale et composition réalisée sur BandLab. Le thème quelque peu chaotique est le fruit d’un essai à tous les niveaux.': 'Toute première création musicale et composition réalisée sur BandLab. Le thème quelque peu chaotique est le fruit d’un essai à tous les niveaux.',
        'Premier projet à la main pour apprendre les points les plus fréquemment utilisés en couture. Dimensions : 10x10 cm.': 'Premier projet à la main pour apprendre les points les plus fréquemment utilisés en couture. Dimensions : 10x10 cm.',
        'Peluche de crabe de 30 cm de large, conçu à partir d’un patron pré-existant, pour mettre en application les connaissances acquises à l’aide du coussin et me mettre au défi. Initiation à la broderie pour les détails (yeux, bouches, message sur le torse) et confrontation à de nouveaux tissus.': 'Peluche de crabe de 30 cm de large, conçu à partir d’un patron pré-existant, pour mettre en application les connaissances acquises à l’aide du coussin et me mettre au défi. Initiation à la broderie pour les détails (yeux, bouches, message sur le torse) et confrontation à de nouveaux tissus.',
        'Peluche de colibri de 15 cm, conçu à partir d’un patron original afin d’essayer les tissus que je prévoyais d’utiliser pour le projet suivant. Apprentissage de nouveaux points, d’erreur à ne pas commettre et d’autres essais plus ou moins concluant concernant la taille minimal des pièces à réaliser, comme pour le bec par exemple, sans compromettre le tissu.': 'Peluche de colibri de 15 cm, conçu à partir d’un patron original afin d’essayer les tissus que je prévoyais d’utiliser pour le projet suivant. Apprentissage de nouveaux points, d’erreur à ne pas commettre et d’autres essais plus ou moins concluant concernant la taille minimal des pièces à réaliser, comme pour le bec par exemple, sans compromettre le tissu.',
        'Dessins divers associant deux ou trois pokémon afin d’en faire une fusion aussi égale que possible, dans leurs attributs respectifs et le mélange des couleurs de chacun.': 'Dessins divers associant deux ou trois pokémon afin d’en faire une fusion aussi égale que possible, dans leurs attributs respectifs et le mélange des couleurs de chacun.',
        'Projet d’art symbolique rassemblant différents éléments associés à la vie et la mort, en une composition unique.': 'Projet d’art symbolique rassemblant différents éléments associés à la vie et la mort, en une composition unique.',
        'Rassembler en une image tout ce qui nous représente, en s’appuyant sur des questions comme : « Si j’étais une plante, je serais quoi ? », le tout au sein d’une composition réalisée avec Photoshop.': 'Rassembler en une image tout ce qui nous représente, en s’appuyant sur des questions comme : « Si j’étais une plante, je serais quoi ? », le tout au sein d’une composition réalisée avec Photoshop.',
        'Histoire mêlant deux temps de récit. D’un côté, nous explorons la création du monde selon Jérémy Drava, à travers des figures emblématiques de la série Zelda délaissée par les jeux, afin d’expliquer la chronologie sous le prisme de ces personnages oubliés. Dans un second temps, on accompagne ce même Jérémy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l’univers et celle de sa hiérarchie, alors qu’il est nommé co-auteur pour le scénario du jeu \u0027Zelda : Tears of the Kingdom\u0027.': 'Histoire mêlant deux temps de récit. D’un côté, nous explorons la création du monde selon Jérémy Drava, à travers des figures emblématiques de la série Zelda délaissée par les jeux, afin d’expliquer la chronologie sous le prisme de ces personnages oubliés. Dans un second temps, on accompagne ce même Jérémy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l’univers et celle de sa hiérarchie, alors qu’il est nommé co-auteur pour le scénario du jeu \u0027Zelda : Tears of the Kingdom\u0027.',
        'Ce projet est né dix ans plus tôt. C’est un univers riche et détaillé, allant de la création à la destruction de ce lieu chimérique. Trois histoires distinctes sont prévues pour explorer les différentes époques qui ont marqué ce monde, en plus d’autres nouvelles et documents complémentaires, tous en préparation. À l’heure actuelle, seule une poignée de personnages ont été rendu public, afin de préserver toute influence extérieure sur la trame narrative prévue pour la trilogie principale.': 'Ce projet est né dix ans plus tôt. C’est un univers riche et détaillé, allant de la création à la destruction de ce lieu chimérique. Trois histoires distinctes sont prévues pour explorer les différentes époques qui ont marqué ce monde, en plus d’autres nouvelles et documents complémentaires, tous en préparation. À l’heure actuelle, seule une poignée de personnages ont été rendu public, afin de préserver toute influence extérieure sur la trame narrative prévue pour la trilogie principale.',
        'Exploration de la question du \u0027bon dresseur\u0027 à l’aide d’un récit choral qui retrace l’histoire des jeux \u0027Pokémon Noir et Blanc\u0027, si notre personnage pouvait réellement agir d’une manière moins rigide que celle dictée par les jeux. Sous la forme d’une enquête menée par Beladonis après l’effondrement du Palais de N, ce récit a pour but de clarifier la psychologie des différents personnages présentés dans le récit d’une manière détaillée et introspective, au sein d’une histoire baignée de mystères.': 'Exploration de la question du \u0027bon dresseur\u0027 à l’aide d’un récit choral qui retrace l’histoire des jeux \u0027Pokémon Noir et Blanc\u0027, si notre personnage pouvait réellement agir d’une manière moins rigide que celle dictée par les jeux. Sous la forme d’une enquête menée par Beladonis après l’effondrement du Palais de N, ce récit a pour but de clarifier la psychologie des différents personnages présentés dans le récit d’une manière détaillée et introspective, au sein d’une histoire baignée de mystères.',
        'Petite nouvelle parodique écrite d’une traite à propos d’une journée typique d’un certain Murphy, chargé de surveiller et restreindre les conversations problématique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arrêter. Membre de la brigade de la préservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de différents personnages hauts en couleurs qui lui mènent la vie dure, au sein d’une routine qu’il subit bien malgré lui.': 'Petite nouvelle parodique écrite d’une traite à propos d’une journée typique d’un certain Murphy, chargé de surveiller et restreindre les conversations problématique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arrêter. Membre de la brigade de la préservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de différents personnages hauts en couleurs qui lui mènent la vie dure, au sein d’une routine qu’il subit bien malgré lui.',
        'Illustration sur Krita pour les versions numérique, reliée et brochée du livre de Luny Asthiers.': 'Illustration sur Krita pour les versions numérique, reliée et brochée du livre de Luny Asthiers.',
        'Mise en page sur Canva d’une couverture incluant un phœnix, ainsi que du texte qui peut être remplacé aisément pour un vrai titre et un nom d’auteur.': 'Mise en page sur Canva d’une couverture incluant un phœnix, ainsi que du texte qui peut être remplacé aisément pour un vrai titre et un nom d’auteur.',
        'Commande réalisée sur Krita à la demande d’une cliente, incluant quatre personnages et un décor simple.': 'Commande réalisée sur Krita à la demande d’une cliente, incluant quatre personnages et un décor simple.',
        'Montage réalisé sur Photoshop pour Luny Asthiers.': 'Montage réalisé sur Photoshop pour Luny Asthiers.',
        'Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers. Cette création est antérieure à mes études en graphisme.': 'Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers. Cette création est antérieure à mes études en graphisme.',
        'Communication illustrée pour l’occasion de la sortie de Wandel en octobre 2024.': 'Communication illustrée pour l’occasion de la sortie de Wandel en octobre 2024.',
        'Mise en avant d’une citation de Hamlet avec des visuels et d’une mise en page attirante sur Canva.': 'Mise en avant d’une citation de Hamlet avec des visuels et d’une mise en page attirante sur Canva.',
        'Mise en avant d’une citation de Harry Potter à l’école des sorciers et avec une mise en page et des visuels parlants sur Canva.': 'Mise en avant d’une citation de Harry Potter à l’école des sorciers et avec une mise en page et des visuels parlants sur Canva.',
        'Cadeau de départ pour la Mairie de Montigny-le-Bretonneux afin de pallier à la méconnaissance parfois des stagiaires qui sont placés devant le \u0027Guide Pratique de la Ville\u0027 sans connaissance préalable du logiciel InDesign. Prise d’initiative pour combler un besoin utile à la bonne continuation du projet annuel dans de bonnes conditions.': 'Cadeau de départ pour la Mairie de Montigny-le-Bretonneux afin de pallier à la méconnaissance parfois des stagiaires qui sont placés devant le \u0027Guide Pratique de la Ville\u0027 sans connaissance préalable du logiciel InDesign. Prise d’initiative pour combler un besoin utile à la bonne continuation du projet annuel dans de bonnes conditions.'
    },
    en: {
        // Project descriptions (normalized, English)
        'Exercice de boucle d\'animation 2D afin de comprendre les principes d\'animation realisé sur Toon Boom Harmony.': '2D animation loop exercise to understand animation principles, made on Toon Boom Harmony.',
'Exercice de boucle d’animation 2D afin de comprendre les principes d’animation réalisé sur Toon Boom Harmony.': '2D animation loop exercise to understand animation principles, made on Toon Boom Harmony.',
        'Exercice d\'animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe realisé sur Toon Boom Harmony.': '2D animation exercise applying acquired knowledge to a more complex creature, made on Toon Boom Harmony.',
'Exercice d’animation 2D qui met en pratique les connaissances acquises, pour les appliquer à une créature plus complexe réalisé sur Toon Boom Harmony.': '2D animation exercise applying acquired knowledge to a more complex creature, made on Toon Boom Harmony.',
        'Essai d\'animation 2D courte pour essayer un style graphique plus souple sur Krita.': 'Short 2D animation test to try a more flexible graphic style on Krita.',
        'Composition originale inspiree par les derniers flocons de 2024, qui s\'inscrit dans un univers d\'infiltration sous tension. La progression de la musique accompagne l\'avancee hypothétique d\'un protagoniste indefini a travers a dedale d\'obstacles et de gardes, pour une raison qu\'il ne tient qu\'a vous de definir.': 'Original composition inspired by the last snowflakes of 2024, set in a tense infiltration universe. The music progression accompanies the hypothetical journey of an undefined protagonist through a maze of obstacles and guards, for a reason you are free to define.',
        'Experimentation musicale afin de prendre en main les outils de BandLab, notamment les effets et instruments, les multiples pistes pour creer un effet de choeurs en canon et la gestion des niveaux a travers une melodie inspiree sur le moment.': 'Musical experimentation to get familiar with BandLab tools, especially effects and instruments, multiple tracks to create a canon choir effect and level management through an inspired melody.',
        'Toute premiere creation musicale et composition realisee sur BandLab. Le theme quelque peu chaotique est le fruit d\'un essai a tous les niveaux.': 'First ever musical creation and composition made on BandLab. The somewhat chaotic theme is the result of an experiment at all levels.',
        'Premier projet a la main pour apprendre les points les plus frequemment utilises en couture. Dimensions : 10x10 cm.': 'First hand-sewing project to learn the most frequently used stitches. Size: 10x10 cm.',
        'Peluche de crabe de 30 cm de large, concu a partir d\'un patron pre-existant, pour mettre en application les connaissances acquises a l\'aide du coussin et me mettre au defi. Initiation a la broderie pour les details (yeux, bouches, message sur le torse) et confrontation a de nouveaux tissus.': '30cm-wide crab plush, made from a pre-existing pattern, to apply the knowledge acquired with the cushion and challenge myself. Introduction to embroidery for details (eyes, mouths, message on the chest) and trying new fabrics.',
        'Peluche de colibri de 15 cm, concu a partir d\'un patron original afin d\'essayer les tissus que je prevoyais d\'utiliser pour le projet suivant. Apprentissage de nouveaux points, d\'erreur a ne pas commettre et d\'autres essais plus ou moins concluant concernant la taille minimal des pieces a realiser, comme pour le bec par exemple, sans compromettre le tissu.': '15cm hummingbird plush, made from an original pattern to try fabrics planned for the next project. Learning new stitches, mistakes to avoid, and other more or less successful attempts regarding the minimum size of pieces to make, such as the beak, without damaging the fabric.',
        'Dessins divers associant deux ou trois pokemon afin d\'en faire une fusion aussi egale que possible, dans leurs attributs respectifs et le melange des couleurs de chacun.': 'Various drawings combining two or three Pokémon to create a fusion as balanced as possible, in their respective attributes and color blending.',
        'Projet d\'art symbolique rassemblant differents elements associes a la vie et la mort, en une composition unique.': 'Symbolic art project bringing together different elements associated with life and death, in a unique composition.',
        'Rassembler en une image tout ce qui nous represente, en s\'appuyant sur des questions comme : "Si j\'etais une plante, je serais quoi ?", le tout au sein d\'une composition realisee avec Photoshop.': 'A symbolic drawing that brings together everything that represents us, based on personal questions, in a unique composition made with Photoshop.',
        'Histoire melant deux temps de recit. D\'un cote, nous explorons la creation du monde selon Jeremy Drava, a travers des figures emblematiques de la serie Zelda delaissée par les jeux, afin d\'expliquer la chronologie sous le prisme de ces personnages oublies. Dans un second temps, on accompagne ce meme Jeremy dans son quotidien chez Nintendo, qui lutte entre sa vision personnelle de l\'univers et celle de sa hierarchie, alors qu\'il est nomme co-auteur pour le scenario du jeu "Zelda : Tears of the Kingdom".': 'Story mixing two timelines. On one side, we explore the creation of the world according to Jeremy Drava, through emblematic figures from the Zelda series left out by the games, to explain the chronology through the lens of these forgotten characters. On the other, we follow Jeremy in his daily life at Nintendo, struggling between his personal vision of the universe and that of his hierarchy, as he is appointed co-author for the scenario of "Zelda: Tears of the Kingdom".',
        'Ce projet est ne dix ans plus tot. C\'est un univers riche et detaille, allant de la creation a la destruction de ce lieu chimerique. Trois histoires distinctes sont prevues pour explorer les differentes epoques qui ont marque ce monde, en plus d\'autres nouvelles et documents complementaires, tous en preparation. A l\'heure actuelle, seule une poignee de personnages ont ete rendu public, afin de preserver toute influence exterieure sur la trame narrative prevue pour la trilogie principale.': 'This project was born ten years earlier. It is a rich and detailed universe, from the creation to the destruction of this chimerical place. Three distinct stories are planned to explore the different eras that marked this world, plus other short stories and complementary documents, all in preparation. Currently, only a handful of characters have been made public, to preserve any outside influence on the planned narrative for the main trilogy.',
        'Exploration de la question du "bon dresseur" a l\'aide d\'un recit choral qui retrace l\'histoire des jeux "Pokemon Noir et Blanc", si notre personnage pouvait reellement agir d\'une maniere moins rigide que celle dictee par les jeux. Sous la forme d\'une enquete menee par Beladonis apres l\'effondrement du Palais de N, ce recit a pour but de clarifier la psychologie des differents personnages presentes dans le recit d\'une maniere detaillee et introspective, au sein d\'une histoire baignee de mysteres.': 'Exploring the question of the "good trainer" through a choral narrative that retraces the story of the games "Pokémon Black and White", if our character could really act less rigidly than dictated by the games. As an investigation led by Beladonis after the collapse of N’s Castle, this story aims to clarify the psychology of the different characters in a detailed and introspective way, in a mystery-filled story.',
        'Petite nouvelle parodique ecrite d\'une traite a propos d\'une journee typique d\'un certain Murphy, charge de surveiller et restreindre les conversations problematique de personnes suspectes, afin de rassembler assez de preuves pour pouvoir les arreter. Membre de la brigade de la preservation des insectes, Murphy est un agent qui vit dans un manoir en compagnie de differents personnages hauts en couleurs qui lui menent la vie dure, au sein d\'une routine qu\'il subit bien malgre lui.': 'Short parody written in one go about a typical day of a certain Murphy, in charge of monitoring and restricting problematic conversations of suspicious people, to gather enough evidence to arrest them. Member of the insect preservation brigade, Murphy is an agent living in a mansion with various colorful characters who make his life difficult, in a routine he endures despite himself.',
        'Illustration sur Krita pour les versions numerique, reliee et brochee du livre de Luny Asthiers.': 'Illustration on Krita for the digital, hardcover and paperback versions of Luny Asthiers’ book.',
        'Mise en page sur Canva d\'une couverture incluant un phoenix, ainsi que du texte qui peut etre remplace aisement pour un vrai titre et un nom d\'auteur.': 'Layout on Canva of a cover including a phoenix, as well as text that can be easily replaced for a real title and author name.',
        'Commande realisee sur Krita a la demande d\'une cliente, incluant quatre personnages et un decor simple.': 'Commission made on Krita for a client, including four characters and a simple background.',
        'Montage realise sur Photoshop pour Luny Asthiers.': 'Montage made on Photoshop for Luny Asthiers.',
        'Conception de Aster (le renard) et mise en situation de celui-ci sur Krita selon les demandes de Luny Asthiers. Cette creation est anterieure a mes etudes en graphisme.': 'Design of Aster (the fox) and its placement on Krita according to Luny Asthiers’ requests. This creation predates my graphic design studies.',
        'Communication illustree pour l\'occasion de la sortie de Wandel en octobre 2024.': 'Illustrated communication for the release of Wandel in October 2024.',
        'Mise en avant d\'une citation de Hamlet avec des visuels et d\'une mise en page attirante sur Canva.': 'Highlighting a Hamlet quote with visuals and an attractive layout on Canva.',
        'Mise en avant d\'une citation de Harry Potter a l\'ecole des sorciers et avec une mise en page et des visuels parlants sur Canva.': 'Highlighting a quote from Harry Potter and the Philosopher’s Stone with a compelling layout and visuals on Canva.',
        'Cadeau de depart pour la Mairie de Montigny-le-Bretonneux afin de pallier a la meconnaissance parfois des stagiaires qui sont places devant le "Guide Pratique de la Ville" sans connaissance prealable du logiciel InDesign. Prise d\'initiative pour combler un besoin utile a la bonne continuation du projet annuel dans de bonnes conditions.': 'Farewell gift for the Montigny-le-Bretonneux City Hall to address the lack of knowledge sometimes faced by interns who are given the "City Practical Guide" without prior knowledge of InDesign. Initiative to fill a useful need for the smooth continuation of the annual project in good conditions.',
        'CÉLIA PÉTILLION': 'CELIA PETILLION',
        'Edition': 'Editorial Assistant',
        'Graphiste': 'Graphic Designer',
        'Curriculum Vitae': 'Curriculum Vitae',
        'Portfolio': 'Portfolio',
        'LinkedIn': 'LinkedIn',
        'Animée depuis toujours par une passion pour le dessin et la littérature, je suis à la recherche d\'une alternance d\'une durée d’un an, au rythme de 3 semaines en entreprise et 1 semaine à l\'école.':
          'Driven by a lifelong passion for drawing and literature, I am seeking a one-year apprenticeship with a schedule of 3 weeks in a company and 1 week at school.',
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