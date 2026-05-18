// Nama : Mufid Isnan Ardianto

// Math

// 01. IsPalindrome

function IsPalindrome(n) {
  let reversed = 0;
  let original = n;

  while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  return original === reversed;
}

console.log("====IsPalindrome====");
console.log(IsPalindrome(121));
console.log(IsPalindrome(2147447412));
console.log(IsPalindrome(110));
console.log("====IsPalindrome====\n");

// String

// 02. Capitalize
function Capitalize(str) {
  let splitStr = str.toLowerCase().split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
  }
  return splitStr.join(" ");
}
console.log("====Capitalize====");
console.log(Capitalize("this is a very special title"));
console.log(Capitalize("effective java is great"));
console.log("====Capitalize====\n");

// 03. IsNoDuplicateChar
function IsNoDuplicateChar(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log("====IsNoDuplicateChar====");
console.log(IsNoDuplicateChar("codeid"));
console.log(IsNoDuplicateChar("abcde"));
console.log(IsNoDuplicateChar("jdbc"));
console.log("====IsNoDuplicateChar====\n");

// 04. IsBrace
function IsBrace(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
console.log("====IsBrace====");
console.log(IsBrace("(())"));
console.log(IsBrace("()()"));
console.log(IsBrace("((()"));
console.log("====IsBrace====");
