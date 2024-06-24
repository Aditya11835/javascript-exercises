const reverseString = function(string) {
    let array = string.split('');
    let out = (array.reverse()).join('');
    return out;
};

// Do not edit below this line
module.exports = reverseString;
