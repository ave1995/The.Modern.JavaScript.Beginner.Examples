//Write a function getLastDayOfMonth(year, month) that returns the last day of month.
//Sometimes it is 30th, 31st or even 28/29th for Feb.

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1)); //= 29 (leap year, Feb).