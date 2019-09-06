const mergeSort = (array) => {
    if (array.length === 1) {
        return array;
    } else {
        const midIndex = Math.floor(array.length / 2);
        const firstPart = array.slice(0, midIndex);
        const secondPart = array.slice(midIndex);

        return merge(mergeSort(firstPart), mergeSort(secondPart));
    }
}

const merge = (array1, array2) => {
    let result = [];
    while (array1.length && array2.length) {
        var minNum;
        if (array1[0] < array2[0]) {
            minNum = array1.shift();
        } else {
            minNum = array2.shift();
        }
        result.push(minNum);
    }
    if (array1.length) {
        result = result.concat(array1);
    } else if (array2.length) {
        result = result.concat(array2);
    }
    return result;
}

console.log(mergeSort([3,4,4,56,8,45,33242,234,234,5,1]));

