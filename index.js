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
  if (cart.length === 1) {
    var itemName = Object.keys(cart),
        itemPrice = Object.values(cart);
    mess = "In your cart, you have ";
    mess+= `${itemName} at $${itemPrice}.`;

    console.log(mess);
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
