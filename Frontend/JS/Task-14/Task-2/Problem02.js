function getAbsSum(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}

