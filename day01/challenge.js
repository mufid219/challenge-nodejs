// Nama : Mufid Isnan Ardianto

// Challenge Logika Javascript

// 1. Box-Hollow
const n = 5;
console.log("Membuat Box Hollow");
for (let i = 0; i < n; i++) {
  let baris = "";
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
      baris += "*";
    } else {
      baris += " ";
    }
  }
  console.log(baris);
}

console.log("\n");
console.log("-------------------------");
console.log("\n");

// 2. Triangle 01
console.log("Membuat Triangle 01");
for (let i = 1; i <= n; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "* ";
  }
  console.log(baris);
}

console.log("\n");
console.log("-------------------------");
console.log("\n");

// 3. Triangle 02
console.log("Membuat triangle 02");
for (let i = n; i >= 1; i--) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "* ";
  }
  console.log(baris);
}

console.log("\n");
console.log("-------------------------");
console.log("\n");

// 4. Triangle 03
console.log("Membuat triangle 03");
for (let i = 0; i < n; i++) {
  let baris = "";
  for (let j = 0; j < n; j++) {
    if (j < n - 1 - i) {
      baris += " ";
    } else {
      baris += "*";
    }
  }
  console.log(baris);
}

console.log("\n");
console.log("-------------------------");
console.log("\n");

// 4. Triangle 05
console.log("Membuat triangle 05");
for (let i = 0; i < n; i++) {
  let baris = "";
  for (let j = 0; j < n; j++) {
    if (i === j) {
      baris += i + 1 + " ";
    } else {
      baris += "* ";
    }
  }
  console.log(baris);
}

console.log("\n");
console.log("-------------------------");
console.log("\n");

// 5. Triangle 06
console.log("Membuat triangle 06");
let angka = 1;
for (let i = 0; i < n; i++) {
  let baris = "";
  for (let j = 0; j < n; j++) {
    if (i === n - 1) {
      baris += angka + " ";
      angka++;
    } else if (j === 0) {
      baris += angka + " ";
      angka++;
    } else {
      baris += "* ";
    }
  }

  console.log(baris);
}

console.log("\n");
console.log("-------------------------");
console.log("\n");

// 6. Triangle 04
console.log("Membuat triangle 04");
for (let i = n; i >= 1; i--) {
  console.log("  ".repeat(n - i) + "* ".repeat(i));
}
