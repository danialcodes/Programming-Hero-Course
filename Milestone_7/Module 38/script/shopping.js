const addItem = () => {
    const productBox = document.getElementById('product');
    const product = productBox.value;
    if (product.length > 0) {
        addToCart(product);
    }

    productBox.value = '';
}

const loadPreviousCart = () => {
    const cart = getCart();
    if (cart) {
        for (const name in cart) {
            showProduct(name, cart[name]);
        }
    }
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);

    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addToCart = name => {
    const cart = getCart();

    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1;
    }
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifiedCart);
    document.getElementById('list').textContent = '';
    loadPreviousCart();
}
const showProduct = (name, value) => {
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.innerText = `${name}  ${value}`;
    ul.appendChild(li);
}
loadPreviousCart();
const placeOrder = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        localStorage.removeItem('cart');

    }
    document.getElementById('list').textContent = '';
}