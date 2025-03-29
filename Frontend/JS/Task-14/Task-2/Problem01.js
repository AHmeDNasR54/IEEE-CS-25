function leapYear(year) {
    return [year].reduce((_, y) => (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0), false);

}