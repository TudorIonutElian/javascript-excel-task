import { assertType, expectTypeOf, test, expect, describe, it } from 'vitest';
import ExcelTask from '../src/ExcelTask';
import CHECKED_VALUES from '../src/const/checked_values';

// Tests for --General

describe('ExcelTask', () => {
  it('[General][ExcelTask to be a class]', () => {
    expectTypeOf(ExcelTask).toBeObject();
  });

  it('[General][ConvertStringColumnToNumber][Exists]', () => {
    expectTypeOf(ExcelTask.ConvertStringColumnToNumber).toBeFunction();
  });

  it('[General][ConvertNumberToString][Exists]', () => {
    expectTypeOf(ExcelTask.ConvertNumberToString).toBeFunction();
  });
});

// Tests for ExcelTask - ConvertStringColumnToNumber
describe('ExcelTask -- ConvertStringColumnToNumber', () => {
  it('[ConvertStringColumnToNumber][ThrowError]', () => {
    expect(() => ExcelTask.ConvertNumberToString(20).toThrowError());
  });

  it('[ConvertStringColumnToNumber][Return Number]', () => {
    const convStringToNumber = ExcelTask.ConvertStringColumnToNumber('AA');
    expect(convStringToNumber).toBeTypeOf('number');
  });

  it('[ConvertStringColumnToNumber][Return Specific Number]', () => {
    const convStringToNumber = ExcelTask.ConvertStringColumnToNumber('A');
    expect(convStringToNumber).toEqual(1);
  });

  it('[ConvertStringColumnToNumber][Return Specific Number]', () => {
    const convStringToNumber = ExcelTask.ConvertStringColumnToNumber('ZZ');
    expect(convStringToNumber).toEqual(702);
  });
});

// Tests for ExcelTask - ConvertNumberToString
describe('ExcelTask -- ConvertNumberToString', () => {
  it('[ConvertNumberToString][ThrowError]', () => {
    expect(() => ExcelTask.ConvertNumberToString('20').toThrowError());
  });

  it('[ConvertNumberToString][Return String]', () => {
    const convNumberToString = ExcelTask.ConvertNumberToString(702);
    expect(convNumberToString).toBeTypeOf('string');
  });

  it('[ConvertNumberToString][Return Specific String]', () => {
    const convNumberToString = ExcelTask.ConvertNumberToString(702);
    expect(convNumberToString).toEqual('ZZ');
  });
});
