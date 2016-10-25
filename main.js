$(document).ready(function(){
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        if (hours <10){
            hours = "0" + hours;
        }
        var meridiem = "AM";
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }
        if (hours === 0){
            hours = 12;
        }
        //
        var minutes = currentTime.getMinutes();
        if (minutes <10){
            minutes = "0" + minutes;
        }
        //
        var seconds = currentTime.getSeconds();
        if (seconds <10){
            seconds = "0" + seconds;
        }
        
        // "handle" to the clock div
        var clockDiv = document.getElementById('clock');
        // text in clock div
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }
    function displayDay(){
        var currentDay = new Date();
        var day = currentDay.getDate();
        var month = currentDay.getMonth();
        
        var dayName = currentDay.getDay() - 1;
        var year = currentDay.getFullYear();
        //
        if (dayName === 0){
            var dayName = "MONDAY";
        }
        if (dayName === 1){
            var dayName = "TUESDAY";
        }
        if (dayName === 2){
            var dayName = "WEDNESDAY";
        }
        if (dayName === 3){
            var dayName = "TUESDAY";
        }
        if (dayName === 4){
            var dayName = "FRIDAY";
        }
        if (dayName === 5){
            var dayName = "SATURDAY";
        }
        if (dayName === 6){
            var dayName = "SUNDAY";
        }
        //
        //
        if (month === 0){
            var month = "JAN";
        }
        if (month === 1){
            var month = "FEB";
        }
        if (month === 2){
            var month = "MAR";
        }
        if (month === 3){
            var month = "APR";
        }
        if (month === 4){
            var month = "MAY";
        }
        if (month === 5){
            var month = "JUN";
        }
        if (month === 6){
            var month = "JUL";
        }
        if (month === 7){
            var month = "AUG";
        }
        if (month === 8){
            var month = "SEP";
        }
        if (month === 9){
            var month = "OCT";
        }
        if (month === 10){
            var month = "NOV";
        }
        if (month === 11){
            var month = "DEC";
        }
        //
        var dateDiv = document.getElementById('date');
        dateDiv.innerText = month + " " + day + "th" + " " + year;
        //
        var dayDiv = document.getElementById('day');
        dayDiv.innerText = dayName;
    }
    displayTime();
    displayDay();
    
    setInterval(displayTime, 1000);
});