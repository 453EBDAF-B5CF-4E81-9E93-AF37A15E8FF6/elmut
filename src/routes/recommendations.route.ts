import express from 'express';
import { getAllRecommendations, getRecommendationByAnimalTypeAndRace, createRecommendation, updateRecommendation, deleteRecommendation } from '../controllers/recommendations.controller';

const recommendationsRouter = express.Router();

recommendationsRouter.get('/recommendations', getAllRecommendations);
recommendationsRouter.get('/recommendations/:animalType/:race', getRecommendationByAnimalTypeAndRace);
recommendationsRouter.post('/recommendations', createRecommendation);
recommendationsRouter.put('/recommendations/:animalType/:race', updateRecommendation);
recommendationsRouter.delete('/recommendations/:animalType/:race', deleteRecommendation);

export default recommendationsRouter;