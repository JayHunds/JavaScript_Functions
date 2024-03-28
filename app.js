console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        console.log("Invalid input: count cannot be negative");
        return;
    }

    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdds(10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (typeof age !== 'number' || isNaN(age)) {
        console.log("Invalid input: Age must be a number");
        return;
    }

    if (!userName) {
        console.log("Invalid input: Please provide a name");
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("John", 15);
checkAge("Alice", 17);
checkAge();
//Exercise 3
console.log("EXERCISE 3:\n==========\n")
function analyzePoint(x, y) {
    if (x === 0 && y === 0) {
        console.log(`The point (${x}, ${y}) is at the origin.`);
    } else if (x === 0) {
        console.log(`The point (${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`The point (${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
    } else {
        console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }
}

analyzePoint(0, 2);
analyzePoint(1, 2);
analyzePoint(-6, 18);
//Exercise 4
console.log ("EXERCISE 4:\n==========\n")
function analyzeTriangle(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Invalid triangle: The sum of any two sides must be greater than the length of the third side.";
    } else if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle: All side lengths are equal.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle: Two side lengths are equal.";
    } else {
        return "Scalene triangle: All side lengths are different.";
    }
}
console.log(analyzeTriangle(1, 2, 2));
console.log(analyzeTriangle(1, 1, 2));
//Exercise 5
console.log("EXERCISE 5:\n==========\n")
function dataUsageFeedback(planLimit, day, usage) {
    let averageDailyUsage = usage / day;

    let remainingData = planLimit - usage;

    let remainingDays = 30 - day;
    let averageDailyUsageRemaining = remainingData / remainingDays;

    if (usage >= planLimit) {
        console.log("You have run out of data for this month.");
        return;
    }

    if (averageDailyUsage > planLimit / 30) {
        console.log("You are using too much data per day.");
    } else if (averageDailyUsage < planLimit / 30) {
        console.log("You can afford to use more data per day.");
    } else {
        console.log("You are right on track with your data usage per day.");
    }

    console.log(`You have ${remainingData} MB of data left for the rest of the month.`);
    console.log(`On average, you can use ${averageDailyUsageRemaining.toFixed(2)} MB per day for the rest of the month.`);
}

dataUsageFeedback(3000, 15, 1500); 
