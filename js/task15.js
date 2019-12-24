let c = +prompt('Enter the length of tha circle (mm)');
let p = +prompt('Enter the perimeter of the square (mm)');
let diameter = c / Math.PI;
let sideOfSquare = p / 4;
if (diameter >= sideOfSquare) {alert('The circle with length '+c+' mm and diameter '+diameter+' mm, can`t fit into square with perimeter '+p+' mm and side length '+sideOfSquare+' mm');}
else if (diameter < sideOfSquare) { alert('You can fit the circle with length '+c+' mm and diameter '+diameter+' mm into square with perimeter '+p+' mm and side length '+sideOfSquare+' mm');}
else alert('Go to school and learn geometry!')
