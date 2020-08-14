import 'jest-canvas-mock';
import Hero from '../characters/ninja';

jest.mock('../characters/ninja');

let ninjaTest;

beforeEach(() => {
  ninjaTest = new Hero('MainScene', 200, 300, 'ninjaIdle');
});

test('expect hero to be an object', () => {
  expect(typeof ninjaTest).toBe('object');
});

test('Not to be undefined after be instantiated', () => {
  expect(typeof ninjaTest).not.toBe(undefined);
});

test('Expect constructor to be called when a new hero is created', () => {
  expect(Hero).toHaveBeenCalled();
});