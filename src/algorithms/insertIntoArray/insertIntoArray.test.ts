import { insertIntoArray } from "./insertIntoArray";

let array: number[];

beforeEach(() => {
    array = [1, 2, 3, 4, 5];
});

describe("insertIntoArray", () => {
    it("Should insert the element at the given index", () => {
        insertIntoArray(array, 2.5, 2);
        expect(array).toEqual([1, 2, 2.5, 3, 4, 5]);
    });

    it("Should insert the element at the first index", () => {
        insertIntoArray(array, 500, 0);
        expect(array).toEqual([500, 1, 2, 3, 4, 5]);
    });

    it("Should insert the element at the end of the array", () => {
        insertIntoArray(array, 500, array.length);
        expect(array).toEqual([1, 2, 3, 4, 5, 500]);
    });

    it("Should add the first element of the array", () => {
        const emptyArray: number[] = [];
        insertIntoArray(emptyArray, 500, 0);
        expect(emptyArray).toEqual([500]);
    });
});
