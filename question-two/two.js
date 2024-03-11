/**
 * Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

const isFibonacci = (num) => {
    const isPerfectSquare = (x) => {
        const sqrt = Math.sqrt(x);
        return sqrt * sqrt === x;
    };

    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
};

const checkFibo = (num) => {
    const fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] < num) {
        const nextFibonacci = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextFibonacci);
    }

    if (fibonacci.includes(num)) {
        return `O número ${num} pertence à sequencia de fibonacci.\nSequência de Fibonacci até ${num}: ${fibonacci.join(', ')};`
    } else {
        return `O número ${num} NÃO pertence à sequencia de fibonacci.\nSequência de Fibonacci até ${num}: ${fibonacci.join(', ')}`;
    }
};

const numberToCheck = 52;
console.log(checkFibo(numberToCheck));