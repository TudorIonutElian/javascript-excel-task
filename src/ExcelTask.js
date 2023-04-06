class ExcelTask {
  /**
   * ConvertStringColumnToNumber method used to convert a
   * string value for an excel column into a number value
   * @param {String} columnStringVal
   * @returns Number
   */
  static ConvertStringColumnToNumber(columnStringVal) {
    const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let i,
      j,
      result = 0;

    for (
      i = 0, j = columnStringVal.length - 1;
      i < columnStringVal.length;
      i += 1, j -= 1
    ) {
      result +=
        Math.pow(base.length, j) * (base.indexOf(columnStringVal[i]) + 1);
    }

    return result;
  }

  /**
   * ConvertNumberToString method used to convert a
   * number value for an excel column into a string value
   * @param {String} columnStringVal
   * @returns Number
   */
  static ConvertNumberToString(columnStringVal) {}
}

export default ExcelTask;
