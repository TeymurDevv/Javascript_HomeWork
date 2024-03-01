let startNumber = 5;
let endNumber = 20;
let oddCount = 0;
function getOddNumbersCount(start, end) {
    for (let i = start; i < end; i++) {
        if (i % 2 == 1) {
            oddCount++;
        }
    }
    return { count: oddCount };
}
console.log(getOddNumbersCount(startNumber, endNumber));

let primeCheckNumber = 5;
let divisorCount = 0;
function checkPrimeOrComposite(number) {
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisorCount++;
        }
    }
    if (divisorCount > 1) {
        console.log("composite");
    } else {
        console.log("prime");
    }
}
checkPrimeOrComposite(primeCheckNumber);

let squareCheckNumber = 16;
function isPowerOfTwo(number) {
    if (number <= 0) {
        return false;
    }
    while (number > 1) {
        if (number % 2 != 0) {
            return false;
        }
        number = number / 2;
    }
    return true;
}
console.log(isPowerOfTwo(squareCheckNumber));

let digitCountNumber = 6546;
let digitCount = 0;
function calculateDigitCount(number) {
    while (number >= 1) {
        number = Math.floor(number / 10);
        digitCount++;
    }
    return digitCount;
}
console.log(calculateDigitCount(digitCountNumber));

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arraySum = 0;
function sumArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }
    return arraySum;
}
console.log(sumArrayElements(numberArray));

let numberList = [10, 5, 25, 8, 15];
let highestNumber = numberList[0];
function findMaxNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }
    return highestNumber;
}
console.log(findMaxNumber(numberList));

let numberSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumFirstAndLast(arr) {
    let result = arr[0] + arr[arr.length - 1];
    return result;
}
console.log(sumFirstAndLast(numberSeries));

let evenOddCheckNumber = 12;
function checkEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log("This number is even");
    } else {
        console.log("This number is odd");
    }
}
checkEvenOrOdd(evenOddCheckNumber);

let divisibilityCheckNumber = 42;
function isDivisibleBy21(number) {
    return number % 21 == 0;
}
console.log(isDivisibleBy21(divisibilityCheckNumber));

let firstNumber = 6;
let secondNumber = 8;
function sumIfBothEven(num1, num2) {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        return num1 + num2;
    } else {
        return "At least one number is not even";
    }
}
console.log(sumIfBothEven(firstNumber, secondNumber));

let oddStartNumber = 7;
let oddEndNumber = 40;
function countOddNumbersBetween(start, end) {
    let count = 0;
    for (let i = start; i < end; i++) {
        if (i % 2 == 1) {
            count++;
        }
    }
    return { amountOfNumbers: count };
}
console.log(countOddNumbersBetween(oddStartNumber, oddEndNumber));

let sumStartNumber = 7;
let sumEndNumber = 40;
function sumOddNumbersBetween(start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    return { totalSum: sum };
}
console.log(sumOddNumbersBetween(sumStartNumber, sumEndNumber));

let multiplyEvenNumbersLimit = 18;
function multiplyEvenNumbersUpTo(limit) {
    let product = 1;
    for (let i = 2; i < limit; i += 2) {
        product *= i;
    }
    return product;
}
console.log(multiplyEvenNumbersUpTo(multiplyEvenNumbersLimit));

let temperature = 15;
function checkTemperature() {
    if (temperature > 15) {
        console.log("It's warm");
    } else {
        console.log("It's cold");
    }
}
checkTemperature();
