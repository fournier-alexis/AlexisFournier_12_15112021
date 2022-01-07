import {DtoUserInfos} from "./DtoUserInfos"
import {DtoKeyData} from "./DtoKeyData"

export class DtoUser {
  /**
   * Create a user
   * @param {Number} id 
   * @param {DtoUserInfos} userInfos 
   * @param {Number} todayScore 
   * @param {Number} score 
   * @param {DtoKeyData} keyData 
   * @returns {DtoUser}
   */
  constructor(id, userInfos, todayScore, score, keyData){
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore || score;
    this.keyData = keyData;
  }
}