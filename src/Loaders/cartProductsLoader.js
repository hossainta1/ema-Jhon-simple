import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data in database , have use to use async await

    const storedCart = getShoppingCart();
    const savedCart = [];
    console.log(storedCart);

    for (const id in storedCart) {

        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }

    }

    // if two things return
    // return [products, savedCart];
    // another option
    // return {savedCart, cartProducts}

    return savedCart;
};


export default cartProductsLoader;