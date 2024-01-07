import { reverseArray, toReversedArray } from "./reverseArray";

describe("reverseArray", () => {
    it("Should reverse the array in place", () => {
        const array = [1, 2, 3, 4, 5];
        reverseArray(array);

        expect(array).toEqual([5, 4, 3, 2, 1]);
    });

    it("Should maintain the empty array", () => {
        const array: number[] = [];
        reverseArray(array);

        expect(array).toEqual([]);
    });

    it("Should reverse the tuple in place", () => {
        const tuple = [1, "Dois", true, { id: 200 }];
        reverseArray(tuple);

        expect(tuple).toEqual([{ id: 200 }, true, "Dois", 1]);
    });

    it("Should reverse the selected area of the array based on the given indexes", () => {
        const array = [1, 2, 3, 4, 5];
        reverseArray(array, 1, 3);

        expect(array).toEqual([1, 4, 3, 2, 5]);
    });

    it("Should throw an error when give indices are out of bounds", () => {
        const array = [1, 2, 3, 4, 5];
        expect(() => reverseArray(array, -1, 500)).toThrow();
    });

    it("Should throw an error when start is bigger than end", () => {
        const array = [1, 2, 3, 4, 5];
        expect(() => reverseArray(array, 3, 1)).toThrow();
    });
});

describe("toReversedArray", () => {
    it("Should create a new reversed array", () => {
        const array = [1, 2, 3, 4, 5];
        const reversedArray = toReversedArray(array);

        expect(reversedArray).toEqual([5, 4, 3, 2, 1]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
        expect(reversedArray).not.toBe(array);
    });

    it("Should return a new empty array", () => {
        const array: number[] = [];
        const reversedArray = toReversedArray(array);

        expect(reversedArray).toEqual([]);
    });

    it("Should create a new reversed tuple", () => {
        const tuple = [1, "Dois", true, { id: 200 }];
        const reversedTuple = toReversedArray(tuple);

        expect(reversedTuple).toEqual([{ id: 200 }, true, "Dois", 1]);
    });

    it("Should create a new array with the selected area reversed", () => {
        const array = [1, 2, 3, 4, 5];
        const reversedArray = toReversedArray(array, 1, 3);

        expect(reversedArray).toEqual([1, 4, 3, 2, 5]);
    });

    it("Should throw an error when give indices are out of bounds", () => {
        const array = [1, 2, 3, 4, 5];
        expect(() => toReversedArray(array, 1, 50)).toThrow();
    });

    it("Should throw an error when start is bigger than end", () => {
        const array = [1, 2, 3, 4, 5];
        expect(() => toReversedArray(array, 4, 2)).toThrow();
    });
});
