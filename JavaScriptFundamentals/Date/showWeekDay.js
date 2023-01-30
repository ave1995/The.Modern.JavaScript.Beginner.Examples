//Write a function getWeekDay(date) to show the weekday
//in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}


function getWeekDay(day) {
    switch (day) {
        case 1:
            return 'MO';
        case 2:
            return 'TU'
        case 3:
            return 'WE'
        case 4:
            return 'TH'
        case 5:
            return 'FR'
        case 6:
            return 'SA'
        case 7:
            return 'SU'
    }
}

let date = new Date(2023, 0, 22);  // 22 Jan 2023

console.log(getWeekDay(getLocalDay(date)));   // should output "SU"

