let year = prompt('Enter the year');
let month = prompt('Enter the month');
while (month < 0 || month > 12) {
alert('Incorrect number of month.');
month = prompt('Enter the month');
}
let day = prompt('Enter the day number');
for ( ; month === 1 || month === 'January' || month === 'january';  ) {}
while (day < 0 || day > 31) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; year % 4 == 0 && year % 100 != 0 || year % 400 == 0; ) {}
for ( ; month === 2 || month === 'February' || month === 'february';  ) {}
while (day < 0 || day > 29) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; year % 1 == 0 && year % 4 != 0 || year % 400 != 0; ) {}
for ( ; month === 2 || month === 'February' || month === 'february';  ) {}
while (day < 0 || day > 28) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 3 || month === 'March' || month === 'march';  ) {}
while (day < 0 || day > 31) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 4 || month === 'April' || month === 'april';  ) {}
while (day < 0 || day > 30) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 5 || month === 'May' || month === 'may';  ) {}
while (day < 0 || day > 31) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 6 || month === 'June' || month === 'june';  ) {}
while (day < 0 || day > 30) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 7 || month === 'July' || month === 'july';  ) {}
while (day < 0 || day > 31) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 8 || month === 'August' || month === 'august';  ) {}
while (day < 0 || day > 31) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 9 || month === 'September' || month === 'september';  ) {}
while (day < 0 || day > 30) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 10 || month === 'October' || month === 'october';  ) {}
while (day < 0 || day > 31) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 11 || month === 'November' || month === 'november';  ) {}
while (day < 0 || day > 30) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
for ( ; month === 12 || month === 'December' || month === 'december';  ) {}
while (day < 0 || day > 31) {
alert('Incorrect day number.');
day = prompt('Enter the day number');
}
let nameMonth = '0';
if (month == 1 || month == 'January' || month == 'january')
nameMonth = 'January';
else if (month == 2 || month == 'February' || month == 'february')
nameMonth = 'February';
else if (month == 3 || month == 'March' || month == 'march')
nameMonth = 'March';
else if (month == 4 || month == 'April' || month == 'april')
nameMonth = 'April';
else if (month == 5 || month == 'May' || month == 'may')
nameMonth = 'May';
else if (month == 6 || month == 'June' || month == 'june')
nameMonth = 'June';
else if (month == 7 || month == 'July' || month == 'july')
nameMonth = 'July';
else if (month == 8 || month == 'August' || month == 'august')
nameMonth = 'August';
else if (month == 9 || month == 'September' || month == 'september')
nameMonth = 'September';
else if (month == 10 || month == 'October' || month == 'october')
nameMonth = 'October';
else if (month == 11 || month == 'November' || month == 'november')
nameMonth = 'November';
else 
nameMonth = 'December';
alert(''+day+' '+nameMonth+' '+year+'year + 1 day');

