class ExcelTask {
  /**
   * ConvertStringColumnToNumber method used to convert a
   * string value for an excel column into a number value
   * @param {String} columnStringVal
   * @returns Number
   */
  static ConvertStringColumnToNumber(columnStringVal) {
    if (
      !columnStringVal ||
      (columnStringVal && typeof columnStringVal !== 'string')
    ) {
      throw Error(
        '[ExcelTask][ConvertStringColumnToNumber][There is no string value passed]'
      );
    }

    if (columnStringVal.length === 0) {
      throw Error(
        '[ExcelTask][ConvertStringColumnToNumber][String value must have at least one letter]'
      );
    }

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
    if (
      !columnNumberVal ||
      (columnNumberVal && typeof columnNumberVal !== 'number')
    ) {
      throw Error(
        '[ExcelTask][ConvertNumberToString][There is no number value passed]'
      );
    }

    if (columnNumberVal === 0) {
      throw Error(
        '[ExcelTask][ConvertNumberToString][Number value must be greather than 0]'
      );
    }
    let stringRet = '',
      divider,
      rest;
    while (columnNumberVal > 0) {
      // 1. Finde the divider
      divider = (columnNumberVal - 1) / 26;

      // 2. Find the rest
      rest = (columnNumberVal - 1) % 26;

      // 3. Floor the divider
      columnNumberVal = Math.floor(divider);

      // 4. Calculate the string based on all data
      stringRet = String.fromCharCode(65 + rest) + stringRet;
    }
    return stringRet;
  }
}

export default ExcelTask;
