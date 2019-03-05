# Widget "Companies" de Welcome to the jungle

## Installation

Pour installer et lancer le widget, il faut au préalable installer le gestionnaire de packages "yarn" sur votre os ([Linux](https://yarnpkg.com/fr/docs/install#debian-stable), [Mac](https://yarnpkg.com/fr/docs/install#mac-stable) ou [Windows](https://yarnpkg.com/fr/docs/install#windows-stable)).

Ensuite cliquez sur le bouton vert (en haut à droite) "**Clone or download**" puis "**Download zip**".
Placer le zip dans dossier de votre choix et dezipper le.

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

Webpack devrait lancer automatiquement votre navigateur par defaut avec cette adresse locale:

**http://localhost:8080/embed?columns=3&rows=2**

Vous pourrez par la suite modifier directement les paramètres de colonnes et de rangs directement dans la fin de l'url (**?columns=3&rows=2**) par exemple avec 4 colonnes et 3 rangs:

**http://localhost:8080/embed?columns=4&rows=3**

## Notes d'intentions

J'aurai aimé faire le widget en full "styled component" mais j'ai joué la sécurité et utilisé sass car je voulais me concentrer sur le reste du widget (j'en ai, tout de même, utilisé à 2 endroits). Pour allez plus loin j'aurai aimé utilisé une véritable API et pourquoi pas créer un formulaire ui (comme sur le site) au lieu de passer par l'url !
