let days = document.getElementsByClassName("days")[0];
let hours = document.getElementsByClassName("hours")[0];
let minutes = document.getElementsByClassName("minutes")[0];
let seconds = document.getElementsByClassName("seconds")[0];
var second = 0;
var day = 0;
var hour = 0;
var minute = 0;
function timerShow(min) {
  if (min >= 148600) {
    alert("too long");
    clearInterval(countdown);
  } else {
    minute = min;
    countdown;
  }
}
let countdown = setInterval(function () {
  if (!(second == 0 && minute == 0 && hour == 0 && day == 0)) {
    second--;
    if (second <= 0 && (minute > 0 || hour > 0 || day > 0)) {
      second = 60;
      minute--;
      if (minute <= 0 && hour > 0) {
        minute = 59;
        second = 60;
        hour--;
        if (hour <= 0 && day > 0) {
          hour = 23;
          day--;
        }
      } else if (minute <= 0 && day > 0) {
        minute = 59;
        second = 60;
        hour--;
        if (hour <= 0) {
          hour = 23;
          day--;
        }
      }
    }
    if (minute >= 1440) {
      day = Math.floor(minute / 1440);

      if ((minute - day * 1440) / 60 >= 1) {
        hour = Math.floor((minute - day * 1440) / 60);
        console.log(hour);

        minute = minute % 60;
      } else {
        minute = minute % 1440;
      }
    } else if (minute >= 60 && minute < 1440 && hour !== 99) {
      hour = Math.floor(minute / 60);
      minute = minute % 60;
    }
    if (day >= 99) {
      hour = hour + (day - 99) * 24;

      day = 99;
      if (hour >= 99) {
        minute = minute + (hour - 99) * 60;
        hour = 99;
      }
    }

    if (minute < 10) {
      minutes.innerHTML = `0${minute}`;
    } else {
      minutes.innerHTML = `${minute}`;
    }

    if (hour < 10) {
      hours.innerHTML = `0${hour}`;
    } else {
      hours.innerHTML = `${hour}`;
    }
    if (day < 10) {
      days.innerHTML = `0${day}`;
    } else {
      days.innerHTML = `${day}`;
    }
    if (second < 10) {
      seconds.innerHTML = `0${second}`;
    } else {
      seconds.innerHTML = `${second}`;
    }
  } else {
    alert("time is over");
    clearInterval(countdown);
  }
}, 1000);
timerShow(351);
