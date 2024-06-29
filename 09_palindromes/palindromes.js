const palindromes = function (string) {
    const mappedString = string.split("").map((char) => char.toUpperCase());
    const filteredString = mappedString.filter((char) => isAllowed(char));
    return isPalindrome(filteredString);
    function isAllowed(char) {
        return (char >= "A" && char <= "Z") || (char >= "0" && char <= "9");
    }
    function isPalindrome(arr) {
        for(let i = 0 ; i < arr.length / 2 ; i++) {
            if(arr[i] !== arr[arr.length - i - 1]) return false;
        }
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
