let sec = 1000;
let min = 60 * sec;
let hour = 60 * min;
let day = 24 * hour;

let future = new Date(Date.now() + day * 10);
giveWay.textContent = `Giveaway Ends on ${future.getDate()}/${future.getMonth() + 1
  }/${future.getFullYear()}`;
function timeReducer() {
  let diff = future - Date.now();

  let days = Math.floor(diff / day);
  days < 10 ? `0${days}` : days;
  let hours = Math.floor((diff % day) / hour);
  hours < 10 ? `0${hours}` : hours;
  let mins = Math.floor(((diff % day) % hour) / min);
  mins < 10 ? `0${mins}` : mins;
  let secs = Math.floor((((diff % day) % hour) % min) / sec);
  secs < 10 ? `0${secs}` : secs;

  if (days || hours || mins || secs) {
    daySpan.textContent = days;
    hourSpan.textContent = hours;
    minSpan.textContent = mins;
    secSpan.textContent = secs;
    return false;
  }
  daySpan.textContent = `00`;
  hourSpan.textContent = `00`;
  minSpan.textContent = `00`;
  secSpan.textContent = `00`;

  return true;
}

let timeInterval = setInterval((_) => {
  if (timeReducer()) {
    clearInterval(timeInterval);
  }
}, 1000);
