const sumAll = function(begin, end) {
    const swap = (begin, end) => [end, begin];
    if(begin < 0 || end < 0 || !Number.isInteger(begin) || !Number.isInteger(end)) return "ERROR";
    if(begin > end) [begin, end] = swap(begin, end);
    let sum = 0;
    for(let i = begin ; i <= end ; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
