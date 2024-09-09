import { getCartProductFromLS } from "./getCartProducts";
import products from "./api/products.json";



export const updateStock = () => {
let arrLocalStorageProduct = getCartProductFromLS();
arrLocalStorageProduct.forEach(element => {
    const currentProdElem = document.querySelector(`#card${element.id}`);
    let currStock=products.find((curProd) => curProd.id === element.id);
    currentProdElem.querySelector(".productStock").innerText = currStock.stock-element.quantity;
    console.log(currStock.stock);
});
}