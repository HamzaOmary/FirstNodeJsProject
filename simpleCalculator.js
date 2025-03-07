const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function simplerCalculator(x, y, operation) {
    switch (operation) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                console.log("Error: Division by zero is not allowed.");
                return null;
            }
            return x / y;
        default:
            console.log("This Operation Not Exist or Wrong in input");
            return null;
    }
}


// const startTime = Date.now(); // Get the current timestamp in milliseconds
// const duration = 30 * 60 * 1000; // 30 minutes to ==> milliseconds

// while (Date.now() - startTime < duration) {
//     console.log('Loop finished after 30 minutes.');


readline.question('Enter the value of x: ', (x) => {
    readline.question('Enter the value of y: ', (y) => {
        readline.question('Enter the operation (+, -, *, /): ', (operation) => {
            const numX = parseFloat(x);
            const numY = parseFloat(y);

            if (isNaN(numX) || isNaN(numY)) {
                console.log("Invalid input. Please enter valid numbers.");
            } else {
                const result = simplerCalculator(numX, numY, operation);
                if (result !== null) {
                    console.log(`The result is: ${result}`);
                }
            }

            readline.close();
        });
    });
 });

//  //small delay (wait 100 milliseconds between iterations) to avoid overwhelming the CPU
//   await new Promise(resolve => setTimeout(resolve, 100));
// }