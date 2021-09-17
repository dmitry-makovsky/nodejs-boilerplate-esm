import { randomInt } from 'crypto';

export default async (from = 0, to = 50000) => {
  const randomNumber = await randomInt(from, to);
  return randomNumber.toString().padStart(6, '0');
};
