// Nama : Mufid Isnan Ardianto

//array 2 dimensi
const rows = 5;
const cols = 5;
let matrix = []; //empty array

// Matrix

// 01
let counters = 1;

for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    matrix[i][j] = counters++;
  }
}
console.log("==========01==========");
console.table(matrix);
console.log("==========01==========\n");

// 02
counters = 1;
for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    if (i >= j) {
      matrix[i][j] = i + j + 1;
    }
  }
}

console.log("==========02==========");
console.table(matrix);
console.log("==========02==========\n");

// 03
counters = 1;
for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    if (i + j < 5) {
      matrix[i][j] = i + j + 1;
    }
  }
}
console.log("==========03==========");
console.table(matrix);
console.log("==========03==========\n");

// 04
counters = 1;
for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    if (j >= i) {
      matrix[i][j] = j + 1;
    }
  }
}
console.log("==========04==========");
console.table(matrix);
console.log("==========04==========\n");

// 05
counters = 1;
for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    if (i === j) {
      matrix[i][j] = counters++;
    } else if (i < j) {
      matrix[i][j] = 10;
    } else if (i > j) {
      matrix[i][j] = 20;
    }
  }
}
console.log("==========05==========");
console.table(matrix);
console.log("==========05==========\n");

// 06
counters = 1;
for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    if (i === j) {
      matrix[i][j] = 5 - i;
    } else if (i > j) {
      matrix[i][j] = 10;
    } else if (i < j) {
      matrix[i][j] = 20;
    }
  }
}
console.log("==========06==========");
console.table(matrix);
console.log("==========06==========\n");

// 07
console.log("==========07==========");
let input = 8;
console.log("Input jumlah baris piramid : " + input);
for (let i = input; i >= 1; i--) {
  let rows = [];

  for (let j = i; j >= 1; j--) {
    rows.push(j);
  }
  for (let j = 2; j <= i; j++) {
    rows.push(j);
  }
  console.log(rows.join(" "));
}
console.log("==========07==========\n");

// 08

// 08-01
function MatrixSelangSeling(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];

    for (let j = 0; j < n; j++) {
      if (i % 2 === 0) {
        matrix[i][j] = n - j;
      } else {
        matrix[i][j] = j + 1;
      }
    }
  }
  return matrix;
}

console.log("==========08-01==========");
console.table(MatrixSelangSeling(9));
console.log("==========08-01==========\n");

console.log("==========08-02==========");
console.table(MatrixSelangSeling(5));
console.log("==========08-02==========\n");

// 09
function MatrixStrip(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 !== 0) {
        matrix[i][j] = j + 1;
      } else {
        matrix[i][j] = "-";
      }
    }
  }
  return matrix;
}

console.log("==========09-01==========");
console.table(MatrixStrip(9));
console.log("==========09-01==========\n");

console.log("==========09-02==========");
console.table(MatrixStrip(5));
console.log("==========09-02==========\n");
