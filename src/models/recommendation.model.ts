export class Recommendation {
  public animalType: 'dog' | 'cat';
  public race: string;
  public foodType: string;
  public coefficientCalorique: number;

  constructor(animalType: 'dog' | 'cat', race: string, foodType: string, coefficientCalorique: number) {
    this.animalType = animalType;
    this.race = race;
    this.foodType = foodType;
    this.coefficientCalorique = coefficientCalorique;
  }
}