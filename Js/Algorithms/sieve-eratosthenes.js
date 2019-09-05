const sieveEra = (num) => {
    const array = []
    for (let i = 0; i <= num; i++) {
        array[i] = true
    }

    for (let i = 0; i < array.length; i++) {     
        if (i <= 1) {
            array[i] = false;
        } else {
            if (array[i] !== false) {
                let multiplier = 2;
                while (i * multiplier <= num) {  
                    array[i * multiplier] = false;
                    multiplier++;    
                }
            }
        }
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== false) {
            result.push(i);
        }  
    }
    return result;
}

console.log(sieveEra(20));
