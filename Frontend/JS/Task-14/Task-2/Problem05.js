function squareDigits(n) {
    return +n.toString().split('').reduce((acc, digit) => acc + (digit ** 2), '');


}