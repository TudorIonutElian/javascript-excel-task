import { assertType, expectTypeOf, test, expect } from 'vitest';
import ExcelTask from '../src/ExcelTask';

// Tests for --General
test('ExcelTask to be a class', () => {
  expectTypeOf(ExcelTask).toBeObject();
});

test('ExcelTask -- ConvertStringColumnToNumber to exists', () => {
  expectTypeOf(ExcelTask.ConvertStringColumnToNumber).toBeFunction();
});

test('ExcelTask -- ConvertStringColumnToNumber to exists', () => {
  expectTypeOf(ExcelTask.ConvertNumberToString).toBeFunction();
});

// Tests for ExcelTask - ConvertStringColumnToNumber
test('ExcelTask -- ConvertStringColumnToNumber to throw', () => {
  expect(() => ExcelTask.ConvertNumberToString(20).toThrowError());
});

test('ExcelTask -- ConvertStringColumnToNumber to return number', () => {
  const convStringToNumber = ExcelTask.ConvertStringColumnToNumber('AA');
  expect(convStringToNumber).toBeTypeOf('number');
});

test('ExcelTask -- ConvertStringColumnToNumber to return specific number', () => {
  const convStringToNumber = ExcelTask.ConvertStringColumnToNumber('A');
  expect(convStringToNumber).toEqual(1);
});
