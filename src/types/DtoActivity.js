import {DtoSession} from "./DtoSession"

export class DtoActivity {
  /**
   * Create an Activity
   * @param {Number} userId 
   * @param {DtoSession[]} sessions
   * @returns {DtoActivity}
   */
  constructor(userId, sessions){
    this.userId = userId;
    this.sessions = sessions;
  }
}