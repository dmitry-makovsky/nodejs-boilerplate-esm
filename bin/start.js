#!/usr/bin/env node
import random from '../index.js';

(async () => {
  const result = await random();
  console.log(result);
})();
