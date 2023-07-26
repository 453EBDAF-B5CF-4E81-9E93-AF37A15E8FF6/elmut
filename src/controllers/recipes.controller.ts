import express, { Request, Response } from 'express';
import { Recipe } from '../models/recipe.model';
import { RecipeDAO } from '../dal/recipe.dao';

const recipeDAO = new RecipeDAO();

export const getRecipes = (req: Request, res: Response) => {
  const recipes = recipeDAO.getAllRecipes();
  res.json(recipes);
};

export const getRecipeBySlug = (req: Request, res: Response) => {
  const slug = req.params.slug;
  const recipe = recipeDAO.getRecipeBySlug(slug);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
};

export const createRecipe = (req: Request, res: Response) => {
  const newRecipe: Recipe = req.body;
  recipeDAO.addRecipe(newRecipe);
  res.status(201).json(newRecipe);
};

export const updateRecipe = (req: Request, res: Response) => {
  const slug = req.params.slug;
  const updatedRecipe: Recipe = req.body;
  const success = recipeDAO.updateRecipe({ ...updatedRecipe, slug });
  if (success) {
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
};

export const deleteRecipe = (req: Request, res: Response) => {
  const slug = req.params.slug;
  const success = recipeDAO.deleteRecipe(slug);
  if (success) {
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
};