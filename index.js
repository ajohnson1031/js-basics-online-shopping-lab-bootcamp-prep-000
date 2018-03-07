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
  var i,
      mess;

  if (cart.length <= 0) {
    mess = 'Your shopping cart is empty.';
    console.log(mess);
  } else
  if (cart.length === 1) {
    mess = "In your cart, you have ";

    //console.log(`In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}.`);
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
