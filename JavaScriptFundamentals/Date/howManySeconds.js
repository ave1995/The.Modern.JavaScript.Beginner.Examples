//Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
function getSecondsToday() {
    let today = new Date();

    return today.getSeconds() + today.getMinutes() * 60 + today.getHours() * 3600;
}

console.log(getSecondsToday());

//Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

function getSecondsToTomorrow() {
    let today = new Date();

    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    let diff = tomorrow - today;

    return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());
