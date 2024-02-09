function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const yearsToCheck = [2000, 2004, 2100, 2021, 2024];

yearsToCheck.forEach(year => {
    if (isLeapYear(year)) {
        console.log(year + " é um ano bissexto.");
    } else {
        console.log(year + " não é um ano bissexto.");
    }
});
