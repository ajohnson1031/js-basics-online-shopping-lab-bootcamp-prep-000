var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item,
 rand = Math.floor(Math.random() * 100) + 1;
 var obj = { [itemName] : rand };
 if(cart.push(obj)) {
   console.log(`${itemName} has been added to your cart.`);
 }

 return cart;
}

function viewCart() {
  // write your code here

  var mess,
      arr = [],
      i,
      newArr,
      key,
      value;

  if(cart.length <= 0) {
    mess = 'Your shopping cart is empty.';
  } else
  if(cart.length === 1) {
    for(i = 0; i < cart.length; i++) {
      key = Object.keys(cart[i]),
      value = Object.values(cart[i]);
    }
    mess = `In your cart, you have ${key} at $${value}.`;
  } else
  if (cart.length === 2) {
    for(i = 0; i < cart.length; i++) {
      key = Object.keys(cart[i]),
      value = Object.values(cart[i]);
      arr.push(`${key} at $${value}`);
    }
    newArr = arr.join(' and ');
    mess = `In your cart, you have ${newArr}.`;
  } else
  if (cart.length > 2) {
    for(i = 0; i < cart.length; i++) {
      key = Object.keys(cart[i]),
      value = Object.values(cart[i]);

      if(i < cart.length - 1) {
        arr.push(`${key} at $${value}`);
      } else {
        arr.push(`and ${key} at $${value}`);
      }
    }
    newArr = arr.join(', ');
    mess = `In your cart, you have ${newArr}.`;
  }
  console.log(mess);
}

function total() {
      var totalCost = 0,
      value,
      i;

  for(i = 0; i < cart.length; i++) {
    value = parseInt(Object.values(cart[i]));
    totalCost += value;
  }

  return(totalCost);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
