const fibonacci = function(num) {
    num = typeof num === "number" ? num : Number(num);
    if(num < 0) return "OOPS";
    let prev = 0;
    let current = 1;
    for(let i = 1 ; i <= num ; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
