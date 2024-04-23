function clock() {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    var dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    var today = new Date();

    document.getElementById("Date").innerHTML =
        dayNames[today.getDay()] + " " + today.getDate() + " " +
        monthNames[today.getMonth()] + " " + today.getFullYear();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var dayPeriod = h < 12 ? "AM" : "PM";

    if (h > 12) {
        h = h - 12;
    } else if (h === 0) {
        h = 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("hours").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
    document.getElementById("period").innerHTML = dayPeriod; // Display AM/PM
}

var interval = setInterval(clock, 1000);
