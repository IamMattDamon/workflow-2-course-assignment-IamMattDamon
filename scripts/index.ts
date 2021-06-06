import { createProduct } from "./helpers/objectHelpers";
import ProductInfo from "./interfaces/ProductInfo";

export const newProduct: ProductInfo = createProduct({ id: 29, code: "l o l", title: "Someone suddenly done did it" });

console.log(newProduct);
