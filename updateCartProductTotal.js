import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");
  let productTax = document.querySelector(".productTax");

  let localCartProducts = getCartProductFromLS();
  let initialValue = 0;
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);
  //   console.log(totalProductPrice);
  let totalTax=Number((totalProductPrice*0.18).toFixed(2));
  productSubTotal.textContent = `₹${totalProductPrice}`;
  if(totalProductPrice>0){
    productFinalTotal.textContent = `₹${(totalProductPrice+totalTax).toFixed(2)}`;
}
else{
    productFinalTotal.textContent = `₹${totalProductPrice}`;
}

if(totalProductPrice>0){
    productTax.textContent = `₹${totalTax}`;
}else{
    productTax.textContent = `₹0`;
}

}
