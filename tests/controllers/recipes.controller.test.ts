import request from 'supertest';
import express from 'express';
import { recipesRouter } from '../../src/routes/recipes.route';

const app = express();
app.use(express.json());
app.use('/', recipesRouter);

describe('Recipes API', () => {

  it('should create a new recipe', async () => {
    const newRecipe = {
      title: 'Test Recipe',
      description: 'This is a test recipe',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      steps: ['Step 1', 'Step 2'],
      slug: 'test-recipe'
    };
    const response = await request(app).post('/recipes').send(newRecipe);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(newRecipe);
  });

  it('should get a recipe by slug', async () => {
    const slug = 'test-recipe';
    const response = await request(app).get(`/recipes/${slug}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      title: 'Test Recipe',
      description: 'This is a test recipe',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      steps: ['Step 1', 'Step 2'],
      slug: 'test-recipe'
    });
  });

  it('should delete a recipe', async () => {
    const slug = 'test-recipe';
    const response = await request(app).delete(`/recipes/${slug}`);
    expect(response.status).toBe(200);
  });
});