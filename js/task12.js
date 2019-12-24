let number = +prompt('Set number from 0 to 9');

let special = '';
switch(number) {
  case 1:
  special = '!';
  break;
  case 2:
  special = '@';
  break;
  case 3:
  special = '#';
  break;
  case 4:
  special = '$';
  break;
  case 5:
  special = '%';
  break;
  case 6:
  special = '^';
  break;
  case 7:
  special = '&';
  break;
  case 8:
  special = '*';
  break;
  case 9:
  special = '(';
  break;
  case 0:
  special = ')';
  break;
  default:
  special = 'else';
  break;  
};
alert(special);