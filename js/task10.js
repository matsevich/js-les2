let cash = prompt("Сума вкладу ₴, під 5% річних");
let procent = 5
let termMonse = 2
let outCash = (((procent / 100) / 12) * termMonse) * cash;
alert("Сума отриманих процентів за 2 місяці ₴ "+outCash+"");

