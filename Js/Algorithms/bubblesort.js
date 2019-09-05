const bubblesort = (array) => {
    let teste = 0;
    for (let j = 0; j < array.length -1; j++) {
        for (let i = 0; i < array.length - j; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i +1]
                array[i +1] = temp;
            }
            teste++
        }
    }
    console.log(teste);
    
    return array;

      
    console.log(teste);

    
    }

    

console.log(bubblesort([5,4,3,2,1]));
