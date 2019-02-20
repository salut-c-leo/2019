# [2019](https://2019.mrtino.eu)
Site listant les programmes des principaux partis aux élections européennes de 2019.

# Fonctionnement du site
Le programme de chaque parti est écrit dans un fichier spécifique, dans le dossier `programmes`. Il est rédigé en Markdown pour faciliter la rédaction. Pour la conversion en HTML, `pandoc` est utilisé et appelé via le script `convert.sh` présent dans le dossier.
`candidats.js` (dans `js/leia`) charge le fichier HTML correspondant au parti auquel on souhaite obtenir plus d'informations (via le bouton "Dérouler"). Il permet aussi de replier la page pour éviter d'avoir une page faisant un kilomètre.
`index.html` contient un compte-à-rebours réglé sur le 26 mai 2019 (date des élections européennes en France). Évidemment, il conviendra de le désactiver une fois la date dépassée (en enlevant toute mention du script dans le fichier).

# Comment contribuer ?
Vous pouvez contribuer en signalant des problèmes ou des suggestions dans la partie "Issues" de ce dépôt. Vous pouvez également forker le dépôt, faire vos modifications et faire une "pull request" pour que vos modifications soient intégrées ici.
Si vous voulez rédiger une synthèse du programme d'un parti, `programmes/lfi.md` est une bonne base pour comprendre comment harmoniser votre synthèse avec les autres.

# À faire

* Rendre l'interface un peu plus agréable à lire sur smartphone
* Ajouter les programmes dès qu'ils sortiront

# LICENCES
Le contenu du dossier `programmes` est sous licence Creative Commons Attribution 4.0. Si vous réutilisez mon contenu, vous devez créditer "mrtino" et fournir un lien vers [2019](https://2019.mrtino.eu) ou ce dépôt.
`style.css` (trouvable dans `css/leia/`) est soumis à la Unlicense et est donc dans le domaine public.
`candidats.js` (trouvable dans `js/leia/`) est sous licence MIT.
Le template Grayscale (dossier `css`) est sous licence MIT. Les images utilisées sur le site sont créditées en bas de page et sont sous licence Creative Commons Attribution-Share-Alike 4.0 (dossier `img`).
Toutes les licences sont disponibles à la lecture dans les dossiers cités.
