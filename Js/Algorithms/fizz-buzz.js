const fizzBuzz = (num) => {

    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log(`FizzBuzz`);
        } else if (i % 5 === 0) {
            console.log(`Buzz`);
        } else if (i % 3 === 0) {
            console.log(`Fizz`);
        } else {
            console.log(`The number ${i} is not divisible by 3 or 5`);
        }
    }
}

fizzBuzz(100);
