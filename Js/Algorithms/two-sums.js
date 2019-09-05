const twoSums = (array, sum) => {
    const newArray = [];
    
    array.forEach(num => {
        // for (let i = 0; i < array.length; i++) {
        //     if ((num + array[i]) === sum) {
        //         const pair = [num, array[i]].sort();                
        //         if (!isItemInArray(newArray, pair)) {
        //             newArray.push(pair);
        //         }
        //     }
        //     console.log(newArray);
        
        // }

        if (array.indexOf((sum - num)) !== -1) {
            const pair = [num, (sum - num)].sort()
            if (!isItemInArray(newArray, pair)) {
                newArray.push(pair);
            }
        }
        console.log(newArray);
        
    });
    return newArray;
}

function isItemInArray(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;
        }
    }
    return false;
}

console.log(twoSums([1,6,4,5,3,3], 7));
