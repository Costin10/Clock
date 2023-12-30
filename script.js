function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    var dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    var date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateTimeString = dayOfWeek + ", " + date;

    document.getElementById("clock").textContent = timeString;
    document.getElementById("date").textContent = dateTimeString;
}

setInterval(updateClock, 1000);