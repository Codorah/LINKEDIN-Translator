# Plan produit

## Vision

Creer un outil qui transforme une phrase ordinaire en post LinkedIn satirique, dans plusieurs langues, avec plusieurs personnages types de LinkedIn.

## MVP

- entree texte libre
- langues: francais, anglais, espagnol
- personas: fondateur, recruteur, coach, createur
- tonalite: fun, propre, absurde
- sortie courte, copiable, optimisee pour l'effet "voir plus"
- prompt de base pour brancher une IA reelle

## Pourquoi ca peut marcher

- c'est un format deja reconnaissable et partageable
- la satire du jargon corporate est facile a comprendre
- les personas permettent d'augmenter la rejouabilite
- le multilingue elargit vite l'audience

## Architecture conseillee ensuite

### Phase 1

UI simple + moteur local pour tester le concept et l'experience.

### Phase 2

Ajout d'une API LLM avec:

- prompt systeme stable
- detection d'intention
- generation de 3 variantes
- garde-fous contre la sortie trop longue

### Phase 3

Ajout de:

- historique local
- partage
- analytics
- profils publics de personas
