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
  const l = cart.length;

  if (!l) {
    console.log('Your shopping cart is empty.');
  } else
  if (l === 1) {
    let itemName = Object.keys(cart[0]),
        itemPrice = Object.values(cart[0]);
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
  } else
  if (l === 2) {
    let arr = [];

    for (let i = 0; i < l; i++) {
      let itemName = Object.keys(cart[i]);
      let itemPrice = Object.values(cart[i]);

      arr.push(`${itemName} at $${itemPrice}`);
    }

    console.log(`In your cart, you have ${arr.join(' and ')}.`);
  } else
  if (l > 2) {
    let arr = [];

    for (let i = 0; i < l; i++) {
      let itemName = Object.keys(cart[i]);
      let itemPrice = Object.keys(cart[i]);

      if (i === l - 1) {
        arr.push(`and ${itemName} at $${itemPrice}`);
      else
        arr.push(`${itemName} at $${itemPrice}`);

      console.log(`In your cart, you have ${arr.join(', ')}.`);
    }
  }

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
