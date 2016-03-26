var ONE_HOUR = 60 * 60 * 1000;
var SATURDAY = 6;
var SUNDAY = 0;
var WHISTLE_IN = 9;
var WHISTLE_OUT = 17;

function nextHour(date) {
  return new Date(date.getTime() + ONE_HOUR)
}

function isWorkingDay(date) {
  var day = date.getDay();
  return day !== SATURDAY && day !== SUNDAY;
}

function isWorkingHour(date) {
  var hour = date.getHours();
  return hour >= WHISTLE_IN && hour < WHISTLE_OUT;
}

function isWorkHappening(date) {
  return isWorkingDay(date) && isWorkingHour(date);
}

function calculateDueDate(submitDate, turnaroundTime) {
  var workLeft = turnaroundTime;
  var now = new Date(submitDate);
  while (workLeft > 0) {
    now = nextHour(now);
    if (isWorkHappening(now)) {
      workLeft--;
    }
  }
  return now;
}

module.exports = calculateDueDate;
