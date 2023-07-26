# Elmut

Elmut is an API for managing recipes and recommendations for pets.


## Description

Elmut is an API developed using Node.js, Express, and TypeScript. The API allows for the management of recipes for pets and recommendations for their feeding based on their type and breed.

## Technologies utilisées

- Node.js
- Express
- TypeScript
- Jest

## Installation

```Yarn```

## Usage

```yarn start```

# Routes
## Recipes

  - Get all recipes: `GET /recipes`
  - Get a recipe by its slug: `GET /recipes/:slug`
  - Create a new recipe: `POST /recipes`
  - Update a recipe by its slug: `PUT /recipes/:slug`
  - Delete a recipe by its slug: `DELETE /recipes/:slug`

## Recommendations

  - Get all recommendations: `GET /recommendations`
  - Get a recommendation by animal type and race: `GET /recommendations/:animalType/:race`
  - Create a new recommendation: `POST /recommendations`
  - Update a recommendation by animal type and race: `PUT /recommendations/:animalType/:race`
  - Delete a recommendation by animal type and race: `DELETE /recommendations/:animalType/:race`