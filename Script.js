// 1 // Reverse a String: Write a function that reverses a given string.
function ReverString(str) {

    let reverse = "";

    for (let i = (str.length - 1); i >= 0; i--) {

        reverse = reverse + str[i];
    }
    return reverse;
}
console.log(ReverString("Abdelaali")); //resulta: ilaaledbA

// Count Characters: Create a function that counts the number of characters in a string.
function countCaracter(str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        count = count + 1;

    }
    return count;
}
console.log(countCaracter("Abdelaali"));  //resulta: 9

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function MotMajus(phra) {

    let Result = "";
    let MajuSuiv = true;

    for (let i = 0; i < phra.length; i++) {
        let Caracter = phra[i];

        if (Caracter === " ") {
            MajuSuiv = true;
            Result += Caracter;

        } else if (MajuSuiv) {
            Result += Caracter.toUpperCase();
            MajuSuiv = false;

        } else {
            Result = Result + Caracter;
        }
    }
    return Result;
}
console.log(MotMajus("bonjour mes amies"));//Bonjour Mes Amies

// 2 // Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// =======> fonction maximun
function trouMaxi(tab) {

    let maxim = tab[0];

    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > maxim) {
            maxim = tab[i];
        }
    }
    return maxim;
}
console.log(trouMaxi([50, 100, 7])); // 100
// =======> fonction Minimun
function trovMin(tab) {

    let min = tab[0];

    for (let i = 1; i < tab.length; i++) {

        if (tab[i] < min) {
            min = tab[i];
        }
    }
    return min;
}
console.log(trovMin([10, 400, 200])); // 10

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function somme(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }
    return sum;
}
console.log(somme([4, 4, 1, -2])); // Resulta 7

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filtArr(arr, condition) {

    let array = [];

    for (const i in arr) {
        if (condition == arr[i]) {
            array.push(arr[i]);
        }
    }
    return array;
}
console.log(filtArr(["A", "a", "a", "A", 2, 12, 6, "A", "AA"], "A"));// Resulta ['A', 'A', 'A']

// 3 // Factorial: Write a function to calculate the factorial of a given number.
function factorial(x) {

    let fact = 1;

    for (let i = 1; i <= x; i++) {

        fact *= i;

    }
    return fact;
}
console.log(factorial(4));

// Prime Number Check: Create a function to check if a number is prime or not.
function numberPrime(num) {
    if (num < 2) {
        return "This number is not a prime number!";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "This number is not a prime number!";
        }
    }
    return "This is a prime number";
}
console.log(numberPrime(7)); // result "This is a prime number"
console.log(numberPrime(8)); // result "This number is not a prime number!"

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function Fibonacci(n) {
    let fib = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }

    return fib;
}
console.log(Fibonacci(5)); //Result [0, 1, 1, 2, 3]

