const removeFromArray = function(array, ...element) {
    for(current of element){
        let flag = true;
        while(flag)
            {
                if(array.indexOf(current)===-1)
                    {
                        flag = false;
                        break;
                    }
                let index = array.indexOf(current);
                array.splice(index, 1);
            }
    }
    return array;
};

// array = [1, 2, 2, 3, 3, 3, 4];
// removeFromArray(array, 2, 3);
// console.log(array);
// Do not edit below this line
module.exports = removeFromArray;
