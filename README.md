# Portfolio — Nathan Degorce

Portfolio professionnel de développeur Front-End junior, réalisé dans le cadre du projet de fin de formation OpenClassrooms.

**Démo en ligne** : à venir (déploiement GitHub Pages)

## Approche technique

Développement **Full-Code**, en HTML/CSS/JavaScript vanilla (aucun framework).

Ce choix est volontaire : le site est majoritairement statique, il n'y avait donc pas de besoin technique justifiant un framework comme React. Rester en vanilla permet de garder un contrôle total sur le SEO (tout le contenu est présent dans le HTML dès le chargement, sans rendu JavaScript côté client) et sur l'accessibilité, tout en démontrant la maîtrise des fondamentaux du langage.

## Stack

- HTML5 sémantique
- CSS3 (variables CSS, Flexbox, Grid)
- JavaScript ES6+ (vanilla, aucune dépendance)
- Police : [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## Fonctionnalités

- Navigation one-page par ancres, avec mise en évidence du lien actif au scroll
- Menu responsive (desktop / tablette / mobile)
- Filtre des projets par catégorie (personnel / formation)
- Fiches projet détaillées et dépliables (contexte, objectifs, stack, compétences développées, résultats, perspectives d'amélioration)
- Formulaire de contact avec validation côté client
- Animation d'apparition au scroll, respectant `prefers-reduced-motion`

## Accessibilité

- Structure HTML sémantique (`main`, `nav`, `section`, `footer`)
- Lien d'évitement ("skip link")
- Focus clavier visible sur tous les éléments interactifs
- Formulaire avec labels associés et messages d'erreur explicites (`aria-invalid`, `role="alert"`)
- Respect de `prefers-reduced-motion` pour les animations
- Audité avec axe-core (0 violation, 41 vérifications passées) : un problème de contraste insuffisant sur les boutons principaux a été détecté et corrigé

## Lancer le projet en local

Aucune dépendance ni installation nécessaire : c'est un site statique.

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Projets présentés

- **Dedalofus** (projet personnel) — [github.com/pataupe/Dedalofus](https://github.com/pataupe/Dedalofus)
- **Site vitrine — Architecte d'intérieur** (projet de formation) — [github.com/pataupe/Site-Sophie-Bluel](https://github.com/pataupe/Site-Sophie-Bluel)
- **Kasa** (projet de formation) — [github.com/pataupe/Kasa](https://github.com/pataupe/Kasa)
