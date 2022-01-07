export class DtoAverageSession {
  /**
   * Create an AvergaeSession
   * @param {Number} day 
   * @param {Number} sessionLength 
   * @returns {DtoAverageSession}
   */
  constructor(day, sessionLength){
    this.day = day;
    this.sessionLength = sessionLength;
  }
}