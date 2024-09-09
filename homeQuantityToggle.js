export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productStock= currentCardElement.querySelector(".productStock");

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  if(quantity === stock){
    productStock.style.color = "red";
  } else {
    productStock.style.color = "black";
  }
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
