# Sparring Partner Front

## Description
Sparring Partner App est une application web conçue pour aider les pratiquants de sports de combat à trouver des partenaires de sparring locaux correspondant à leur niveau de compétence et leurs intérêts. Cette application utilise React pour le frontend et Python avec des services AWS pour le backend.

## Fonctionnalités
- **Enregistrement et Authentification des Utilisateurs** : Les utilisateurs peuvent créer leur compte et se connecter.
- **Création et Gestion de Profil** : Les utilisateurs peuvent ajouter et modifier des informations de profil, telles que leur niveau de compétence, poids, etc.
- **Recherche de Partenaires de Sparring** : Recherche basée sur différents critères pour trouver des partenaires appropriés.

## Technologies Utilisées
- **Frontend** :
  - React.js
- **Backend** :
  - Python
  - AWS Lambda, API Gateway, DynamoDB, S3

## Installation

### Prérequis
- Node.js et npm
- Un compte AWS

### Configuration du Backend
1. Configurez les services AWS (Lambda, DynamoDB, API Gateway, S3) conformément aux instructions fournies dans la documentation AWS.
2. Déployez les fonctions Lambda et configurez les tables DynamoDB nécessaires.

### Mise en Place du Frontend
```bash
# Clonez le dépôt
git clone https://example.com/sparring-partners-app.git
cd sparring-partners-app

# Installez les dépendances
npm install

# Lancez l'application en mode développement
npm start
```

## Utilisation
Après avoir lancé l'application, naviguez dans l'interface utilisateur pour vous enregistrer, créer et modifier votre profil, et rechercher des partenaires de sparring.

## Contribution
Les contributions à ce projet sont les bienvenues. Si vous souhaitez contribuer, veuillez suivre les étapes suivantes :
1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence
Incluez des informations sur la licence ici, si applicable.

---

N'oubliez pas de remplacer les liens, les commandes et les détails spécifiques à votre projet. Ce README donne un point de départ pour documenter votre application de manière claire et concise.