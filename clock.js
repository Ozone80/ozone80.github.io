let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 30*hours + minutes/2;
    let minRotation = 6*minutes;
    let secRotation = 6*seconds;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;

    let dateText = `${hours}:${minutes}:${seconds}`

    document.getElementById('dateText').innerText = dateText;
}
setInterval(displayTime, 1000);