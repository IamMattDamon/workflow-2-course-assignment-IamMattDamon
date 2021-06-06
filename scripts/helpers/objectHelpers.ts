import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";
import ProductInfo from "../interfaces/ProductInfo";

export function createProduct(product: ProductInfo) {
	// id is a number
	// code is an uppercase string
	// title is a string with spaces replaced with underscores and a maximum length of 12 characters
	return {
		id: product.id,
		code: makeUppercase(product.code),
		title: limitLength(12, replaceSpaces(product.title)),
	};
}

