// Nama : Mufid Isnan Ardianto

// 01. OrderEvenBeforeOdd

function OrderEvenBeforeOdd(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const current = arr[j];
      const next = arr[j + 1];

      const currentisOdd = current % 2 !== 0;
      const nextIsEven = next % 2 === 0;

      let needSwap = false;

      if (currentisOdd && nextIsEven) {
        needSwap = true;
      } else if (!currentisOdd && nextIsEven && current > next) {
        needSwap = true;
      } else if (currentisOdd && !nextIsEven && current > next) {
        needSwap = true;
      }

      if (needSwap) {
        arr[j] = next;
        arr[j + 1] = current;
      }
    }
  }
  return arr;
}

function DisplayArray(arr) {
  console.log(`[${OrderEvenBeforeOdd(arr).join(", ")}]`);
}
console.log("=========OrderEvenBeforeOdd=========");
DisplayArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
DisplayArray([3, 4, 5, 2, 10]);
DisplayArray([2, 4, 6, 10, 1]);
console.log("=========OrderEvenBeforeOdd=========\n");

// 02. String Palindrome
function IsPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log("=========IsPalindrome=========");
console.log(IsPalindrome(["donout", "king", "donout"]));
console.log(IsPalindrome(["min", "max", "min"]));
console.log(IsPalindrome(["true", "false", "false"]));
console.log("=========IsPalindrome=========\n");

// 3. AddOnePlus
function AddOnePlus(x) {
  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] < 9) {
      x[i]++;
      return x;
    }
    x[i] = 0;
  }

  const result = new Array(x.length + 1).fill(0);
  result[0] = 1;
  return result;
}

console.log("=========AddOnePlus=========");
console.log(AddOnePlus([1, 3, 2, 4]));
console.log(AddOnePlus([1, 4, 8, 9]));
console.log(AddOnePlus([9, 9, 9, 9]));
console.log("=========AddOnePlus=========");
