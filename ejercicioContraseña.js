/*---------------------------*/
/*        ejercicio1         */
/*---------------------------*/


const prompt = require("prompt-sync")();                    //llamamos la funcion de prompt
/** metodo normal
 * A = String(prompt("hackerrank")).toLowerCase();          //ingreso de la primera palabra    
 * B = String(prompt("mountain")).toLowerCase();            //ingreso de la segunda palabra    
*/

//metodo Promtp, funciona directamente desde la terminal
A = String(prompt("primera palabra: ")).toLowerCase();      //pedimos al usuario que ingrese la primera palabra    
B = String(prompt("segunda palabra: ")).toLowerCase();      //pedimos al usuario que ingrese la segunda palabra    
password = "";                                              //variable vacia donde se va a guardar la contraseña

for (let i = 0; i <= (A.length + B.length); i++) {          //ciclo que recorre cada una de las palabras 
    if (A[i] === undefined && B[i] === undefined) {         //cuando ya se acabe las posibles combinaciones se sale del ciclo
        break
    }
    if (A[i] === undefined && B[i] !== undefined) {         //cuando B tenga letras disponibles pero A no
        password += B[i]
    }
    if (B[i] === undefined && A[i] !== undefined) {         //cuando A tenga letras disponibles pero B no
        password += A[i]
    }
    if (A[i] != undefined && B[i] != undefined) {           //cuando ambas palabras tengan letras disponibles
        password += A[i] + B[i];
    }
}

console.log(password);                                      //envio a consola de la contraseña resultante

//Autor: Duban Fabian Rodriguez Garcia 

