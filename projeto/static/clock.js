function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = time;

    var statusElement = document.getElementById("status");
    if (hours >= 8 && hours < 19) {
        statusElement.textContent = "Aberto";
        statusElement.classList.remove("status-closed");
        statusElement.classList.add("status-open");
    } else {
        statusElement.textContent = "Fechado";
        statusElement.classList.remove("status-open");
        statusElement.classList.add("status-closed");
    }
}

setInterval(updateClock, 1000);s