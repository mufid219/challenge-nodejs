// Nama : Mufid Isnan Ardianto

// Final Test Logic

// 01
function AddOnePlus(n) {
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] < 9) {
      n[i]++;
      return n;
    }
    n[i] = 0;
  }

  const result = new Array(n.length + 1).fill(0);
  result[0] = 1;
  return result;
}
console.log("=========AddOnePlus=========");
console.log(AddOnePlus([1, 3, 2, 4]));
console.log(AddOnePlus([1, 4, 8, 9]));
console.log(AddOnePlus([9, 9, 9, 9]));
console.log("=========AddOnePlus=========\n");

// 02

function triangle1(num, start) {
  let hasilAkhir = "";

  for (let i = 1; i <= num; i++) {
    let baris = [];

    let angkaAwal = start + i - 1;

    for (let j = 0; j < i; j++) {
      baris.push(angkaAwal + j);
    }

    hasilAkhir += baris.join(" ") + "\n";
  }
  return hasilAkhir.trim();
}

// function triangle(num, start) {
//   let hasilAkhir = "";

//   for (let i = 0; i < num; i++) {
//     let count = i + start;
//     let baris = "";

//     for (let j = 0; j <= i; j++) {
//       if (j === 0) {
//         baris += count++;
//       } else {
//         baris += " " + count++;
//       }
//     }
//     hasilAkhir += baris + "\n";
//   }

//   return hasilAkhir.trim();
// }

console.log("=========triangle=========");
console.log(triangle1(7, 1));
console.log("\n");
console.log(triangle1(7, 5));
console.log("=========triangle=========\n");

// 03
function generateNumber(n) {
  let total = n;

  //   let satuan = n % 10;
  //   let puluhan = Math.floor(n / 10);

  //   total += satuan + puluhan;

  let temp = total;

  while (temp > 0) {
    total += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return total;
}

console.log("=========generateNumber=========");
console.log(generateNumber(75));
console.log("=========generateNumber=========\n");

// 04
function cetakSelfNumbers(limit) {
  let generated = new Set();

  for (let i = 1; i <= limit; i++) {
    let total = i;
    let sisaAngka = i;

    while (sisaAngka > 0) {
      total += sisaAngka % 10;
      sisaAngka = Math.floor(sisaAngka / 10);
    }

    if (total <= limit) {
      generated.add(total);
    }
  }

  let selfNumbers = [];
  for (let i = 1; i <= limit; i++) {
    if (!generated.has(i)) {
      selfNumbers.push(i);
    }
  }

  return selfNumbers;
}

function selfNumbers(limit) {
  const generated = new Set();

  for (let i = 1; i <= limit; i++) {
    let sum = i;
    let temp = i;

    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    generated.add(sum);
  }

  for (let i = 1; i <= limit; i++) {
    if (!generated.has(i)) {
      console.log(i);
    }
  }
}

console.log("=========selfNumbers=========");
selfNumbers(5000);
console.log("=========selfNumbers=========\n");
