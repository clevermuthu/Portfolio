const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hrs = min = sec = ms = 0;
let s1 = s2 = s3 = s4 = 0;

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

start.addEventListener('click', () => {
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    startTimer = setInterval(() => {
        s4++;
        if (s4 == 60) {
            s4 = 0;
            s3++;
        }
        if (s3 == 60) {
            s3 = 0;
            s2++;
        }
        if (s2 == 60) {
            s2 = 0;
            s1++;
        }
        stopwatch()
    }, 10)

});

stop.addEventListener('click', () => {
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
    clearInterval(startTimer);
})

reset.addEventListener('click', () => {
    document.getElementById('stop').disabled = false;
    document.getElementById('start').disabled = false;
    clearInterval(startTimer);
    s1 = s2 = s3 = s4 = 0;
    stopwatch()
})

function stopwatch() 
{
    ws1 = s1 < 10 ? '0' + s1 : s1;
    ws2 = s2 < 10 ? '0' + s2 : s2;
    ws3 = s3 < 10 ? '0' + s3 : s3;
    ws4 = s4 < 10 ? '0' + s4 : s4;
    document.getElementById("s1").innerHTML = ws1;
    document.getElementById("s2").innerHTML = ws2;
    document.getElementById("s3").innerHTML = ws3;
    document.getElementById("s4").innerHTML = ws4;
}

function date() 
{
    function printdate() 
    {
        const d = new Date();
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        document.getElementById("demo2").innerHTML = date + " " + month + " " + year;
    }

    function printday() 
    {
        const d = new Date();
        let day = days[d.getDay()];
        document.getElementById("demo").innerHTML = day;
    }

    function printtime() 
    {
        const d = new Date();
        let hour = d.getHours();
        let period = "AM";
        if (hour > 12) {
            period = "PM";
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        let minute = d.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        let seconds = d.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        setTimeout(printtime, 1000);
        document.getElementById("demo1").innerHTML = hour + ":" + minute + ":" + seconds + " " + period;
    }

    printdate();
    printday();
    printtime();
    stopwatch();
}
date();

