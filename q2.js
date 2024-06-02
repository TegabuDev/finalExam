let arr = [1, 2, 3, 4, 5, 1];

function q2(arr, num) {
  let sum = 0;
  const res = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum < num) {
      sum++;
    }
    count++;
  }
  return count;
}

console.log(q2(arr, 6));
