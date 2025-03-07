import { Result } from "typescript-result";

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return Result.error("Cannot divide by zero");
  }

  return Result.ok(a / b);
}

const result = divide(10, 0);

result
  .map((value) => value * 2)
  .onSuccess((value) => {
    console.log(`Result: ${value}`);
  })
  .onFailure((error) => {
    console.error(`Error: ${error}`);
  });
