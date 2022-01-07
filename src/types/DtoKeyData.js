export class DtoKeyData {
  /**
   * Create a KeyData
   * @param {Number} calorieCount 
   * @param {Number} proteinCount 
   * @param {Number} carbohydrateCount 
   * @param {Number} lipidCount 
   * @returns {DtoKeyData}
   */
  constructor(calorieCount, proteinCount, carbohydrateCount, lipidCount){
    this.calorieCount = calorieCount;
    this.proteinCount = proteinCount;
    this.carbohydrateCount = carbohydrateCount;
    this.lipidCount = lipidCount;
  }
}