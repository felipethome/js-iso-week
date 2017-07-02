/* eslint-disable no-console */

var fs = require('fs');
var DateUtils = require('../DateUtils');

var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var start = 1971;
var end = 2500;
var y;
var m;
var d;
var leapDay;
var fail;

/* Correctness */

console.log('Testing correctness for all days of', start, 'to', end - 1);

var weeks = [];
fail = false;

for (y = start; y < end; y++) {
  for (m = 0; m < days.length; m++) {
    leapDay = ((y % 4 === 0 && y % 100) || y % 400 === 0) && m === 1 ? 1 : 0;
    for (d = 1; d <= days[m] + leapDay; d++) {
      weeks.push({
        d: d,
        m: m,
        y: y,
        w: DateUtils.getWeekNumber(d, m, y)[1].toString(),
      });
    }
  }
}

var lines = fs.readFileSync('./src/tests/out.txt').toString().split('\n');

for (var i = 0; i < lines.length, i < weeks.length; i++) {
  if (lines[i] !== weeks[i].w) {
    console.log(
      'Fail',
      'correct value:', lines[i],
      'returned value:', weeks[i].w,
      'd:', weeks[i].d, 'm:', weeks[i].m, 'y:', weeks[i].y
    );
    fail = true;
  }
}

if (!fail) {
  console.log('All test cases were successful\n');
}

/* Performance */

console.log('Testing performance for all days of', start, 'to', end - 1);

weeks = [];

console.time('Performance test');
for (y = start; y < end; y++) {
  for (m = 0; m < days.length; m++) {
    leapDay = ((y % 4 === 0 && y % 100) || y % 400 === 0) && m === 1 ? 1 : 0;
    for (d = 1; d <= days[m] + leapDay; d++) {
      weeks.push(DateUtils.getWeekNumber(d, m, y));
    }
  }
}
console.timeEnd('Performance test');