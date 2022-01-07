import {SessionAverage} from "./DtoSessionAverage"

export class DtoAverage {
    /**
   * Create an Average
   * @param {Number} userId 
   * @param {SessionAverage[]} sessions
   * @returns {SessionAverage}
   */
    constructor(userId, sessions){
      this.userId = userId;
      this.sessions = sessions;
    }
}