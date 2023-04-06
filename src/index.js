import ExcelTask from './ExcelTask.js';

const columnStringValue = 'AA';
const numberValueFromString =
  ExcelTask.ConvertStringColumnToNumber(columnStringValue);

console.log(
  `For the columnString value of ${columnStringValue}  we will have a return of ${numberValueFromString}`
);
