// implementasi algoritma
let A = "kopi";
let B = "teh";
let C = "";

C = A;
A = B;
B = C;

console.log(A);
console.log(B);

// intro to javascript
// string
let kata = "skilvul";
console.log(kata);
// number
let angka = 18;
console.log(angka);
// boolean
let pernyataan = true;
console.log(pernyataan);
// object
let person = {
  nama: "fardi",
  umur: 20,
  hobi: "tidur",
};
console.log(person.nama);
console.log(person.umur);
console.log(person.hobi);

// operator
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// if else if dan else contitional

let nilaiFardi = 87;
if (nilaiFardi >= 80) {
  console.log("A");
} else if (nilaiFardi >= 60 && nilaiFardi < 80) {
  console.log("B");
} else {
  console.log("E, anda harus mengulang");
}

// switch case

let nomorRemot = 2;
switch (nomorRemot) {
  case 1: {
    console.log("Indosiar");
    break;
  }
  case 2: {
    console.log("Net Tv");
    break;
  }
  case 3: {
    console.log("tvOne");
    break;
  }
  default: {
    console.log("Channel tidak ditemukan");
    break;
  }
}

// looping
// for loop
for (i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("==========");

// while loop
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

console.log("==========");
// do while
let num3 = 1;
do {
  console.log(num3);
  num3++;
} while (num3 <= 10);
