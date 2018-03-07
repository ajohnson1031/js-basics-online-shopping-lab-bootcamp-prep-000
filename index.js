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
 var item = item,
     rand = Math.floor(Math.random() * 100) + 1,
     obj = new Object({ [item] : rand});

 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var i;

  if (cart.length <= 0) {
    console.log('Your shopping cart is empty.');
  }

  if (cart.length === 1) {
    console.log(cart);
    }

  }

  console.log(cart);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
