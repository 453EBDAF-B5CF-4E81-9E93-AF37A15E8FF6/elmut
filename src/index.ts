import express, { Request, Response } from 'express';
import { recipesRouter } from './routes/recipes.route';
import recommendationsRouter from './routes/recommendations.route'; 

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Elmut Pets API Test');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(express.json());

app.use(recipesRouter);

app.use(recommendationsRouter);

app.use((req: Request, res: Response, next: Function) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;