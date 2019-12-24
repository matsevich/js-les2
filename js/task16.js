let questionOne = prompt('What is the capital of Great Britain? (1. Krykhivtsi, 2. Dubai, 3. London)');
let pointsOne = 0;
if (questionOne == 3 || questionOne == 'London') pointsOne = 2;
else if (questionOne == 'london') pointsOne = 2;
else if (questionOne == 1 || questionOne == 2) pointsOne = 0;
else pointsOne = 0;
let questionTwo = prompt('What is the formula of ethyl alcohol? (1. CaCO3, 2. C2H5OH, 3. C3H8O)');
if (questionTwo == 2) pointsTwo = 2;
else if (questionTwo == 'C2H5OH') pointsTwo = 2;
else pointsTwo = 0;
let questionThree = prompt('Who is illustrated on the bill of fifty hryvnias? (1. Andriy Danilko, 2. Yaroslav Mudriy, 3. Mikhailo Grushevskiy)')
if (questionThree == 3) pointsThree = 2;
else if (questionThree == 'Mikhailo Grushevskiy') pointsThree = 2;
else  pointsThree = 0;
let sum = pointsOne + pointsTwo + pointsThree;
if (sum == 0)
alert('Shame on you! You score '+sum+' points.')
else if (sum == 6)
alert('Congratulations! You score '+sum+' points.')
else
alert('You score '+sum+' points.');