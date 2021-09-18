import { test, expect } from '@jest/globals';
import random from '../src/random.js';

test('should be random', () => {
  const firstRandomValue = random();
  const secondRandomValue = random();

  expect(firstRandomValue).not.toBe(secondRandomValue);
});
