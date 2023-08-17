/*---------------------------*/
/*        ejercicio1         */
/*---------------------------*/
/*Se desea realizar la suma de los números pares y la suma de los números impares (por aparte), de los números comprendidos desde uno hasta 578934. */

const prompt = require("prompt-sync")();

A = String(prompt("primera palabra: ")).toLowerCase();
B = String(prompt("segunda palabra: ")).toLowerCase();
password = "";

for (let i = 0; i <= (A.length + B.length); i++) {
    if (A[i] === undefined && B[i] === undefined) {
        break
    }
    if (A[i] === undefined && B[i] !== undefined) {
        password += B[i]
    }
    if (B[i] === undefined && A[i] !== undefined) {
        password += A[i]
    }
    if (A[i] != undefined && B[i] != undefined) {
        password += A[i] + B[i];
    }
}

console.log(password);

//Autor: Duban Fabian Rodriguez Garcia 

