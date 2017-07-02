import datetime

days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

with open("./src/tests/out.txt", "w") as text_file:
  for y in range(1971, 2500):
    for i in range(len(days)):
      leapDay = 1 if ((y % 4 == 0 and y % 100) or y % 400 == 0) and i == 1 else 0
      for d in range(1, days[i] + 1 + leapDay):
        week = datetime.date(y, i + 1, d).isocalendar()[1]
        text_file.write("{0}\n".format(week))