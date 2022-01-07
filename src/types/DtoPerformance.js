export class DtoPerformance {
  /**
   * Create a Performance
   * @param {Number} userId 
   * @param {{[Number]: String}} kind 
   * @param {{value: Number, kind: Number}} data
   * @returns {DtoPerformance} 
   */
  constructor(userId, kind, data){
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}