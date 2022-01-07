export class DtoSession {
  /**
   * Create a Session
   * @param {String} day 
   * @param {Number} kilogram 
   * @param {Number} calories 
   * @returns {DtoSession}
   */
  constructor(day, kilogram, calories){
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }
}