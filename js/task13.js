let sum = prompt('Insert sum of USD, you want to change');
let currency = prompt('Choose currensy you want (EUR, UAN, AZN) ');
let EUR = 0.9;
let UAN = 23.32;
let AZN = 1.7;

switch (currency) {
	case 'EUR':
  alert((sum * EUR) + '€');
  break;
	case 'UAN':
  alert((sum * UAN) + '₴');
  break;
  case 'AZN':
  alert(sum * AZN);
  break;
};