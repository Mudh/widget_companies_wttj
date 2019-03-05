# Widget "Companies" de Welcome to the jungle

## Installation

Pour installer et lancer le widget, il faut, au préalable, installer le gestionnaire de packages "yarn" sur votre os ([Linux](https://yarnpkg.com/fr/docs/install#debian-stable), [Mac](https://yarnpkg.com/fr/docs/install#mac-stable) ou [Windows](https://yarnpkg.com/fr/docs/install#windows-stable)).

Une fois "yarn" installé, cliquez sur le bouton vert (en haut à droite de la page du repo github) "**Clone or download**" puis "**Download zip**".
Placer l'archive dans dossier de votre choix et désarchiver la.

Puis lancer un terminal/git bash et rendez-vous à l'interieur de votre dossier afin de naviguez dans le dossier du widget depuis le terminal:

```
cd monDossier/widget_companies_wttj-master/frontoffice/
```

Une fois dans "**monDossier/widget_companies_wttj-master/frontoffice/**", toujours depuis le terminal lancer la commande:

```
yarn
```

puis

```
yarn start
```

Webpack devrait lancer automatiquement votre navigateur par defaut avec cette adresse locale (si ce n'est pas le cas cliquez sur le lien ci-dessous):

**http://localhost:8080/embed?columns=3&rows=2**

Vous pourrez par la suite modifier directement les paramètres de colonnes et de rangs directement dans la barre d'adresse de votre navigateur à la fin de l'url (**?columns=3&rows=2**), par exemple avec 4 colonnes et 3 rangs:

**http://localhost:8080/embed?columns=4&rows=3**

## Screenshots

![subscribe](screenshot_3x2.jpg)

![subscribe](screenshot_3x3.jpg)

## Notes d'intentions

J'aurai aimé faire le widget en full "styled component" mais j'ai joué la sécurité et utilisé sass car je voulais me concentrer sur le reste du widget (j'en ai, tout de même, utilisé à 2 endroits). Pour allez plus loin j'aurai aimé utilisé une véritable API et pourquoi pas créer un formulaire ui (comme sur le site) au lieu de passer par l'url pour modifier le widget!
