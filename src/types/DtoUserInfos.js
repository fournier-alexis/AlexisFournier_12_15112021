export class DtoUserInfos {
  /**
   * Create a UserInfos
   * @param {String} firstName 
   * @param {String} lastName 
   * @param {String} age
   * @returns {DtoUserInfos}
   */
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}