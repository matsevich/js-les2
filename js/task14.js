let x = prompt('Enter the purchase amount');
let discount = 0;
let discountSum = x - (x * (discount / 100));
	if (x <= 0) { alert('Wrong purchase amount');
  } else if (x > 0 && x < 200) { discount = 0; 
  discountSum = x - (x * (discount / 100));
  alert('Your amount due without discount '+discountSum+'');
  } else if (x >= 200 && x < 300) { discount = 3;
  discountSum = x - (x * (discount / 100));
  alert('Your amount due with 3% discount '+discountSum+'');
  } else if (x >= 300 && x < 500) { discount = 5; 
  discountSum = x - (x * (discount / 100));
  alert('Your amount due with 5% discount '+discountSum+'');
  } else if (x >= 500 && x < 1000) { discount = 7; 
  discountSum = x - (x * (discount / 100));
  alert('Your amount due with 7% discount '+discountSum+'');
  } else {
  discount = 0; discountSum = x - (x * (discount / 100));
  alert('You are wery rich, then you  can pay without discount '+discountSum+'')
  }