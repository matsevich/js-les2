let age = prompt('How old are you?');
let title = 'Pensioner';
if (age >= 0 && age < 12) {
  title = 'Child';

} else if (age >= 12 && age < 18) {
  title = 'Pidlitok';
} else if (age >= 18 && age < 60) {
  title = 'Adult';
} 
alert(title);
