import express from 'express';
import { getRecipes, getRecipeBySlug, createRecipe, updateRecipe, deleteRecipe } from '../controllers/recipes.controller';

const recipesRouter = express.Router();

recipesRouter.get('/recipes', getRecipes);
recipesRouter.get('/recipes/:slug', getRecipeBySlug);
recipesRouter.post('/recipes', createRecipe);
recipesRouter.put('/recipes/:slug', updateRecipe);
recipesRouter.delete('/recipes/:slug', deleteRecipe);

export { recipesRouter };