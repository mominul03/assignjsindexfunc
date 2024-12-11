// Calculate Difference
function calculateDifference(a, b) {
    return a - b;
  }


  
  //  Checking  odd
  function isOdd(num) {
    return num % 2 !== 0;
  }


  
  //  Finding Minimum Number in Array
  function findMin(numbers) {
    return Math.min(...numbers);
  }


  
  // Filtering Even Numbers from Array
  function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }


  
  // 5) Sorting Array in Descending Order
  function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
  }


  
  //  Lowercase First Letter of a String
  function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }


  
  // Finding the Average of an Array
  function findAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }


  
  //  Leap Year check
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    }
    return false;
  }


  
 // Display
console.log("Difference (14, 12):", calculateDifference(14,12));
console.log("Is 8 odd?:", isOdd(8));
console.log("Minimum in [8, 10, 2, 3]:", findMin([8, 10, 2, 3]));
console.log("Even numbers in [8, 10, 2, 3]:", filterEvenNumbers([8, 10, 2, 3]));
console.log("Sorted descending [ 8,10, 2, 3]:", sortArrayDescending([8, 10, 2, 3]));
console.log("Lowercase first letter of 'Ostad':", lowercaseFirstLetter("Ostad"));
console.log("Average of [10, 20, 30]:", findAverage([10, 20, 30]));
console.log("Is 2024 a leap year?:", isLeapYear(2024));