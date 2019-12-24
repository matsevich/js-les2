let number = prompt("Вкажіть трьох-значне число");
let fixingNumber = 0;
if (number > 0) {
  fixingNumber = number;
  } else {
      fixingNumber = number * (-1);
  }
let firstNumber = fixingNumber % 10;
let twoNumbers = (fixingNumber - firstNumber) / 10
let secondNumber = twoNumbers % 10;
let thirdNumber = (twoNumbers - secondNumber) / 10

if (number > 0) {
  alert(`Дзеркальне відображення вашого числа ${firstNumber}${secondNumber}${thirdNumber}`);
} else {
  alert(`Дзеркальне відображення вашого числа -${firstNumber}${secondNumber}${thirdNumber}`);
}
