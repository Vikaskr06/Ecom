import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";
import { updateStock } from "./updateStock";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);

updateStock();



