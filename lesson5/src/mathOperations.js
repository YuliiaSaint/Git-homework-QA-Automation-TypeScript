// Function Expression
export const add = function (a, b) {
  return a + b;
};

// Arrow Function
export const multiply = (a, b) => a * b;

// Function Declaration
export function subtract(a, b) {
  return a - b;
}

// Arrow Function з циклом
export const average = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum / numbers.length;
};
