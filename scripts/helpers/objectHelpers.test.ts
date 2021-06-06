import { newProduct } from "../index";
import { createProduct } from './objectHelpers';

test("create product function is working", () => {
    expect(createProduct({ id: 29, code: "L O L", title: "Someone_sudd" })).toEqual(newProduct);
});
