const binarySearch = (array, key) => {
    let midIndex = Math.floor(array.length / 2);
    let midValue = array[midIndex];

    if (midValue === key) {
        return true;
    } else if (midValue < key && array.length > 1) {
        return binarySearch(array.splice(midIndex, array.length), key)
    } else if (midValue > key && array.length > 1) {
        return binarySearch(array.splice(0, midIndex), key)
    } else {
        return false;
    }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));