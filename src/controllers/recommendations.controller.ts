// recommendations.controller.ts
import { Request, Response } from 'express';
import { Recommendation } from '../models/recommendation.model';
import { RecommendationDAO } from '../dal/recommendation.dao';

const recommendationDAO = new RecommendationDAO();

const getAllRecommendations = (req: Request, res: Response) => {
  const recommendations = recommendationDAO.getAllRecommendations();
  res.json(recommendations);
};

const getRecommendationByAnimalTypeAndRace = (req: Request, res: Response) => {
  const animalType = req.params.animalType;
  const race = req.params.race;
  const recommendation = recommendationDAO.getRecommendationByAnimalTypeAndRace(animalType, race);
  if (recommendation) {
    res.json(recommendation);
  } else {
    res.status(404).json({ error: 'Recommendation not found' });
  }
};

const createRecommendation = (req: Request, res: Response) => {
  const newRecommendation: Recommendation = req.body;
  recommendationDAO.addRecommendation(newRecommendation);
  res.status(201).json(newRecommendation);
};

const updateRecommendation = (req: Request, res: Response) => {
  const animalType = req.params.animalType.toLowerCase(); // Convertir en minuscules
  const race = req.params.race;
  const updatedRecommendation: Recommendation = req.body;

  if (animalType !== 'dog' && animalType !== 'cat') {
    return res.status(400).json({ error: 'Invalid animal type' });
  }

  const success = recommendationDAO.updateRecommendation({ ...updatedRecommendation, animalType, race });
  if (success) {
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Recommendation not found' });
  }
};


const deleteRecommendation = (req: Request, res: Response) => {
  const animalType = req.params.animalType.toLowerCase(); // Convertir en minuscules
  const race = req.params.race;

  if (animalType !== 'dog' && animalType !== 'cat') {
    return res.status(400).json({ error: 'Invalid animal type' });
  }

  const success = recommendationDAO.deleteRecommendation(animalType, race);
  if (success) {
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Recommendation not found' });
  }
};

export {
  getAllRecommendations,
  getRecommendationByAnimalTypeAndRace,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
};