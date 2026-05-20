// Nama : Mufid Isnan Ardianto

// 1. FindMinMax

function FindMinMax(list) {
  let max = list[0];
  let min = list[0];

  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    } else if (list[i] < min) {
      min = list[i];
    }
  }
  return [min, max];
}
console.log("==========FindMinMax==========");
console.log(FindMinMax([2, 3, 4, 5, 6, 7, 8, 9, 1, 10]));
console.log("==========FindMinMax==========\n");

// 2. FindMinimumRange
function FindMinRange(list, from, to) {
  let min = list[from];
  let minIndex = from;

  for (let i = from + 1; i <= to; i++) {
    if (list[i] < min) {
      min = list[i];
      minIndex = i;
    }
  }

  return [min, minIndex];
}
console.log("==========FindMinRange==========");
console.log(FindMinRange([5, 3, 4, 2, 6, 7, 8, 9, 1, 10], 0, 10));
console.log(FindMinRange([5, 3, 4, 2, 6, 7, 8, 9, 1, 10], 0, 7));
console.log("==========FindMinRange==========\n");

// 3. ReveseList
function ReverseList(list) {
  let result = [];

  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}
console.log("==========ReverseList==========");
console.log(ReverseList([1, 2, 3, 4]));
console.log("==========ReverseList==========\n");

// 4. FrequentElement
function FrequentElement(list) {
  let dictionary = {};

  for (let i = 0; i < list.length; i++) {
    const currentNum = list[i];

    if (dictionary[currentNum]) {
      dictionary[currentNum] += 1;
    } else {
      dictionary[currentNum] = 1;
    }
  }
  return dictionary;
}
console.log("==========FrequentElement==========");
console.log(FrequentElement([1, 2, 3, 4, 4, 4, 3, 3, 2, 4]));
console.log(FrequentElement([1, 1, 1, 2, 2, 3, 3, 3]));
console.log("==========FrequentElement==========\n");

// 5. Addition
function Addition(list1, list2) {
  let sum = [];
  const maxLength = Math.max(list1.length, list2.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = list1[i];
    const num2 = list2[i];

    sum.push(num1 + num2);
  }

  let result = [];

  const combinedString = sum.join("");

  for (let j = 0; j < combinedString.length; j++) {
    let char = combinedString[j];
    result.push(parseInt(char));
  }
  return result;
}
console.log("==========Addition==========");
console.log(Addition([1, 2, 3], [4, 5, 6]));
console.log(Addition([9, 2, 7], [1, 3, 5]));
console.log("==========Addition==========\n");

// 6. MergeList
function MergeList(list1, list2) {
  const combined = [...list1, ...list2];

  const uniqueSet = new Set(combined);

  const uniqueArray = [...uniqueSet];

  uniqueArray.sort((a, b) => a - b);

  return uniqueArray;
}
console.log("==========MergeList==========");
console.log(MergeList([1, 4, 7, 12, 20], [10, 15, 17, 33]));
console.log(MergeList([2, 3, 5, 7], [11, 13, 17]));
console.log("==========MergeList==========\n");
