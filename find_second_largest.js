// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    let largestNumber = array[0];
    let secondLargestNumber = array[1];
  
    if (largestNumber < secondLargestNumber) {
      let temporaryVariable = largestNumber;
      largestNumber = secondLargestNumber;
      secondLargestNumber = temporaryVariable;
    }
    for (let i = 2; i < array.length; i++) {
      /// If array[i] is greater than largestNumber, then, swap largestNumber with array[i], but before that, assign previous largestNumber to secondLargestNumber
      if (array[i] > largestNumber) {
        secondLargestNumber = largestNumber;
        largestNumber = array[i];
      }
      /// Also, check if the current ith position element is greater than the secondLargestNumber, then, ith position element will become the secondLargestNumber.
      else if (array[i] > secondLargestNumber) {
        secondLargestNumber = array[i];
      }
    }
  
    return secondLargestNumber;
  }

  console.log("Second Largest Number = ",secondLargest([3,56,7,32,9,14]))
  console.log("Second Largest Number = ",secondLargest([21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59]));
  console.log("Second Largest Number = ",secondLargest([111, 0, 20, 0, 2]));