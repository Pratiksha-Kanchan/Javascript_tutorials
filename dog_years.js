// Create a variable named myAge, and set it equal to your age as a number.
myAge = 24;

// Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
earlyYears = 2;

earlyYears *= 10.5;
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears. We’ll be changing this value later.
laterYears = myAge-2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
laterYears *=4;

console.log(earlyYears)
console.log(laterYears)
// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
myAgeInDogYears = earlyYears+laterYears

// Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.The toLowerCase method returns a string with all lowercase letters.
myName = "Pratiksha Kanchan".toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)
