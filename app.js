let arr; // Array to store the data

// Function to add data to the array
//

function solve(n) {
  arr = Array.from({ length: n }, (v, i) => i + 1);
  // return arr.map(
  //   (item) => (item % 3 ? "" : "Fizz") + (item % 5 ? "" : "Buzz") || item
  // );

  return arr.map((item) =>
    item % 3 === 0 && item % 5 === 0
      ? "FizzBuzz"
      : item % 3 === 0
      ? "Fizz"
      : item % 5 === 0
      ? "Buzz"
      : item
  );
}

console.log(solve(15));
