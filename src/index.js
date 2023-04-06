import ExcelTask from './ExcelTask.js';

const columnStringValue = 'AA';
const numberValueFromString =
  ExcelTask.ConvertStringColumnToNumber(columnStringValue);

const numberValueForStringConversion = 702;
const stringValueFromNumber = ExcelTask.ConvertNumberToString(
  numberValueForStringConversion
);

console.log(
  `For the columnString value of ${columnStringValue}  we will have a return of ${numberValueFromString}`
);

console.log(
  `For the number value of ${numberValueForStringConversion}  we will have a return of ${stringValueFromNumber}`
);
