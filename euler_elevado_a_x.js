/*
Implemente a função float eelev(x,q) em C (ou outra linguagem de programação) que
calcula número de euler elevado a x usando a série:

e^x = Somatório(x^n / n!)  variando de 0 a infinito
*/

//q repreenta a quantidade de termos da série a ser calculada
const eelev = (x, q) => {
    let somatoria = 0;
    for (let n = 0; n < q; n++) {
         somatoria += ((x ** n) / fatorial(n));
    }
    return somatoria;
}

// fatorialzinho simples
const fatorial = (num) => (num === 1 || num === 0) ? 1 : num * fatorial(num - 1)

console.log("e^1 = " + eelev(1,100).toFixed(5))
console.log("e^2 = " + eelev(2,100).toFixed(5))
console.log("e^3 = " + eelev(3,100).toFixed(5))
console.log("e^4 = " + eelev(4,100).toFixed(5))
console.log("e^5 = " + eelev(5,100).toFixed(5))
console.log("e^6 = " + eelev(6,100).toFixed(5))