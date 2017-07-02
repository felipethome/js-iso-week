var DateUtils = (function () {
  // https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year
  // http://www.staff.science.uu.nl/~gent0113/calendar/isocalendar.htm
  var _pYear = function (y) {
    return (y + parseInt(y / 4) - parseInt(y / 100) + parseInt(y / 400)) % 7;
  };

  var totalWeeksInYear = function (y) {
    return 52 + (_pYear(y) === 4 || _pYear(y - 1) === 3 ? 1 : 0);
  };

  // True if the year is one day longer (February has 29 days).
  function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  }

  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function daysFromJan1(d, m, y) {
    // Months go from 0 to 11. So 1 is February.
    var leapDay = isLeapYear(y) && m > 1 ? 1 : 0;
    var sum = 0;

    for (var i = 0; i < m; i++) {
      sum += days[i];
    }

    return sum + d + leapDay;
  }

  // ISO 8601 week number.
  // https://en.wikipedia.org/wiki/ISO_week_date
  // The ISO 8601 definition for week 01 is the week with the Gregorian year's
  // first Thursday in it. Some assumptions can be made from this definition,
  // like: the first week of the year starts on the closest Monday to Jan 1st.
  var getWeekNumber = function (d, m, y) {
    // January 1st of the given year at 00:00:00 time.
    var jan1 = new Date(y, 0, 1, 0, 0, 0, 0);
    // Week day starting on a Monday, 0-6 (in JS the weeks start on Sunday).
    var jan1WeekDay = (jan1.getDay() + 6) % 7;
    // The number of days to the closest Monday to January 1st ("Passed Days").
    var pd = jan1WeekDay < 7 - jan1WeekDay ? jan1WeekDay : -(7 - jan1WeekDay);
    // Total days of the year from January 1st till the given date.
    var totalDays = daysFromJan1(d, m, y);
    // If we get a number like 23.14 it means is more than 23, so we're at
    // some day of the week 24.
    var weekNo = Math.ceil((totalDays + pd) / 7);
    // The total number of weeks in this year.
    var totalWeeks = totalWeeksInYear(y);
    // The year to which the week number belongs.
    var year = y;

    // If the week number is 53, but the year has just 52 weeks then the week
    // number must be the first week of the next year.
    if (weekNo === 53 && totalWeeks === 52) {
      weekNo = 1;
      year = y + 1;
    }
    // If the weekNo is zero then the weekNo must be the last week of the
    // previous year.
    else if (weekNo === 0) {
      weekNo = totalWeeksInYear(y - 1);
      year = y - 1;
    }

    return [year, weekNo];
  };

  return {
    totalWeeksInYear: totalWeeksInYear,
    isLeapYear: isLeapYear,
    daysFromJan1: daysFromJan1,
    getWeekNumber: getWeekNumber,
  };
})();

module.exports = DateUtils;