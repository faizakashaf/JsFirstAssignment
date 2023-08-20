//Question 1
// function reverseString(input) {
//     let reversed = "";
//     for (let i = input.length - 1; i >= 0; i--) {
//         reversed += input[i];
//     }
//     return reversed;
// }

// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);
// console.log(reversedString);

//Question 2
// function countVowels(input) {
//     const vowels = "aeiou"; 
//     let count = 0;
    
  
//     for (let i = 0; i < input.length; i++) {
//         if (vowels.includes(input[i])) { 
//             count++; 
//         }
//     }
    
//     return count; 
// }

// const inputString = "Hello, World!";
// const numberOfVowels = countVowels(inputString);
// console.log(numberOfVowels);

//Question 3
// function capitalizeFirstLetterOfWords(sentence) {
//     const words = sentence.split(" "); 
//     const capitalizedWords = []; 
    
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//         capitalizedWords.push(capitalizedWord);
//     }
    
//     return capitalizedWords.join(" "); 
// }
// const inputSentence = "hello, world! this is a sentence.";
// const capitalizedSentence = capitalizeFirstLetterOfWords(inputSentence);
// console.log(capitalizedSentence);

//Question 4
// function isPalindrome(input) {
//     const alphanumericOnly = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     let left = 0;
//     let right = alphanumericOnly.length - 1; 
//     while (left < right) {
//         if (alphanumericOnly[left] !== alphanumericOnly[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
    
//     return true;
// }

// const testString1 = "racecar";
// console.log(isPalindrome(testString1));

// const testString2 = "hello";
// console.log(isPalindrome(testString2));

//Question 5
// function sumOfPositiveNumbers(arr) {
//     let sum = 0; 
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) { 
//             sum += arr[i]; 
//         }
//     }
    
//     return sum;
// }

// const numbers = [2, -3, 6, -1, 8, -5, 10];
// const positiveSum = sumOfPositiveNumbers(numbers);
// console.log(positiveSum);

//Question 6
// function findIndexOfElement(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i; 
//         }
//     }
    
//     return -1; 
// }

// const numbers = [5, 3, 8, 2, 7, 9, 4, 6];
// const targetNumber = 7;
// const index = findIndexOfElement(numbers, targetNumber);
// console.log(index); 

//Question 7
// function removeDuplicates(arr) {
//     const uniqueArray = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) { 
//             uniqueArray.push(arr[i]); 
//         }
//     }
    
//     return uniqueArray; 
// }

// const originalArray = [2, 5, 3, 7, 5, 2, 8, 8, 7];
// const newArray = removeDuplicates(originalArray);
// console.log(newArray); 

//Question 8
// function sortInAscending(arr) {
//     const n = arr.length;
    
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
// }

// const numbers = [5, 2, 9, 1, 5, 6];
// sortInAscending(numbers);
// console.log(numbers); 

//Question 9
// let number = 2;

// while (number <= 20) {
//     console.log(number);
//     number += 2; 
// }

//Question 10
// function calculateFactorial(number) {
//     let factorial = 1;
    
//     do {
//         factorial *= number;
//         number--;
//     } while (number > 1);
    
//     return factorial;
// }

// const inputNumber = 5;
// const result = calculateFactorial(inputNumber);
// console.log(`The factorial of ${inputNumber} is ${result}`);


//Question 11
// const person = {
//     name: "Faiza",
//     email: "faizakashaf4@gmail.com",
//     occupation: "Software Developer"
// };

// for (const property in person) {
//     console.log(`${property}: ${person[property]}`);
// }


//Question 12
// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = [];

// for (const element of originalArray) {
//     const doubledElement = element * 2;
//     doubledArray.push(doubledElement);
// }

// console.log(doubledArray);

//Question 13
// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         return `${number} is even.`;
//     } else {
//         return `${number} is odd.`;
//     }
// }

// const inputNumber = 7;
// const message = checkEvenOdd(inputNumber);
// console.log(message);

//Question 14
// function findMaxOfThreeNumbers(num1, num2, num3) {
//     const max = (num1 > num2) ?
//         ((num1 > num3) ? num1 : num3) :
//         ((num2 > num3) ? num2 : num3);
        
//     return max;
// }

// const num1 = 8;
// const num2 = 15;
// const num3 = 11;
// const maxNumber = findMaxOfThreeNumbers(num1, num2, num3);
// console.log(`The maximum of ${num1}, ${num2}, and ${num3} is ${maxNumber}`);

//Question 15
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return `${year} is a leap year.`;
//     } else {
//         return `${year} is not a leap year.`;
//     }
// }

// const inputYear = 2024;
// const result = isLeapYear(inputYear);
// console.log(result); 
