// Calculate Difference
function calculateDifference(a, b) {
    return a - b;
  }


  
  //  Check if a number is odd
  function isOdd(num) {
    return num % 2 !== 0;
  }


  
  //  Find Minimum Number in Array
  function findMin(numbers) {
    return Math.min(...numbers);
  }


  
  // Filter Even Numbers from Array
  function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }


  
  // 5) Sort Array in Descending Order
  function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
  }


  
  //  Lowercase First Letter of a String
  function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }


  
  // Find the Average of an Array
  function findAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }


  
  //  Check if a Year is a Leap Year
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    }
    return false;
  }


  
 // Call each function to test and display output
console.log("Difference (14, 12):", calculateDifference(14,12));
console.log("Is 8 odd?:", isOdd(8));
console.log("Minimum in [8, 10, 2, 3]:", findMin([8, 10, 2, 3]));
console.log("Even numbers in [8, 10, 2, 3]:", filterEvenNumbers([8, 10, 2, 3]));
console.log("Sorted descending [ 8,10, 2, 3]:", sortArrayDescending([8, 10, 2, 3]));
console.log("Lowercase first letter of 'Ostad':", lowercaseFirstLetter("Ostad"));
console.log("Average of [10, 20, 30]:", findAverage([10, 20, 30]));
console.log("Is 2024 a leap year?:", isLeapYear(2024));