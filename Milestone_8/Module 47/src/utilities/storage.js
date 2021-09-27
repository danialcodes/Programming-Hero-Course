const setToLocal = id => {
    const item = getCart();
    let shoppingCart = {};
    if (!item) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = JSON.parse(item);
        let product = shoppingCart[id];
        if (product) {
            shoppingCart[id] += 1;
        }
        else {
            shoppingCart[id] = 1;
        }

    }
    updateCart(shoppingCart);
}
const updateCart = (cart) => {
    cart = JSON.stringify(cart);
    localStorage.setItem("shopping-cart", cart);
}
const getCart = () => localStorage.getItem("shopping-cart");

const deleteFromLocal = id => {
    const cart = JSON.parse(getCart());
    if (cart[id]) {
        delete cart[id];
        updateCart(cart);
    }

}
export { setToLocal, deleteFromLocal };