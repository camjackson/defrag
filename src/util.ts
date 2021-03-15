export const sum = (numbers: number[]): number =>
  numbers.reduce((total, num) => total + num, 0);

export const randomRange = (min: number, max: number): number => {
  const range = max - min;

  return Math.floor(Math.random() * range) + min;
};
