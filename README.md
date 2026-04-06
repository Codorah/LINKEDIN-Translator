# LinkedIn Langue Translator

Prototype de generateur de posts "langage LinkedIn" satirique, multilingue et base sur des personas.

## Ce que fait ce MVP

- transforme une phrase simple en post LinkedIn parodique
- permet de choisir une langue source, une langue de sortie, une persona et une tonalite
- genere aussi un masque de prompt pour brancher un vrai LLM plus tard
- fonctionne sans dependances externes

## Logique produit

Le "langage LinkedIn" n'est pas une traduction mot a mot. C'est une transformation de style:

1. un hook dramatique
2. une reformulation corporate d'un evenement banal
3. une mini lecon de leadership, de croissance ou de mindset
4. une question finale pour l'engagement
5. une ligne de hashtags

## Structure

- `server.js`: serveur HTTP et API
- `src/data/personas.js`: langues, personas et banques de phrases
- `src/lib/translator.js`: moteur local de transformation
- `src/lib/prompt-builder.js`: masque prompt pour un vrai modele
- `public/index.html`: interface
- `public/styles.css`: style
- `public/app.js`: logique client

## Lancer le projet

```bash
node server.js
```

Puis ouvrir `http://localhost:3000`.

## Etape suivante conseillee

Brancher un LLM via une route serveur securisee pour obtenir:

- une meilleure traduction inter-langues
- des posts plus fins selon le contexte
- plusieurs variantes par clic
