/**
3) Descubra a lógica e complete o próximo elemento:
    a) 1, 3, 5, 7, ___
    Resposta: Sequência de dois em dois. Progressão aritmetica com razão de 2. Próximo termo será 9.

    b) 2, 4, 8, 16, 32, 64, ____
    Resposta: Progressão geometrica, o próximo número é sempre o dobro do anterior. O próximo número é 128.

    c) 0, 1, 4, 9, 16, 25, 36, ____
    Resposta: Quadrados dos números naturais, 49.

    d) 4, 16, 36, 64, ____
    Resposta: QUadrado dos números pares, 100 é o próximo.

    e) 1, 1, 2, 3, 5, 8, ____
    Resposta: Sequência de fibonacci(talvez ?). Soma dos dois ultimos números é 13.

    f) 2,10, 12, 16, 17, 18, 19, ____
    Respota: Aparenta ser uma sequência arbitrária. ANalisando de acordo com a diminuição da diferença entre os números, talvez o próximo seja 19.
    2, 10, 12, 16, 17, 18, 19
    2 p/ 10 = 8;
    10 p/ 12 = 2;
    12 p/ 16 = 4 (?);
    16 p/ 17 = 1;
    17 p/ 18 = 1;
    18 p/ 19 = 1;
*/

// A)
function nextNumberA() {
    let currentNumber = 7;
    return currentNumber + 2;
}
console.log(nextNumberA()); //9

// B)
function nextNumberB() {
    let currentNumber = 64;
    return currentNumber * 2;
}
console.log(nextNumberB()); //128

// C)
function nextNumberC() {
    let currentNumber = 36;
    let nextPerfectSqr = Math.pow(Math.ceil(Math.sqrt(currentNumber)) + 1, 2);
    return nextPerfectSqr;
}
console.log(nextNumberC()); //49

// D)
function nextNumberD() {
    let currentNumber = 64;
    return currentNumber + 20; //12, 20, 28
}
console.log(nextNumberD()); //100

// E)
function nextNumberE() {
    let currentNumber = 8;
    let previousNumber = 5;
    let temp;
    temp = currentNumber + previousNumber;
    currentNumber += previousNumber
    return currentNumber;
}

console.log(nextNumberE()); //13

// F)
function nextNumberE() {
    let currentNumber = 19;
    return currentNumber;
}

console.log(nextNumberE()); //19