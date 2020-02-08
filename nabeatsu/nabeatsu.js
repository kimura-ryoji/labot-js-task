    for (let number = 1; number <= 100; number++) {
        if (number % 3 === 0) {
            console.log(number + "!");
        } else if (/3/.test(number)) {
            console.log(number + "!");
        } else {
            console.log(number);
        }
    }