setInterval(() => {
    let clock = document.getElementById('clock');
    let dayDisplay = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    //Getting time

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes <= 9){
        minutes = `0${minutes}`;
    }
    let seconds = date.getSeconds();
    if(seconds <= 9){
        seconds = `0${seconds}`;
    }

    //Month and year

    let cDate = date.getDate();
    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();
    //Days
    let day = date.getDay();

    let daysName = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    //Display AM or PM

    if(hours < 12){
        document.getElementById('amOrpm').innerHTML = "AM";
    } else {
        document.getElementById('amOrpm').innerHTML = "PM";
    }

    //Display clock

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    //Display day

    dayDisplay.innerHTML = `${daysName[day]} | ${cDate}-`;

    //Display Month

    month.innerHTML = cMonth;

    //Display year
    
    year.innerHTML = `- ${cYear}`;
}, 1000
);

