//  Homework 2: Now add those even numbers using an array method.

const aNumArray = [6, 1, 4, 7, 5, 120, 59, 60, 7]

function getEvenFromArray(array) {
  return array.filter((aNum) => aNum % 2 === 0)
}

const evensArray = getEvenFromArray(aNumArray)

const theSum = evensArray.reduce((sum, anEvenNum) => {
    return sum + anEvenNum
}, 0)

console.log("Start array is ", aNumArray)
console.log("Evens array is ", evensArray)
console.log("The sum of evens", theSum)
