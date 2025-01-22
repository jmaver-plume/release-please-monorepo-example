/**
 * Sum numbers
 * @param {number[]} args - numbers
 */
export function sum(...args: number[]): number {
  return args.reduce((acc, value) => acc + value, 0);
}
