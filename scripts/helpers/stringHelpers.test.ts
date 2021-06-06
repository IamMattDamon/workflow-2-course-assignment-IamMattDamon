import { makeUppercase } from "./stringHelpers";
import { replaceSpaces } from "./stringHelpers";
import { limitLength } from "./stringHelpers";

//test 1
test("make uppercase", function() {
    expect(makeUppercase("lowercase")).toBe("LOWERCASE");
});

//test 2
test("replace spaces function is working", function () {
    expect(replaceSpaces("product title goes here")).toBe("product_title_goes_here");
});

//test 3
test("limit length function is working", function () {
    expect(limitLength(12, "product title goes here")).toBe("product titl");
});