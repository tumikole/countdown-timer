var startingMinutes = 10;
var time = startingMinutes * 60;


const countdown = document.querySelector('#countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;

    if (time < 600) {

        countdown.innerHTML = `${minutes}: ${ seconds }`;
    }
    time--
}