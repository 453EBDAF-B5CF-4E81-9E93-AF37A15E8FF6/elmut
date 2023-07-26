import { Recipe } from '../models/recipe.model';

const recipesData: Recipe[] = [
  { slug: 'pork', animalType: 'dog', recipeName: 'pork', coefficientCalorifique: 1000 },
  { slug: 'fish', animalType: 'cat', recipeName: 'fish', coefficientCalorifique: 800 },
  { slug: 'turkey', animalType: 'dog', recipeName: 'turkey', coefficientCalorifique: 1200 },
  { slug: 'chicken', animalType: 'cat', recipeName: 'chicken', coefficientCalorifique: 900 },
];

export class RecipeDAO {
  getAllRecipes() {
    return recipesData;
  }

  getRecipeBySlug(slug: string) {
    return recipesData.find((recipe) => recipe.slug === slug);
  }

  addRecipe(recipe: Recipe) {
    recipesData.push(recipe);
  }

  updateRecipe(updatedRecipe: Recipe) {
    const index = recipesData.findIndex((recipe) => recipe.slug === updatedRecipe.slug);
    if (index !== -1) {
      recipesData[index] = updatedRecipe;
      return true;
    }
    return false;
  }

  deleteRecipe(slug: string) {
    const index = recipesData.findIndex((recipe) => recipe.slug === slug);
    if (index !== -1) {
      recipesData.splice(index, 1);
      return true;
    }
    return false;
  }
}