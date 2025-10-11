// Function Expression
export const add = function (a: number, b: number): number {
  return a + b;
};

// Arrow Function
export const multiply = (a: number, b: number): number => a * b;

// Function Declaration
export function subtract(a: number, b: number): number {
  return a - b;
}

// Arrow Function з циклом
export const average = (numbers: number[]): number => {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
};
