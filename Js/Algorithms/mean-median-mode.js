const meanMedianMode = (array) => {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }

}

const getMean = (array) => {
    let sum = 0;
    
    array.forEach(num => {
        sum += num;        
    });

    const mean = sum / array.length;
    return mean;
}

const getMedian = (array) => {
    array.sort((a, b) => {
        return a - b;
    })
    let median;
    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)]    
    } else {
        const mid1 = array[array.length / 2 - 1];
        const mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }
    return median
}

const getMode = (array) => {
    const modeObj = {};

    array.forEach( num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        }
        modeObj[num]++;
    });

    let maxFreq = 0;
    let modes = [];

    for (let num in modeObj) {
        if (modeObj[num] > maxFreq) {
            modes = [num];
            maxFreq = modeObj[num];
        } else if (modeObj[num] === maxFreq) {
            modes.push(num);
        }
        if (modes.length === Object.keys(modeObj).length) {
            modes = [];
        }
    }
    return modes;
}

console.log(meanMedianMode([1,2,3,4,5,4,6,1]));
