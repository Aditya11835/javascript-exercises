const sumAll = function(start, end) {

    if(typeof(start) !== "number" || typeof(end) !== "number")
        {
            return "ERROR";
        }
    if(start < 0 || end < 0)
        {
            return "ERROR";
        }

    let terms = Math.abs((end - start)) + 1; //4-1 = 3 but needs 4 terms: 1 2 3 4
    let sum = terms * (start + end) / 2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
