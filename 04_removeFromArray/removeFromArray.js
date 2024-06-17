const removeFromArray = function(arr, ...elementsToRemove) {
    function removeElements(val) {
        return !elementsToRemove.includes(val);
    }
    return arr.filter(removeElements);
};

// Do not edit below this line
module.exports = removeFromArray;
