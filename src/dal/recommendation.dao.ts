import { Recommendation } from '../models/recommendation.model';

// Simulation de la base de données statique pour les recommandations
const recommendationsData: Recommendation[] = [
  new Recommendation('dog', 'golden retriever', 'Dry food', 100),
  new Recommendation('cat', 'persian', 'Wet food', 120),
  new Recommendation('dog', 'german shepherd', 'Dry food', 150),
  new Recommendation('cat', 'siamese', 'Wet food', 130),
];

export class RecommendationDAO {
  // Méthode pour obtenir toutes les recommandations
  getAllRecommendations(): Recommendation[] {
    return recommendationsData;
  }

  // Méthode pour obtenir une recommandation par animalType et race
  getRecommendationByAnimalTypeAndRace(animalType: string, race: string): Recommendation | undefined {
    return recommendationsData.find(
      (recommendation) => recommendation.animalType === animalType && recommendation.race === race
    );
  }

  // Méthode pour ajouter une nouvelle recommandation
  addRecommendation(recommendation: Recommendation): void {
    recommendationsData.push(recommendation);
  }

  // Méthode pour mettre à jour une recommandation existante
  updateRecommendation(recommendation: Recommendation): boolean {
    const index = recommendationsData.findIndex(
      (rec) => rec.animalType === recommendation.animalType && rec.race === recommendation.race
    );
    if (index !== -1) {
      recommendationsData[index] = recommendation;
      return true;
    }
    return false;
  }

  // Méthode pour supprimer une recommandation par animalType et race
  deleteRecommendation(animalType: 'dog' | 'cat', race: string): boolean {
    const index = recommendationsData.findIndex((recommendation) => recommendation.animalType === animalType && recommendation.race === race);
    if (index !== -1) {
      recommendationsData.splice(index, 1);
      return true;
    }
    return false;
  }
}
