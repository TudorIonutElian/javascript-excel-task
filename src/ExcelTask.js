class ExcelTask {
  /**
   * ConvertStringColumnToNumber method used to convert a
   * string value for an excel column into a number value
   * @param {String} columnStringVal
   * @returns Number
   */
  static ConvertStringColumnToNumber(columnStringVal) {
    let num = 0;
    let i = 0;

    while (i < columnStringVal.length) {
      num = columnStringVal[i].charCodeAt(0) - 64 + num * 26;
      i++;
    }
    return num;
  }

  /**
   * ConvertNumberToString method used to convert a
   * number value for an excel column into a string value
   * @param {String} columnStringVal
   * @returns Number
   */
  static ConvertNumberToString(columnNumberVal) {
    let stringRet = '',
      q,
      r;
    while (columnNumberVal > 0) {
      q = (columnNumberVal - 1) / 26;
      r = (columnNumberVal - 1) % 26;
      columnNumberVal = Math.floor(q);
      stringRet = String.fromCharCode(65 + r) + str;
    }
    return stringRet;
  }
}

export default ExcelTask;
